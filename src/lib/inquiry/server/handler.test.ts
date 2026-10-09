import { describe, expect, it, vi } from "vitest";
import { INQUIRY_MAX_BODY_BYTES } from "../protocol";
import { validEquipment, validProject } from "../test-fixtures";
import type { InquiryConfigResult, InquiryServerConfig } from "./config";
import { createMemoryIdempotencyStore, handleInquiryRequest, type InquiryHandlerDeps } from "./handler";
import { createMemoryRateLimiter, type RateLimiter } from "./rate-limit";
import type { EmailSender, OutgoingEmail, SendOutcome } from "./resend";
import type { TurnstileOutcome } from "./turnstile";

const ORIGIN = "https://site.test";
const KEY = "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4e";

const enabledConfig: InquiryConfigResult = {
  enabled: true,
  config: {
    resendApiKey: "re_test_key",
    from: "Website <inquiries@mail.site.test>",
    toProject: "projects@site.test",
    toEquipment: "equipment@site.test",
    turnstileSecretKey: "turnstile-secret",
    allowedOrigins: [ORIGIN],
    allowedHostnames: ["site.test"],
    rateLimitStore: { kind: "memory" },
    globalDailyLimit: 100,
    testMode: true,
  },
};

function makeDeps(overrides: Partial<InquiryHandlerDeps> & { sendOutcome?: SendOutcome } = {}) {
  const sent: { email: OutgoingEmail; key: string }[] = [];
  const sendEmail: EmailSender = vi.fn(async (email: OutgoingEmail, key: string): Promise<SendOutcome> => {
    sent.push({ email, key });
    return overrides.sendOutcome ?? { kind: "sent", providerId: "resend-id-1" };
  });
  const verifyTurnstile = vi.fn(async (): Promise<TurnstileOutcome> => ({ kind: "passed" }));
  const logs: unknown[] = [];
  const deps: InquiryHandlerDeps = {
    config: enabledConfig,
    rateLimiter: createMemoryRateLimiter(),
    verifyTurnstile,
    sendEmail,
    idempotency: createMemoryIdempotencyStore(),
    log: (event) => logs.push(event),
    ...overrides,
  };
  return { deps, sent, sendEmail: deps.sendEmail, verifyTurnstile: deps.verifyTurnstile, logs };
}

function body(overrides: Record<string, unknown> = {}) {
  return {
    mode: "project",
    fields: { ...validProject },
    turnstileToken: "token-ok",
    idempotencyKey: KEY,
    website: "",
    ...overrides,
  };
}

