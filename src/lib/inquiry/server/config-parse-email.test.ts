import { describe, expect, it } from "vitest";
import { validEquipment, validProject } from "../test-fixtures";
import { readInquiryServerConfig } from "./config";
import { buildInquiryEmail, escapeHtml } from "./email";
import { parseInquiryRequest } from "./parse";

const completeEnv = {
  INQUIRY_DELIVERY_ENABLED: "true",
  RESEND_API_KEY: "re_secret_value",
  INQUIRY_FROM: "ENERGEX Website <inquiries@mail.site.test>",
  INQUIRY_TO_PROJECT: "projects@site.test",
  INQUIRY_TO_EQUIPMENT: "equipment@site.test",
  TURNSTILE_SECRET_KEY: "turnstile_secret_value",
  INQUIRY_ALLOWED_ORIGINS: "https://site.test, http://localhost:3000",
  INQUIRY_ALLOW_TEST_MODE: "true",
};

describe("readInquiryServerConfig", () => {
  it("is disabled by default and with an empty environment", () => {
    expect(readInquiryServerConfig({}).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_DELIVERY_ENABLED: "false" }).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_DELIVERY_ENABLED: "1" }).enabled).toBe(false);
  });

  it("enables only when every required value is present and valid", () => {
    const result = readInquiryServerConfig(completeEnv);
    expect(result.enabled).toBe(true);
    if (result.enabled) {
      expect(result.config.allowedOrigins).toEqual(["https://site.test", "http://localhost:3000"]);
      expect(result.config.rateLimitStore).toEqual({ kind: "memory" });
    }
  });

  it("stays disabled when any required value is missing, naming settings but never values", () => {
    for (const name of [
      "RESEND_API_KEY",
      "INQUIRY_FROM",
      "INQUIRY_TO_PROJECT",
      "INQUIRY_TO_EQUIPMENT",
      "TURNSTILE_SECRET_KEY",
      "INQUIRY_ALLOWED_ORIGINS",
    ]) {
      const result = readInquiryServerConfig({ ...completeEnv, [name]: "" });
      expect(result.enabled, name).toBe(false);
      const text = JSON.stringify(result);
      expect(text).toContain(name);
      expect(text).not.toContain("re_secret_value");
      expect(text).not.toContain("turnstile_secret_value");
    }
  });

  it("rejects malformed recipients, senders and origins", () => {
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_TO_PROJECT: "a@b.com,c@d.com" }).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_FROM: "not an address" }).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_ALLOWED_ORIGINS: "http://site.test" }).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_ALLOWED_ORIGINS: "https://site.test/path" }).enabled).toBe(
      false,
    );
  });

  it("is strict by default on every host: no shared store and no test mode means disabled", () => {
    const { INQUIRY_ALLOW_TEST_MODE: _omit, ...strictEnv } = completeEnv;
    expect(readInquiryServerConfig(strictEnv).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...strictEnv, NODE_ENV: "development" }).enabled).toBe(false);
    const withStore = readInquiryServerConfig({
      ...strictEnv,
      UPSTASH_REDIS_REST_URL: "https://redis.test",
      UPSTASH_REDIS_REST_TOKEN: "tok",
    });
    expect(withStore.enabled).toBe(true);
    if (withStore.enabled) {
      expect(withStore.config.testMode).toBe(false);
      expect(withStore.config.allowedHostnames).toEqual(["site.test", "localhost"]);
      expect(withStore.config.globalDailyLimit).toBe(100);
    }
  });

  it("refuses test mode in Vercel production", () => {
    const result = readInquiryServerConfig({
      ...completeEnv,
      VERCEL_ENV: "production",
      UPSTASH_REDIS_REST_URL: "https://redis.test",
      UPSTASH_REDIS_REST_TOKEN: "tok",
    });
    expect(result.enabled).toBe(false);
    expect(JSON.stringify(result)).toContain("INQUIRY_ALLOW_TEST_MODE");
  });

  it("validates the global daily limit", () => {
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_GLOBAL_DAILY_LIMIT: "0" }).enabled).toBe(false);
    expect(readInquiryServerConfig({ ...completeEnv, INQUIRY_GLOBAL_DAILY_LIMIT: "abc" }).enabled).toBe(false);
    const ok = readInquiryServerConfig({ ...completeEnv, INQUIRY_GLOBAL_DAILY_LIMIT: "25" });
    expect(ok.enabled && ok.config.globalDailyLimit).toBe(25);
  });

  it("requires a shared rate-limit store in Vercel production", () => {
    const { INQUIRY_ALLOW_TEST_MODE: _omit, ...strictEnv } = completeEnv;
    expect(readInquiryServerConfig({ ...strictEnv, VERCEL_ENV: "production" }).enabled).toBe(false);
    const withStore = readInquiryServerConfig({
      ...strictEnv,
      VERCEL_ENV: "production",
      UPSTASH_REDIS_REST_URL: "https://redis.test/",
      UPSTASH_REDIS_REST_TOKEN: "tok",
    });
    expect(withStore.enabled).toBe(true);
    if (withStore.enabled) {
      expect(withStore.config.rateLimitStore).toEqual({ kind: "upstash", url: "https://redis.test", token: "tok" });
    }
  });
});

