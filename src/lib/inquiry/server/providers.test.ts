import { describe, expect, it, vi } from "vitest";
import { createMemoryRateLimiter, createUpstashRateLimiter } from "./rate-limit";
import { createResendSender, type OutgoingEmail } from "./resend";
import { createTurnstileVerifier } from "./turnstile";

const email: OutgoingEmail = {
  from: "Website <inquiries@mail.site.test>",
  to: "projects@site.test",
  replyTo: "ada@example.com",
  subject: "Subject",
  text: "text",
  html: "<p>html</p>",
  tags: [{ name: "inquiry_type", value: "project" }],
};

function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

describe("createResendSender", () => {
  it("sends with bearer auth, idempotency key and reply_to; returns sent only with an id", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(200, { id: "abc-123" }));
    const outcome = await createResendSender("re_key", fetchImpl)(email, "key-1");
    expect(outcome).toEqual({ kind: "sent", providerId: "abc-123" });
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.resend.com/emails");
    const headers = init.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer re_key");
    expect(headers["Idempotency-Key"]).toBe("energex-inquiry/key-1");
    const payload = JSON.parse(String(init.body));
    expect(payload).toMatchObject({ to: ["projects@site.test"], reply_to: "ada@example.com", from: email.from });
    expect(payload).not.toHaveProperty("attachments");
  });

  it("treats 2xx without an id as unknown", async () => {
    const send = createResendSender("k", async () => jsonResponse(200, {}));
    expect((await send(email, "k")).kind).toBe("unknown");
    const sendBadJson = createResendSender("k", async () => new Response("not json", { status: 200 }));
    expect((await sendBadJson(email, "k")).kind).toBe("unknown");
  });

  it("classifies refusals, server errors, idempotency conflicts and network errors", async () => {
    const cases: [number, string][] = [
      [400, "refused"],
      [401, "refused"],
      [403, "refused"],
      [422, "refused"],
      [429, "refused"],
      [409, "unknown"],
      [500, "unknown"],
      [503, "unknown"],
    ];
    for (const [status, kind] of cases) {
      const send = createResendSender("k", async () => jsonResponse(status, { message: "x" }));
      expect((await send(email, "k")).kind, String(status)).toBe(kind);
    }
    const offline = createResendSender("k", async () => {
      throw new TypeError("fetch failed");
    });
    expect(await offline(email, "k")).toEqual({ kind: "unknown", httpStatus: null });
  });

  it("keeps only Resend's error code, never its free-text message", async () => {
    const send = createResendSender("k", async () =>
      jsonResponse(403, { statusCode: 403, name: "validation_error", message: "You can only send to owner@x.test" }),
    );
    const outcome = await send(email, "k");
    expect(outcome).toEqual({ kind: "refused", httpStatus: 403, errorName: "validation_error" });
    expect(JSON.stringify(outcome)).not.toContain("owner@x.test");

    const odd = createResendSender("k", async () => jsonResponse(422, { name: "Has Spaces <a@b.test>" }));
    expect(await odd(email, "k")).toEqual({ kind: "refused", httpStatus: 422 });
  });
});