function post(
  payload: unknown,
  { origin = ORIGIN, contentType = "application/json", ip = "203.0.113.7" }: { origin?: string | null; contentType?: string; ip?: string } = {},
) {
  const headers: Record<string, string> = { "content-type": contentType, "x-forwarded-for": ip };
  if (origin) headers.origin = origin;
  return new Request("https://site.test/api/inquiry", {
    method: "POST",
    headers,
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

async function call(deps: InquiryHandlerDeps, request: Request) {
  const response = await handleInquiryRequest(request, deps);
  return { status: response.status, json: await response.json(), headers: response.headers };
}

describe("activation", () => {
  it("returns unavailable and does nothing when delivery is disabled", async () => {
    const { deps, sendEmail, verifyTurnstile } = makeDeps({
      config: { enabled: false, reasons: ["INQUIRY_DELIVERY_ENABLED is not true"] },
    });
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 503, json: { status: "unavailable" } });
    expect(sendEmail).not.toHaveBeenCalled();
    expect(verifyTurnstile).not.toHaveBeenCalled();
  });
});

describe("request boundary", () => {
  it("rejects missing or foreign origins", async () => {
    const { deps, sendEmail } = makeDeps();
    expect((await call(deps, post(body(), { origin: null }))).status).toBe(403);
    expect((await call(deps, post(body(), { origin: "https://evil.test" }))).status).toBe(403);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects non-JSON content types", async () => {
    const { deps } = makeDeps();
    const result = await call(deps, post("name=x", { contentType: "application/x-www-form-urlencoded" }));
    expect(result).toMatchObject({ status: 415, json: { status: "rejected" } });
  });

  it("rejects oversized bodies without parsing them", async () => {
    const { deps, sendEmail } = makeDeps();
    const huge = JSON.stringify(body({ fields: { ...validProject, description: "x".repeat(INQUIRY_MAX_BODY_BYTES) } }));
    const result = await call(deps, post(huge));
    expect(result).toMatchObject({ status: 413, json: { status: "rejected" } });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects malformed JSON and unexpected shapes", async () => {
    const { deps, sendEmail } = makeDeps();
    expect((await call(deps, post("{not json"))).status).toBe(400);
    expect((await call(deps, post(body({ mode: "other" })))).status).toBe(400);
    expect((await call(deps, post(body({ extra: true })))).status).toBe(400);
    expect((await call(deps, post(body({ idempotencyKey: "not-a-uuid" })))).status).toBe(400);
    expect((await call(deps, post(body({ fields: { ...validProject, phone: 123 } })))).status).toBe(400);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("never accepts document data", async () => {
    const { deps, sendEmail } = makeDeps();
    const withDocument = body({ document: { fileName: "a.pdf", bytes: "JVBERi0=" } });
    expect((await call(deps, post(withDocument))).json).toEqual({ status: "rejected" });
    const fieldDocument = body({
      mode: "equipment",
      fields: { ...validEquipment, document: "JVBERi0=" },
    });
    expect((await call(deps, post(fieldDocument))).json).toEqual({ status: "rejected" });
    expect(sendEmail).not.toHaveBeenCalled();
  });
});

describe("abuse controls", () => {
  it("rejects a filled honeypot without contacting the provider", async () => {
    const { deps, sendEmail, verifyTurnstile } = makeDeps();
    const result = await call(deps, post(body({ website: "https://spam.test" })));
    expect(result).toMatchObject({ status: 400, json: { status: "verification_failed" } });
    expect(verifyTurnstile).not.toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects failed bot verification", async () => {
    const { deps, sendEmail } = makeDeps({ verifyTurnstile: async () => ({ kind: "rejected" }) });
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 400, json: { status: "verification_failed" } });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("fails closed when bot verification is unreachable", async () => {
    const { deps, sendEmail } = makeDeps({ verifyTurnstile: async () => ({ kind: "error" }) });
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 503, json: { status: "failed" } });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rate limits by IP with Retry-After", async () => {
    const { deps } = makeDeps();
    // Distinct emails so only the per-IP limit can trigger.
    const withEmail = (i: number | string, key: string) =>
      body({ idempotencyKey: key, fields: { ...validProject, email: `user${i}@example.com` } });
    for (let i = 0; i < 5; i += 1) {
      const key = `3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4${i}`;
      expect((await call(deps, post(withEmail(i, key)))).status).toBe(200);
    }
    const blocked = await call(deps, post(withEmail("x", "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d49")));
    expect(blocked.status).toBe(429);
    expect(blocked.json.status).toBe("rate_limited");
    expect(Number(blocked.headers.get("retry-after"))).toBeGreaterThan(0);
    // A different client is unaffected.
    const other = await call(deps, post(withEmail("y", "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d48"), { ip: "198.51.100.1" }));
    expect(other.status).toBe(200);
  });

  it("rate limits by submitter email across IPs", async () => {
    const { deps } = makeDeps();
    for (let i = 0; i < 5; i += 1) {
      const key = `3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4${i}`;
      const result = await call(deps, post(body({ idempotencyKey: key }), { ip: `198.51.100.${i}` }));
      expect(result.status).toBe(200);
    }
    const blocked = await call(
      deps,
      post(body({ idempotencyKey: "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d49" }), { ip: "198.51.100.99" }),
    );
    expect(blocked.status).toBe(429);
  });

  it("fails closed when the rate-limit store errors", async () => {
    const broken: RateLimiter = {
      hit: async () => {
        throw new Error("store down");
      },
    };
    const { deps, sendEmail } = makeDeps({ rateLimiter: broken });
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 503, json: { status: "failed" } });
    expect(sendEmail).not.toHaveBeenCalled();
  });
});

