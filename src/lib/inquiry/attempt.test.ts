import { describe, expect, it } from "vitest";
import { createInquiryAttemptTracker } from "./attempt";

function tracker() {
  let n = 0;
  return createInquiryAttemptTracker(() => `key-${(n += 1)}`);
}

describe("createInquiryAttemptTracker", () => {
  it("reuses the same key when unchanged content is retried (e.g. after an uncertain outcome)", () => {
    const t = tracker();
    const first = t.begin();
    t.finish();
    expect(t.begin()).toBe(first);
  });

  it("issues a new key after the content changes", () => {
    const t = tracker();
    const first = t.begin();
    t.finish();
    t.invalidate();
    const second = t.begin();
    expect(second).not.toBe(first);
  });

  it("refuses a second submission while one is in flight", () => {
    const t = tracker();
    expect(t.begin()).toBe("key-1");
    expect(t.begin()).toBeNull();
    t.finish();
    expect(t.begin()).toBe("key-1");
  });

  it("uses crypto.randomUUID by default", () => {
    expect(createInquiryAttemptTracker().begin()).toMatch(/^[0-9a-f-]{36}$/);
  });
});
