import { createHash } from "node:crypto";
import {
  INQUIRY_MAX_BODY_BYTES,
  inquiryReference,
  type InquiryRequestBody,
  type InquiryResponseBody,
} from "../protocol";
import { hasInquiryErrors, validateEquipmentInquiry, validateProjectInquiry } from "../validate";
import type { InquiryConfigResult } from "./config";
import { buildInquiryEmail } from "./email";
import { parseInquiryRequest } from "./parse";
import type { RateLimiter } from "./rate-limit";
import type { EmailSender } from "./resend";
import type { TurnstileVerifier } from "./turnstile";

/** Technical abuse limits (not business policy). Tune with production traffic. */
export const INQUIRY_RATE_LIMITS = {
  perIp: { limit: 5, windowSeconds: 10 * 60 },
  perEmail: { limit: 5, windowSeconds: 60 * 60 },
} as const;

const IDEMPOTENCY_TTL_MS = 24 * 60 * 60 * 1000;

export type InquiryLogEvent = {
  outcome: string;
  reference?: string;
  mode?: string;
  httpStatus?: number | null;
  detail?: string;
};

export type InquiryHandlerDeps = {
  config: InquiryConfigResult;
  rateLimiter: RateLimiter;
  verifyTurnstile: TurnstileVerifier;
  sendEmail: EmailSender;
  idempotency: IdempotencyStore;
  /** Receives no personal data: references, modes, outcomes and status codes only. */
  log?: (event: InquiryLogEvent) => void;
};

type Entry =
  | { state: "in_flight"; fingerprint: string; expiresAt: number }
  | { state: "accepted"; fingerprint: string; reference: string; expiresAt: number };

export type IdempotencyStore = {
  begin(
    key: string,
    fingerprint: string,
  ): { kind: "new" } | { kind: "in_flight" } | { kind: "conflict" } | { kind: "accepted"; reference: string };
  accept(key: string, fingerprint: string, reference: string): void;
  release(key: string): void;
};

/**
 * Per-instance record of recent submissions. Resend's Idempotency-Key header
 * provides the cross-instance guarantee; this store answers repeats locally
 * and blocks concurrent duplicates on the same instance.
 */
export function createMemoryIdempotencyStore(now: () => number = Date.now): IdempotencyStore {
  const entries = new Map<string, Entry>();
  const sweep = (time: number) => {
    for (const [key, entry] of entries) if (entry.expiresAt <= time) entries.delete(key);
  };
  return {
    begin(key, fingerprint) {
      const time = now();
      if (entries.size > 5_000) sweep(time);
      const entry = entries.get(key);
      if (entry && entry.expiresAt > time) {
        if (entry.fingerprint !== fingerprint) return { kind: "conflict" };
        if (entry.state === "in_flight") return { kind: "in_flight" };
        return { kind: "accepted", reference: entry.reference };
      }
      entries.set(key, { state: "in_flight", fingerprint, expiresAt: time + IDEMPOTENCY_TTL_MS });
      return { kind: "new" };
    },
    accept(key, fingerprint, reference) {
      entries.set(key, { state: "accepted", fingerprint, reference, expiresAt: now() + IDEMPOTENCY_TTL_MS });
    },
    release(key) {
      const entry = entries.get(key);
      if (entry?.state === "in_flight") entries.delete(key);
    },
  };
}

function respond(status: number, body: InquiryResponseBody, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...headers,
    },
  });
}

const IP_LIKE = /^[0-9A-Fa-f:.]{2,45}$/;

/**
 * Client address as set by the hosting edge (Vercel sets `x-real-ip` and
 * `x-forwarded-for`). These headers are only trustworthy behind a proxy that
 * overwrites them; requests without a usable value are refused.
 */
export function clientIp(request: Request): string | null {
  const real = request.headers.get("x-real-ip")?.trim();
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = real || forwarded || "";
  return IP_LIKE.test(ip) ? ip : null;
}

async function readLimitedBody(request: Request, maxBytes: number): Promise<string | null> {
  const declared = Number(request.headers.get("content-length") ?? "");
  if (Number.isFinite(declared) && declared > maxBytes) return null;
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel().catch(() => undefined);
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return null;
  }
}

function fingerprintOf(request: InquiryRequestBody): string {
  const fields = Object.fromEntries(
    Object.entries(request.fields).map(([key, value]) => [key, value.trim()]),
  );
  return createHash("sha256").update(JSON.stringify({ mode: request.mode, fields })).digest("hex");
}

/**
 * Handles one inquiry POST. Order matters: cheap structural checks run before
 * rate limiting, bot verification, and finally the provider call. Every
 * failure path returns a non-`accepted` status.
 */
