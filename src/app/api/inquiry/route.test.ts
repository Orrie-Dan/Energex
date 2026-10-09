import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { validProject } from "../../../lib/inquiry/test-fixtures";

const ORIGIN = "https://site.test";

const fullEnv = {
  INQUIRY_DELIVERY_ENABLED: "true",
  RESEND_API_KEY: "re_test",
  INQUIRY_FROM: "Website <inquiries@mail.site.test>",
  INQUIRY_TO_PROJECT: "projects@site.test",
  INQUIRY_TO_EQUIPMENT: "equipment@site.test",
  TURNSTILE_SECRET_KEY: "turnstile-secret",
  INQUIRY_ALLOWED_ORIGINS: ORIGIN,
};

type Call = { url: string; init: RequestInit };

function stubNetwork(turnstileBody: Record<string, unknown>) {
  const calls: Call[] = [];
  const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
    calls.push({ url, init });
    if (url.includes("upstash.test")) {
      return Response.json([{ result: "OK" }, { result: 1 }, { result: 600 }]);
    }
    if (url.includes("challenges.cloudflare.com")) return Response.json(turnstileBody);
    if (url.includes("api.resend.com")) return Response.json({ id: "resend-id" });
    throw new Error(`unexpected fetch ${url}`);
  });
  vi.stubGlobal("fetch", fetchMock);
  return calls;
}

function stubEnv(values: Record<string, string>) {
  for (const [key, value] of Object.entries(values)) vi.stubEnv(key, value);
}

async function postInquiry() {
  const { POST } = await import("./route");
  const response = await POST(
    new Request(`${ORIGIN}/api/inquiry`, {
      method: "POST",
      headers: { "content-type": "application/json", origin: ORIGIN, "x-forwarded-for": "203.0.113.7" },
      body: JSON.stringify({
        mode: "project",
        fields: validProject,
        turnstileToken: "token",
        idempotencyKey: "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4e",
        website: "",
      }),
    }),
  );
  return { status: response.status, json: await response.json() };
}

describe("POST /api/inquiry wiring", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.spyOn(console, "info").mockImplementation(() => undefined);
  });
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("is unavailable with no outbound calls when delivery is not enabled", async () => {
    vi.stubEnv("INQUIRY_DELIVERY_ENABLED", "");
    const calls = stubNetwork({ success: true, action: "inquiry", hostname: "site.test" });
    expect(await postInquiry()).toEqual({ status: 503, json: { status: "unavailable" } });
    expect(calls).toHaveLength(0);
  });

  it("is unavailable when enabled without a shared store and without test mode", async () => {
    stubEnv(fullEnv);
    const calls = stubNetwork({ success: true, action: "inquiry", hostname: "site.test" });
    expect((await postInquiry()).json).toEqual({ status: "unavailable" });
    expect(calls).toHaveLength(0);
  });

  it("in production uses Upstash and rejects Cloudflare testing-key results", async () => {
    stubEnv({
      ...fullEnv,
      VERCEL_ENV: "production",
      UPSTASH_REDIS_REST_URL: "https://upstash.test",
      UPSTASH_REDIS_REST_TOKEN: "tok",
    });
    const calls = stubNetwork({ success: true, hostname: "example.com", metadata: { result_with_testing_key: true } });
    expect(await postInquiry()).toEqual({ status: 400, json: { status: "verification_failed" } });
    expect(calls.some((c) => c.url === "https://upstash.test/pipeline")).toBe(true);
    expect(calls.some((c) => c.url.includes("api.resend.com"))).toBe(false);
  });

  it("in production accepts a real token for an allowed hostname and sends once", async () => {
    stubEnv({
      ...fullEnv,
      VERCEL_ENV: "production",
      UPSTASH_REDIS_REST_URL: "https://upstash.test",
      UPSTASH_REDIS_REST_TOKEN: "tok",
    });
    const calls = stubNetwork({ success: true, action: "inquiry", hostname: "site.test" });
    const result = await postInquiry();
    expect(result).toEqual({ status: 200, json: { status: "accepted", reference: "ENX-3F2B8C1E4D" } });
    expect(calls.filter((c) => c.url.includes("api.resend.com"))).toHaveLength(1);
  });

  it("accepts testing-key results only in explicit test mode outside production", async () => {
    stubEnv({ ...fullEnv, INQUIRY_ALLOW_TEST_MODE: "true" });
    const calls = stubNetwork({ success: true, hostname: "example.com", metadata: { result_with_testing_key: true } });
    expect((await postInquiry()).json.status).toBe("accepted");
    expect(calls.some((c) => c.url.includes("upstash"))).toBe(false);
  });
});