const KEY = "3f2b8c1e-4d5a-4b6c-8d7e-9f0a1b2c3d4e";

describe("parseInquiryRequest", () => {
  const base = { mode: "project", fields: validProject, turnstileToken: "t", idempotencyKey: KEY, website: "" };

  it("accepts both inquiry shapes", () => {
    expect(parseInquiryRequest(base)?.mode).toBe("project");
    expect(parseInquiryRequest({ ...base, mode: "equipment", fields: validEquipment })?.mode).toBe("equipment");
  });

  it("rejects mismatched field sets between modes", () => {
    expect(parseInquiryRequest({ ...base, mode: "equipment" })).toBeNull();
    expect(parseInquiryRequest({ ...base, fields: validEquipment })).toBeNull();
  });

  it("rejects non-objects, arrays, missing keys and oversized tokens", () => {
    expect(parseInquiryRequest(null)).toBeNull();
    expect(parseInquiryRequest([base])).toBeNull();
    const { website: _omit, ...missing } = base;
    expect(parseInquiryRequest(missing)).toBeNull();
    expect(parseInquiryRequest({ ...base, turnstileToken: "" })).toBeNull();
    expect(parseInquiryRequest({ ...base, turnstileToken: "x".repeat(2049) })).toBeNull();
    expect(parseInquiryRequest({ ...base, fields: { ...validProject, description: "x".repeat(4001) } })).toBeNull();
  });
});

describe("buildInquiryEmail", () => {
  it("escapes visitor input in HTML and keeps the subject on one line", () => {
    const email = buildInquiryEmail({
      request: {
        mode: "project",
        fields: { ...validProject, company: "<script>alert(1)</script>", description: "a & b <img src=x>" },
        turnstileToken: "t",
        idempotencyKey: KEY,
        website: "",
      },
      reference: "ENX-3F2B8C1E4D",
      from: "w@mail.site.test",
      to: "p@site.test",
    });
    expect(email.html).not.toContain("<script>");
    expect(email.html).toContain("&lt;script&gt;");
    expect(email.html).toContain("a &amp; b &lt;img src=x&gt;");
    expect(email.subject).not.toMatch(/[\r\n]/);
    expect(email.subject.startsWith("[Project inquiry ENX-3F2B8C1E4D]")).toBe(true);
    expect(email.text).toContain("Reply-To is the address the visitor entered. It has not been verified.");
  });

  it("keeps the subject a single bounded line even if unvalidated input reaches the builder", () => {
    const email = buildInquiryEmail({
      request: {
        mode: "project",
        fields: {
          ...validProject,
          company: "Acme\r\nBcc: victim@example.com\u2028\u202eevil",
          location: "L".repeat(400),
        },
        turnstileToken: "t",
        idempotencyKey: KEY,
        website: "",
      },
      reference: "ENX-3F2B8C1E4D",
      from: "w@mail.site.test",
      to: "p@site.test",
    });
    expect(email.subject).not.toMatch(/[\r\n\u2028\u2029\u202a-\u202e\u2066-\u2069]/);
    expect(email.subject).toContain("Acme Bcc: victim@example.com evil");
    expect(email.subject.length).toBeLessThanOrEqual(180);
    expect(email.to).toBe("p@site.test");
  });

  it("uses the published category title for equipment requests", () => {
    const email = buildInquiryEmail({
      request: { mode: "equipment", fields: validEquipment, turnstileToken: "t", idempotencyKey: KEY, website: "" },
      reference: "ENX-1",
      from: "w@mail.site.test",
      to: "e@site.test",
    });
    expect(email.text).toContain("Equipment category:");
    expect(email.text).not.toContain(`Equipment category: ${validEquipment.category}\n`);
    expect(email.replyTo).toBe(validEquipment.email);
  });

  it("escapeHtml covers the five significant characters", () => {
    expect(escapeHtml(`&<>"'`)).toBe("&amp;&lt;&gt;&quot;&#39;");
  });
});