describe("server-side validation", () => {
  it("returns field error codes and sends nothing", async () => {
    const { deps, sendEmail } = makeDeps();
    const result = await call(deps, post(body({ fields: { ...validProject, email: "a@b.com, c@d.com", location: "" } })));
    expect(result.status).toBe(400);
    expect(result.json).toEqual({
      status: "invalid",
      errors: { email: { code: "invalidEmail" }, location: { code: "required" } },
    });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("rejects unsupported equipment categories", async () => {
    const { deps, sendEmail } = makeDeps();
    const result = await call(
      deps,
      post(body({ mode: "equipment", fields: { ...validEquipment, category: "not-a-category" } })),
    );
    expect(result.json).toEqual({ status: "invalid", errors: { category: { code: "unknownCategory" } } });
    expect(sendEmail).not.toHaveBeenCalled();
  });
});

describe("delivery outcomes", () => {
  it("accepts a project inquiry only after the provider returns an id", async () => {
    const { deps, sent, logs } = makeDeps();
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 200, json: { status: "accepted", reference: "ENX-3F2B8C1E4D" } });
    expect(sent).toHaveLength(1);
    expect(sent[0].key).toBe(KEY);
    expect(sent[0].email.to).toBe("projects@site.test");
    expect(sent[0].email.replyTo).toBe(validProject.email);
    expect(sent[0].email.subject).toContain("[Project inquiry ENX-3F2B8C1E4D]");
    // Logs carry no personal data.
    expect(JSON.stringify(logs)).not.toContain(validProject.email);
    expect(JSON.stringify(logs)).not.toContain(validProject.name);
  });

  it("routes equipment quotation requests to the equipment recipient", async () => {
    const { deps, sent } = makeDeps();
    const result = await call(deps, post(body({ mode: "equipment", fields: { ...validEquipment } })));
    expect(result.json.status).toBe("accepted");
    expect(sent[0].email.to).toBe("equipment@site.test");
    expect(sent[0].email.subject).toContain("[Equipment quotation");
    expect(sent[0].email.tags).toEqual([{ name: "inquiry_type", value: "equipment" }]);
  });

  it("reports a provider refusal as failed, never accepted", async () => {
    const { deps } = makeDeps({ sendOutcome: { kind: "refused", httpStatus: 422 } });
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 502, json: { status: "failed" } });
  });

  it("reports an unknown provider outcome as uncertain", async () => {
    const { deps } = makeDeps({ sendOutcome: { kind: "unknown", httpStatus: null } });
    const result = await call(deps, post(body()));
    expect(result).toMatchObject({ status: 504, json: { status: "uncertain" } });
  });

  it("treats a throwing sender as uncertain", async () => {
    const { deps } = makeDeps({
      sendEmail: async () => {
        throw new Error("boom");
      },
    });
    expect((await call(deps, post(body()))).json).toEqual({ status: "uncertain" });
  });
});

describe("duplicates", () => {
  it("replays an accepted submission without sending again", async () => {
    const { deps, sent } = makeDeps();
    const first = await call(deps, post(body()));
    const second = await call(deps, post(body({ turnstileToken: "token-2" })));
    expect(second.json).toEqual(first.json);
    expect(sent).toHaveLength(1);
  });

  it("blocks a concurrent duplicate while the first is in flight", async () => {
    let release: (outcome: SendOutcome) => void = () => undefined;
    const pending = new Promise<SendOutcome>((resolve) => {
      release = resolve;
    });
    const sendEmail = vi.fn(() => pending);
    const { deps } = makeDeps({ sendEmail });
    const firstPromise = call(deps, post(body()));
    await vi.waitFor(() => expect(sendEmail).toHaveBeenCalledTimes(1));
    const second = await call(deps, post(body({ turnstileToken: "token-2" })));
    expect(second).toMatchObject({ status: 409, json: { status: "uncertain" } });
    release({ kind: "sent", providerId: "id" });
    expect((await firstPromise).json.status).toBe("accepted");
    expect(sendEmail).toHaveBeenCalledTimes(1);
  });

  it("refuses to reuse a key for different content", async () => {
    const { deps, sent } = makeDeps();
    await call(deps, post(body()));
    const changed = await call(deps, post(body({ fields: { ...validProject, location: "Lagos" } })));
    expect(changed).toMatchObject({ status: 422, json: { status: "rejected" } });
    expect(sent).toHaveLength(1);
  });

  it("retries an uncertain submission with the same provider idempotency key and payload", async () => {
    const outcomes: SendOutcome[] = [
      { kind: "unknown", httpStatus: 500 },
      { kind: "sent", providerId: "id-after-retry" },
    ];
    const calls: { email: OutgoingEmail; key: string }[] = [];
    const sendEmail: EmailSender = async (email, key) => {
      calls.push({ email, key });
      return outcomes.shift()!;
    };
    const { deps } = makeDeps({ sendEmail });
    expect((await call(deps, post(body()))).json.status).toBe("uncertain");
    expect((await call(deps, post(body({ turnstileToken: "token-2" })))).json.status).toBe("accepted");
    expect(calls).toHaveLength(2);
    expect(calls[1].key).toBe(calls[0].key);
    expect(calls[1].email).toEqual(calls[0].email);
  });
});

