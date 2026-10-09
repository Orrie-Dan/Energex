import { describe, expect, it, vi } from "vitest";
import { inquiryOutcomeMessage } from "./messages";
import { createMemoryIdempotencyStore, handleInquiryRequest } from "./server/handler";
import { createMemoryRateLimiter } from "./server/rate-limit";
import type { EmailSender, SendOutcome } from "./server/resend";
import { interpretInquiryResponse, submitInquiry, type InquiryDeliveryResult } from "./submit";
import { validEquipment, validProject } from "./test-fixtures";

const LIVE = { enabled: true as const, turnstileSiteKey: "site-key" };
const ATTEMPT = { turnstileToken: "tok", idempotencyKey: "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4e", honeypot: "" };

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

describe("submitInquiry adapter", () => {
  it("returns unavailable without any network call when delivery is disabled", async () => {
    const fetchImpl = vi.fn();
    const result = await submitInquiry({ mode: "project", fields: validProject }, ATTEMPT, {
      config: { enabled: false },
      fetchImpl,
    });
    expect(result).toEqual({ status: "unavailable" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("posts JSON to the endpoint with only the protocol fields", async () => {
    const fetchImpl = vi.fn(async () => json(200, { status: "accepted", reference: "ENX-3F2B8C1E4D" }));
    await submitInquiry({ mode: "equipment", fields: validEquipment }, { ...ATTEMPT, honeypot: "bot" }, {
      config: LIVE,
      fetchImpl,
    });
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("/api/inquiry");
    expect(Object.keys(JSON.parse(String(init.body))).sort()).toEqual(
      ["fields", "idempotencyKey", "mode", "turnstileToken", "website"].sort(),
    );
    expect(JSON.parse(String(init.body)).website).toBe("bot");
  });

  it("treats network failures and timeouts as uncertain", async () => {
    const offline = async () => {
      throw new TypeError("Failed to fetch");
    };
    expect(
      await submitInquiry({ mode: "project", fields: validProject }, ATTEMPT, { config: LIVE, fetchImpl: offline }),
    ).toEqual({ status: "uncertain" });
  });
});

describe("interpretInquiryResponse", () => {
  const cases: [Response, InquiryDeliveryResult][] = [
    [json(200, { status: "accepted", reference: "ENX-3F2B8C1E4D" }), { status: "accepted", reference: "ENX-3F2B8C1E4D" }],
    [json(200, { status: "accepted" }), { status: "uncertain" }],
    [json(200, { status: "accepted", reference: "<b>" }), { status: "uncertain" }],
    [json(200, { status: "failed" }), { status: "uncertain" }],
    [new Response("<html>", { status: 200 }), { status: "uncertain" }],
    [json(503, { status: "unavailable" }), { status: "unavailable" }],
    [json(400, { status: "invalid", errors: { email: { code: "invalidEmail" } } }), { status: "invalid", errors: { email: { code: "invalidEmail" } } }],
    [json(400, { status: "invalid", errors: { email: { code: "<script>" } } }), { status: "failed" }],
    [json(400, { status: "invalid", errors: { evil: { code: "required" } } }), { status: "failed" }],
    [json(429, { status: "rate_limited", retryAfterSeconds: 90 }), { status: "rate_limited", retryAfterSeconds: 90 }],
    [json(400, { status: "verification_failed" }), { status: "verification_failed" }],
    [json(403, { status: "rejected" }), { status: "failed" }],
    [json(502, { status: "failed" }), { status: "failed" }],
    [json(504, { status: "uncertain" }), { status: "uncertain" }],
    [new Response("Gateway Timeout", { status: 504 }), { status: "uncertain" }],
    [new Response("Bad Request", { status: 400 }), { status: "failed" }],
  ];
  for (const [response, expected] of cases) {
    it(`${response.status} ${expected.status}`, async () => {
      expect(await interpretInquiryResponse(response.clone())).toEqual(expected);
    });
  }
});

describe("outcome messages", () => {
  it("only the accepted outcome claims anything was sent, and it does not claim inbox delivery", () => {
    const results: InquiryDeliveryResult[] = [
      { status: "unavailable" },
      { status: "invalid", errors: {} },
      { status: "rate_limited", retryAfterSeconds: 30 },
      { status: "verification_failed" },
      { status: "failed" },
      { status: "uncertain" },
    ];
    for (const result of results) {
      const { text, tone } = inquiryOutcomeMessage(result);
      expect(tone, result.status).not.toBe("success");
      expect(text, result.status).not.toMatch(/was sent to|delivered|received/i);
    }
    const accepted = inquiryOutcomeMessage({ status: "accepted", reference: "ENX-1" });
    expect(accepted.tone).toBe("success");
    expect(accepted.text).toContain("ENX-1");
    expect(accepted.text).toContain("does not confirm it has been read");
  });
});

describe("adapter + server handler (mocked provider)", () => {
  function wire(outcome: SendOutcome) {
    const sendEmail: EmailSender = vi.fn(async () => outcome);
    const deps = {
      config: {
        enabled: true as const,
        config: {
          resendApiKey: "k",
          from: "w@mail.site.test",
          toProject: "p@site.test",
          toEquipment: "e@site.test",
          turnstileSecretKey: "s",
          allowedOrigins: ["https://site.test"],
          allowedHostnames: ["site.test"],
          rateLimitStore: { kind: "memory" as const },
          globalDailyLimit: 100,
          testMode: true,
        },
      },
      rateLimiter: createMemoryRateLimiter(),
      verifyTurnstile: async () => ({ kind: "passed" as const }),
      sendEmail,
      idempotency: createMemoryIdempotencyStore(),
    };
    // Simulates the browser: same-origin request carrying the Origin header.
    const fetchImpl = (async (url: string, init: RequestInit) =>
      handleInquiryRequest(
        new Request(`https://site.test${url}`, {
          ...init,
          headers: {
            ...(init.headers as Record<string, string>),
            origin: "https://site.test",
            "x-forwarded-for": "203.0.113.7",
          },
        }),
        deps,
      )) as unknown as typeof fetch;
    return { fetchImpl, sendEmail };
  }

  it("delivers a project inquiry end to end", async () => {
    const { fetchImpl, sendEmail } = wire({ kind: "sent", providerId: "id" });
    const result = await submitInquiry({ mode: "project", fields: validProject }, ATTEMPT, { config: LIVE, fetchImpl });
    expect(result).toEqual({ status: "accepted", reference: "ENX-3F2B8C1E4D" });
    expect(sendEmail).toHaveBeenCalledTimes(1);
  });

  it("delivers an equipment quotation request end to end", async () => {
    const { fetchImpl } = wire({ kind: "sent", providerId: "id" });
    const result = await submitInquiry({ mode: "equipment", fields: validEquipment }, ATTEMPT, {
      config: LIVE,
      fetchImpl,
    });
    expect(result.status).toBe("accepted");
  });

  it("never reports success when the provider refuses or is uncertain", async () => {
    const refused = wire({ kind: "refused", httpStatus: 401 });
    expect(
      await submitInquiry({ mode: "project", fields: validProject }, ATTEMPT, { config: LIVE, fetchImpl: refused.fetchImpl }),
    ).toEqual({ status: "failed" });
    const unknown = wire({ kind: "unknown", httpStatus: 500 });
    expect(
      await submitInquiry({ mode: "project", fields: validProject }, ATTEMPT, { config: LIVE, fetchImpl: unknown.fetchImpl }),
    ).toEqual({ status: "uncertain" });
  });

  it("surfaces server validation codes to the form", async () => {
    const { fetchImpl, sendEmail } = wire({ kind: "sent", providerId: "id" });
    const result = await submitInquiry(
      { mode: "equipment", fields: { ...validEquipment, category: "bogus" } },
      ATTEMPT,
      { config: LIVE, fetchImpl },
    );
    expect(result).toEqual({ status: "invalid", errors: { category: { code: "unknownCategory" } } });
    expect(sendEmail).not.toHaveBeenCalled();
  });
});