describe("createTurnstileVerifier", () => {
  it("passes only a successful token for the inquiry action", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(200, { success: true, action: "inquiry" }));
    expect(await createTurnstileVerifier("secret", fetchImpl)("tok", "203.0.113.7")).toEqual({ kind: "passed" });
    const params = (fetchImpl.mock.calls[0] as unknown as [string, RequestInit])[1].body as URLSearchParams;
    expect(params.get("secret")).toBe("secret");
    expect(params.get("response")).toBe("tok");
    expect(params.get("remoteip")).toBe("203.0.113.7");
  });

  it("rejects failed tokens and tokens minted for another action", async () => {
    const failed = createTurnstileVerifier("s", async () => jsonResponse(200, { success: false }));
    expect((await failed("t", null)).kind).toBe("rejected");
    const otherAction = createTurnstileVerifier("s", async () => jsonResponse(200, { success: true, action: "login" }));
    expect((await otherAction("t", null)).kind).toBe("rejected");
  });

  it("accepts Cloudflare testing-key results only when explicitly allowed", async () => {
    const testing = async () =>
      jsonResponse(200, { success: true, hostname: "example.com", metadata: { result_with_testing_key: true } });
    expect((await createTurnstileVerifier("s", testing)("t", null)).kind).toBe("rejected");
    expect((await createTurnstileVerifier("s", testing, { allowTestingKeys: false })("t", null)).kind).toBe("rejected");
    expect((await createTurnstileVerifier("s", testing, { allowTestingKeys: true })("t", null)).kind).toBe("passed");
  });

  it("binds real tokens to the allowed hostnames when configured", async () => {
    const forHost = (hostname?: string) => async () => jsonResponse(200, { success: true, action: "inquiry", hostname });
    const options = { allowedHostnames: ["site.test"] };
    expect((await createTurnstileVerifier("s", forHost("site.test"), options)("t", null)).kind).toBe("passed");
    expect((await createTurnstileVerifier("s", forHost("evil.test"), options)("t", null)).kind).toBe("rejected");
    expect((await createTurnstileVerifier("s", forHost(undefined), options)("t", null)).kind).toBe("rejected");
  });

  it("rejects a successful real token that carries no action", async () => {
    const noAction = createTurnstileVerifier("s", async () => jsonResponse(200, { success: true, hostname: "site.test" }));
    expect((await noAction("t", null)).kind).toBe("rejected");
  });

  it("reports an error for a non-JSON 200 reply", async () => {
    const html = createTurnstileVerifier("s", async () => new Response("<html>", { status: 200 }));
    expect((await html("t", null)).kind).toBe("error");
  });

  it("reports errors for network failures and bad responses", async () => {
    const offline = createTurnstileVerifier("s", async () => {
      throw new Error("offline");
    });
    expect((await offline("t", null)).kind).toBe("error");
    const http500 = createTurnstileVerifier("s", async () => jsonResponse(500, {}));
    expect((await http500("t", null)).kind).toBe("error");
  });
});

describe("rate limiters", () => {
  it("memory limiter allows up to the limit and resets after the window", async () => {
    let now = 0;
    const limiter = createMemoryRateLimiter(() => now);
    for (let i = 0; i < 3; i += 1) expect((await limiter.hit("k", 3, 60)).allowed).toBe(true);
    const blocked = await limiter.hit("k", 3, 60);
    expect(blocked).toEqual({ allowed: false, retryAfterSeconds: 60 });
    now = 60_000;
    expect((await limiter.hit("k", 3, 60)).allowed).toBe(true);
  });

  it("upstash limiter sends a SET NX / INCR / TTL pipeline and reads the count", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(200, [{ result: "OK" }, { result: 6 }, { result: 42 }]));
    const limiter = createUpstashRateLimiter("https://redis.test", "tok", fetchImpl);
    expect(await limiter.hit("ip:1", 5, 600)).toEqual({ allowed: false, retryAfterSeconds: 42 });
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://redis.test/pipeline");
    expect(JSON.parse(String(init.body))[0]).toEqual(["SET", "energex:inquiry:rl:ip:1", "0", "EX", "600", "NX"]);
  });

  it("upstash limiter allows within the limit and sends bearer auth", async () => {
    const fetchImpl = vi.fn(async () => jsonResponse(200, [{ result: "OK" }, { result: 5 }, { result: 600 }]));
    const limiter = createUpstashRateLimiter("https://redis.test", "tok", fetchImpl);
    expect(await limiter.hit("ip:1", 5, 600)).toEqual({ allowed: true, retryAfterSeconds: 0 });
    const [, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit];
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer tok");
  });

  it("upstash limiter falls back to the window when TTL is unusable", async () => {
    const limiter = createUpstashRateLimiter("https://redis.test", "tok", async () =>
      jsonResponse(200, [{ result: null }, { result: 9 }, { result: -1 }]),
    );
    expect(await limiter.hit("k", 5, 600)).toEqual({ allowed: false, retryAfterSeconds: 600 });
  });

  it("upstash limiter throws on a per-command error inside a 200 reply", async () => {
    const limiter = createUpstashRateLimiter("https://redis.test", "tok", async () =>
      jsonResponse(200, [{ result: "OK" }, { error: "WRONGTYPE" }, { result: 60 }]),
    );
    await expect(limiter.hit("k", 5, 60)).rejects.toThrow();
  });

  it("upstash limiter throws on store failure so the handler fails closed", async () => {
    const limiter = createUpstashRateLimiter("https://redis.test", "tok", async () => jsonResponse(500, {}));
    await expect(limiter.hit("k", 5, 60)).rejects.toThrow();
    const malformed = createUpstashRateLimiter("https://redis.test", "tok", async () => jsonResponse(200, { x: 1 }));
    await expect(malformed.hit("k", 5, 60)).rejects.toThrow();
  });
});