describe("review follow-ups", () => {
  it("refuses requests without a usable client IP instead of sharing a bucket", async () => {
    const { deps, sendEmail } = makeDeps();
    const request = new Request("https://site.test/api/inquiry", {
      method: "POST",
      headers: { "content-type": "application/json", origin: ORIGIN },
      body: JSON.stringify(body()),
    });
    expect((await call(deps, request)).json).toEqual({ status: "rejected" });
    expect((await call(deps, post(body(), { ip: "not an ip<script>" }))).json).toEqual({ status: "rejected" });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("prefers x-real-ip and passes the submitted token and IP to the verifier", async () => {
    const { deps, verifyTurnstile } = makeDeps();
    const request = new Request("https://site.test/api/inquiry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: ORIGIN,
        "x-real-ip": "198.51.100.20",
        "x-forwarded-for": "203.0.113.99, 10.0.0.1",
      },
      body: JSON.stringify(body({ turnstileToken: "token-from-widget" })),
    });
    await call(deps, request);
    expect(verifyTurnstile).toHaveBeenCalledWith("token-from-widget", "198.51.100.20");
  });

  it("rejects bodies that are not valid UTF-8", async () => {
    const { deps } = makeDeps();
    const bytes = new Uint8Array([0x7b, 0xff, 0xfe, 0x7d]);
    const request = new Request("https://site.test/api/inquiry", {
      method: "POST",
      headers: { "content-type": "application/json", origin: ORIGIN, "x-forwarded-for": "203.0.113.7" },
      body: bytes,
    });
    expect((await call(deps, request)).status).toBe(413);
  });

  it("fails closed when the per-email limiter call fails", async () => {
    let calls = 0;
    const flaky: RateLimiter = {
      hit: async () => {
        calls += 1;
        if (calls >= 2) throw new Error("store down");
        return { allowed: true, retryAfterSeconds: 0 };
      },
    };
    const { deps, sendEmail } = makeDeps({ rateLimiter: flaky });
    expect((await call(deps, post(body()))).json).toEqual({ status: "failed" });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("enforces the global daily cap and does not count replays", async () => {
    const { deps, sent } = makeDeps({
      config: { enabled: true, config: { ...(enabledConfig as { enabled: true; config: InquiryServerConfig }).config, globalDailyLimit: 2 } },
    });
    const key = (i: number) => `3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4${i}`;
    const send = (i: number, extra: Record<string, unknown> = {}) =>
      call(
        deps,
        post(body({ idempotencyKey: key(i), fields: { ...validProject, email: `g${i}@example.com` }, ...extra }), {
          ip: `198.51.100.${i}`,
        }),
      );
    expect((await send(1)).json.status).toBe("accepted");
    expect((await send(1, { turnstileToken: "replay" })).json.status).toBe("accepted"); // replay, not counted
    expect((await send(2)).json.status).toBe("accepted");
    const capped = await send(3);
    expect(capped).toMatchObject({ status: 503, json: { status: "failed" } });
    expect(sent).toHaveLength(2);
  });

  it("logs no submitted field values on any outcome", async () => {
    const values = [...Object.values(validProject), ...Object.values(validEquipment)].filter((v) => v.length > 3);
    const scenarios: [Partial<InquiryHandlerDeps> & { sendOutcome?: SendOutcome }, Record<string, unknown>][] = [
      [{}, {}],
      [{}, { mode: "equipment", fields: { ...validEquipment } }],
      [{ sendOutcome: { kind: "refused", httpStatus: 422 } }, {}],
      [{ sendOutcome: { kind: "unknown", httpStatus: null } }, {}],
      [{ verifyTurnstile: async () => ({ kind: "rejected" }) }, {}],
      [{ verifyTurnstile: async () => ({ kind: "error" }) }, {}],
      [{}, { website: "spam" }],
      [{}, { fields: { ...validProject, email: "bad" } }],
    ];
    for (const [overrides, payload] of scenarios) {
      const { deps, logs } = makeDeps(overrides);
      await call(deps, post(body(payload)));
      const text = JSON.stringify(logs);
      for (const value of values) expect(text, value).not.toContain(value);
    }
  });

  it("expires idempotency records after 24 hours", () => {
    let now = 0;
    const store = createMemoryIdempotencyStore(() => now);
    expect(store.begin("k", "f").kind).toBe("new");
    store.accept("k", "f", "ENX-1");
    expect(store.begin("k", "f")).toEqual({ kind: "accepted", reference: "ENX-1" });
    now = 24 * 60 * 60 * 1000 + 1;
    expect(store.begin("k", "f").kind).toBe("new");
  });
});

describe("test-review follow-ups", () => {
  const keyN = (i: number) => `3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4${i}`;

  it("rejects header-injection attempts in single-line fields before anything is sent", async () => {
    const { deps, sendEmail } = makeDeps();
    for (const fields of [
      { ...validProject, company: "Acme\r\nBcc: victim@example.com" },
      { ...validProject, location: "HK\nSubject: spoof" },
      { ...validProject, email: "a@b.com\r\nBcc: c@d.com" },
    ]) {
      const result = await call(deps, post(body({ fields })));
      expect(result).toMatchObject({ status: 400, json: { status: "invalid" } });
    }
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("runs origin and content-type checks before parsing or bot verification", async () => {
    const { deps, verifyTurnstile, sendEmail } = makeDeps();
    expect((await call(deps, post("{not json", { origin: "https://evil.test" }))).status).toBe(403);
    expect((await call(deps, post("x=1", { contentType: "text/plain" }))).status).toBe(415);
    expect(verifyTurnstile).not.toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("does not verify or send a request blocked by the per-IP limit", async () => {
    const { deps, verifyTurnstile, sendEmail } = makeDeps();
    for (let i = 0; i < 5; i += 1) {
      await call(deps, post(body({ idempotencyKey: keyN(i), fields: { ...validProject, email: `u${i}@example.com` } })));
    }
    const blocked = await call(
      deps,
      post(body({ idempotencyKey: keyN(9), fields: { ...validProject, email: "z@example.com" } })),
    );
    expect(blocked.status).toBe(429);
    expect(verifyTurnstile).toHaveBeenCalledTimes(5);
    expect(sendEmail).toHaveBeenCalledTimes(5);
  });

  it("does not send a request blocked by the per-email limit", async () => {
    const { deps, sendEmail } = makeDeps();
    for (let i = 0; i < 5; i += 1) {
      await call(deps, post(body({ idempotencyKey: keyN(i) }), { ip: `198.51.100.${i}` }));
    }
    const blocked = await call(deps, post(body({ idempotencyKey: keyN(9) }), { ip: "198.51.100.99" }));
    expect(blocked.status).toBe(429);
    expect(sendEmail).toHaveBeenCalledTimes(5);
  });

  it("lets the same key be retried after a provider refusal", async () => {
    const sendEmail = vi
      .fn<EmailSender>()
      .mockResolvedValueOnce({ kind: "refused", httpStatus: 422 })
      .mockResolvedValueOnce({ kind: "sent", providerId: "resend-id-2" });
    const { deps } = makeDeps({ sendEmail });
    expect((await call(deps, post(body()))).json.status).toBe("failed");
    expect((await call(deps, post(body({ turnstileToken: "fresh" })))).json).toEqual({
      status: "accepted",
      reference: "ENX-3F2B8C1E4D",
    });
    expect(sendEmail).toHaveBeenCalledTimes(2);
  });

  it("lets the same key be retried after the global cap stops blocking", async () => {
    const memory = createMemoryRateLimiter();
    let capReached = true;
    const rateLimiter: RateLimiter = {
      hit: async (key, limit, window) =>
        key.startsWith("global:") && capReached
          ? { allowed: false, retryAfterSeconds: 60 }
          : memory.hit(key, limit, window),
    };
    const { deps, sendEmail } = makeDeps({ rateLimiter });
    expect(await call(deps, post(body()))).toMatchObject({ status: 503, json: { status: "failed" } });
    expect(sendEmail).not.toHaveBeenCalled();
    capReached = false;
    expect((await call(deps, post(body({ turnstileToken: "fresh" })))).json.status).toBe("accepted");
  });

  it("rejects a declared Content-Length over the limit", async () => {
    const { deps } = makeDeps();
    const request = new Request("https://site.test/api/inquiry", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: ORIGIN,
        "x-forwarded-for": "203.0.113.7",
        "content-length": String(INQUIRY_MAX_BODY_BYTES + 1),
      },
      body: JSON.stringify(body()),
    });
    expect(await call(deps, request)).toMatchObject({ status: 413, json: { status: "rejected" } });
  });

  it("passes a body of exactly the byte limit through the size check and refuses one byte more", async () => {
    const { deps } = makeDeps();
    const base = JSON.stringify(body({ fields: { ...validProject, description: "" } }));
    const sized = (bytes: number) =>
      JSON.stringify(body({ fields: { ...validProject, description: "x".repeat(bytes - base.length) } }));
    // At the limit the size check passes; the raw-field structural limit then rejects with 400, not 413.
    expect((await call(deps, post(sized(INQUIRY_MAX_BODY_BYTES)))).status).toBe(400);
    expect((await call(deps, post(sized(INQUIRY_MAX_BODY_BYTES + 1)))).status).toBe(413);
  });
});
