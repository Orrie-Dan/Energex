/**
 * Server-only inquiry configuration. Never import from client components.
 *
 * Delivery is fail-closed: unless `INQUIRY_DELIVERY_ENABLED=true` and every
 * required value is present and well-formed, the endpoint answers
 * `unavailable` and processes nothing. No recipient, sender, or domain has a
 * default value.
 *
 * Strict by default on every host: a shared rate-limit store and real
 * Turnstile tokens are required unless `INQUIRY_ALLOW_TEST_MODE=true`, which is
 * refused when `VERCEL_ENV=production`.
 */

export type RateLimitStoreConfig =
  | { kind: "memory" }
  | { kind: "upstash"; url: string; token: string };

export type InquiryServerConfig = {
  resendApiKey: string;
  /** `address` or `Display Name <address>` on a domain verified in Resend. */
  from: string;
  toProject: string;
  toEquipment: string;
  turnstileSecretKey: string;
  allowedOrigins: readonly string[];
  /** Hostnames of `allowedOrigins`; Turnstile tokens must be issued for one of them. */
  allowedHostnames: readonly string[];
  rateLimitStore: RateLimitStoreConfig;
  /** Maximum emails handed to the provider per UTC day across all visitors. */
  globalDailyLimit: number;
  /**
   * Local/preview testing only: allows the per-instance memory rate limiter and
   * Cloudflare testing-key Turnstile results. Never true in Vercel production.
   */
  testMode: boolean;
};

/** Technical safeguard against quota exhaustion. Confirm against expected inquiry volume. */
export const DEFAULT_GLOBAL_DAILY_LIMIT = 100;

export type InquiryConfigResult =
  | { enabled: true; config: InquiryServerConfig }
  /** `reasons` names missing or invalid settings. It never contains values. */
  | { enabled: false; reasons: string[] };

type Env = Record<string, string | undefined>;

const ADDRESS = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
const NAMED_ADDRESS = /^[^<>\r\n"]{1,80} <([^<>\s]+)>$/;

export function isPlainAddress(value: string): boolean {
  return value.length <= 254 && ADDRESS.test(value);
}

function isSenderAddress(value: string): boolean {
  const named = NAMED_ADDRESS.exec(value);
  return isPlainAddress(named ? named[1] : value);
}

function parseOrigins(value: string): string[] | null {
  const origins = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  if (origins.length === 0) return null;
  for (const origin of origins) {
    try {
      const url = new URL(origin);
      if (url.origin !== origin) return null;
      const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
      if (url.protocol !== "https:" && !(local && url.protocol === "http:")) return null;
    } catch {
      return null;
    }
  }
  return origins;
}

export function readInquiryServerConfig(env: Env): InquiryConfigResult {
  if (env.INQUIRY_DELIVERY_ENABLED?.trim() !== "true") {
    return { enabled: false, reasons: ["INQUIRY_DELIVERY_ENABLED is not true"] };
  }

  const reasons: string[] = [];
  const value = (name: string) => (env[name] ?? "").trim();

  const resendApiKey = value("RESEND_API_KEY");
  if (!resendApiKey) reasons.push("RESEND_API_KEY is missing");

  const from = value("INQUIRY_FROM");
  if (!from) reasons.push("INQUIRY_FROM is missing");
  else if (!isSenderAddress(from)) reasons.push("INQUIRY_FROM is not a valid sender");

  const toProject = value("INQUIRY_TO_PROJECT");
  if (!toProject) reasons.push("INQUIRY_TO_PROJECT is missing");
  else if (!isPlainAddress(toProject)) reasons.push("INQUIRY_TO_PROJECT is not a single address");

  const toEquipment = value("INQUIRY_TO_EQUIPMENT");
  if (!toEquipment) reasons.push("INQUIRY_TO_EQUIPMENT is missing");
  else if (!isPlainAddress(toEquipment)) reasons.push("INQUIRY_TO_EQUIPMENT is not a single address");

  const turnstileSecretKey = value("TURNSTILE_SECRET_KEY");
  if (!turnstileSecretKey) reasons.push("TURNSTILE_SECRET_KEY is missing");

  const allowedOrigins = parseOrigins(value("INQUIRY_ALLOWED_ORIGINS"));
  if (!allowedOrigins) reasons.push("INQUIRY_ALLOWED_ORIGINS is missing or invalid");

  const testModeRequested = value("INQUIRY_ALLOW_TEST_MODE") === "true";
  if (testModeRequested && env.VERCEL_ENV === "production") {
    reasons.push("INQUIRY_ALLOW_TEST_MODE cannot be used in production");
  }
  const testMode = testModeRequested && env.VERCEL_ENV !== "production";

  let globalDailyLimit = DEFAULT_GLOBAL_DAILY_LIMIT;
  const rawDailyLimit = value("INQUIRY_GLOBAL_DAILY_LIMIT");
  if (rawDailyLimit) {
    const parsed = Number(rawDailyLimit);
    if (Number.isInteger(parsed) && parsed > 0 && parsed <= 10_000) globalDailyLimit = parsed;
    else reasons.push("INQUIRY_GLOBAL_DAILY_LIMIT must be an integer from 1 to 10000");
  }

  const upstashUrl = value("UPSTASH_REDIS_REST_URL");
  const upstashToken = value("UPSTASH_REDIS_REST_TOKEN");
  let rateLimitStore: RateLimitStoreConfig = { kind: "memory" };
  if (upstashUrl || upstashToken) {
    if (!upstashUrl.startsWith("https://") || !upstashToken) {
      reasons.push("UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are incomplete");
    } else {
      rateLimitStore = { kind: "upstash", url: upstashUrl.replace(/\/+$/, ""), token: upstashToken };
    }
  } else if (!testMode) {
    // Per-instance memory limits are not meaningful across serverless instances.
    reasons.push("A shared rate-limit store (UPSTASH_REDIS_REST_*) is required unless INQUIRY_ALLOW_TEST_MODE=true");
  }

  if (reasons.length > 0 || !allowedOrigins) return { enabled: false, reasons };

  return {
    enabled: true,
    config: {
      resendApiKey,
      from,
      toProject,
      toEquipment,
      turnstileSecretKey,
      allowedOrigins,
      allowedHostnames: allowedOrigins.map((origin) => new URL(origin).hostname),
      rateLimitStore,
      globalDailyLimit,
      testMode,
    },
  };
}