export async function handleInquiryRequest(request: Request, deps: InquiryHandlerDeps): Promise<Response> {
  const log = deps.log ?? (() => undefined);

  if (!deps.config.enabled) {
    return respond(503, { status: "unavailable" });
  }
  const config = deps.config.config;

  const origin = request.headers.get("origin");
  if (!origin || !config.allowedOrigins.includes(origin)) {
    log({ outcome: "rejected_origin" });
    return respond(403, { status: "rejected" });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!/^application\/json(\s*;|$)/i.test(contentType)) {
    return respond(415, { status: "rejected" });
  }

  const raw = await readLimitedBody(request, INQUIRY_MAX_BODY_BYTES);
  if (raw === null) {
    log({ outcome: "rejected_size_or_encoding" });
    return respond(413, { status: "rejected" });
  }

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return respond(400, { status: "rejected" });
  }
  const body = parseInquiryRequest(json);
  if (!body) {
    log({ outcome: "rejected_shape" });
    return respond(400, { status: "rejected" });
  }

  const reference = inquiryReference(body.idempotencyKey);

  if (body.website !== "") {
    log({ outcome: "honeypot", reference });
    return respond(400, { status: "verification_failed" });
  }

  const ip = clientIp(request);
  if (!ip) {
    // Fail closed rather than sharing one bucket among all unidentified clients.
    log({ outcome: "rejected_missing_client_ip", reference });
    return respond(400, { status: "rejected" });
  }
  try {
    const decision = await deps.rateLimiter.hit(
      `ip:${ip}`,
      INQUIRY_RATE_LIMITS.perIp.limit,
      INQUIRY_RATE_LIMITS.perIp.windowSeconds,
    );
    if (!decision.allowed) {
      log({ outcome: "rate_limited_ip", reference });
      return respond(
        429,
        { status: "rate_limited", retryAfterSeconds: decision.retryAfterSeconds },
        { "Retry-After": String(decision.retryAfterSeconds) },
      );
    }
  } catch {
    log({ outcome: "rate_limit_store_error", reference });
    return respond(503, { status: "failed" });
  }

  const turnstile = await deps.verifyTurnstile(body.turnstileToken, ip);
  if (turnstile.kind === "rejected") {
    log({ outcome: "turnstile_rejected", reference });
    return respond(400, { status: "verification_failed" });
  }
  if (turnstile.kind !== "passed") {
    log({ outcome: "turnstile_error", reference });
    return respond(503, { status: "failed" });
  }

  const errors =
    body.mode === "project"
      ? validateProjectInquiry(body.fields)
      : validateEquipmentInquiry(body.fields, null);
  if (hasInquiryErrors(errors)) {
    return respond(400, { status: "invalid", errors });
  }

  const emailKey = createHash("sha256").update(body.fields.email.trim().toLowerCase()).digest("hex");
  try {
    const decision = await deps.rateLimiter.hit(
      `email:${emailKey}`,
      INQUIRY_RATE_LIMITS.perEmail.limit,
      INQUIRY_RATE_LIMITS.perEmail.windowSeconds,
    );
    if (!decision.allowed) {
      log({ outcome: "rate_limited_email", reference });
      return respond(
        429,
        { status: "rate_limited", retryAfterSeconds: decision.retryAfterSeconds },
        { "Retry-After": String(decision.retryAfterSeconds) },
      );
    }
  } catch {
    log({ outcome: "rate_limit_store_error", reference });
    return respond(503, { status: "failed" });
  }

  const fingerprint = fingerprintOf(body);
  const prior = deps.idempotency.begin(body.idempotencyKey, fingerprint);
  if (prior.kind === "accepted") {
    log({ outcome: "duplicate_replayed", reference, mode: body.mode });
    return respond(200, { status: "accepted", reference: prior.reference });
  }
  if (prior.kind === "in_flight") {
    log({ outcome: "duplicate_in_flight", reference });
    return respond(409, { status: "uncertain" });
  }
  if (prior.kind === "conflict") {
    log({ outcome: "idempotency_conflict", reference });
    return respond(422, { status: "rejected" });
  }

  // Global cap on emails handed to the provider; replays above do not count.
  try {
    const day = new Date().toISOString().slice(0, 10);
    const decision = await deps.rateLimiter.hit(`global:${day}`, config.globalDailyLimit, 24 * 60 * 60);
    if (!decision.allowed) {
      deps.idempotency.release(body.idempotencyKey);
      log({ outcome: "global_daily_limit", reference });
      return respond(503, { status: "failed" });
    }
  } catch {
    deps.idempotency.release(body.idempotencyKey);
    log({ outcome: "rate_limit_store_error", reference });
    return respond(503, { status: "failed" });
  }

  const email = buildInquiryEmail({
    request: body,
    reference,
    from: config.from,
    to: body.mode === "project" ? config.toProject : config.toEquipment,
  });

  let outcome;
  try {
    outcome = await deps.sendEmail(email, body.idempotencyKey);
  } catch {
    outcome = { kind: "unknown" as const, httpStatus: null };
  }

  if (outcome.kind === "sent") {
    deps.idempotency.accept(body.idempotencyKey, fingerprint, reference);
    log({ outcome: "accepted", reference, mode: body.mode, detail: outcome.providerId });
    return respond(200, { status: "accepted", reference });
  }

  deps.idempotency.release(body.idempotencyKey);
  if (outcome.kind === "refused") {
    log({ outcome: "provider_refused", reference, mode: body.mode, httpStatus: outcome.httpStatus });
    return respond(502, { status: "failed" });
  }
  log({ outcome: "provider_unknown", reference, mode: body.mode, httpStatus: outcome.httpStatus });
  return respond(504, { status: "uncertain" });
}
