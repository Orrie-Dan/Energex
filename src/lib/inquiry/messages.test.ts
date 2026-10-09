import { describe, expect, it } from "vitest";
import { inquiryFieldErrorMessage, inquiryMessages, inquiryOutcomeMessage, type InquiryLocale } from "./messages";
import type { InquiryDeliveryResult } from "./submit";
import {
  INQUIRY_FIELD_ERROR_CODES,
  INQUIRY_FIELD_NAMES,
  validateEquipmentInquiry,
  validateProjectInquiry,
  type InquiryMode,
} from "./validate";

const LOCALES = Object.keys(inquiryMessages) as InquiryLocale[];
const MODES: InquiryMode[] = ["project", "equipment"];

const OUTCOMES: InquiryDeliveryResult[] = [
  { status: "unavailable" },
  { status: "accepted", reference: "ENX-ABCDEF0123" },
  { status: "invalid", errors: { name: { code: "required" } } },
  { status: "rate_limited", retryAfterSeconds: 61 },
  { status: "verification_failed" },
  { status: "failed" },
  { status: "uncertain" },
];

describe("inquiry message catalogues", () => {
  it("has text for every error code, field, and mode in every locale", () => {
    for (const locale of LOCALES) {
      for (const mode of MODES) {
        for (const field of INQUIRY_FIELD_NAMES) {
          for (const code of INQUIRY_FIELD_ERROR_CODES) {
            const text = inquiryFieldErrorMessage(mode, field, { code, max: 10 }, locale);
            expect(text.trim(), `${locale}/${mode}/${field}/${code}`).not.toBe("");
            expect(text).not.toContain("undefined");
          }
        }
      }
    }
  });

  it("has text for every outcome and state in every locale", () => {
    for (const locale of LOCALES) {
      for (const outcome of OUTCOMES) {
        expect(inquiryOutcomeMessage(outcome, locale).text.trim()).not.toBe("");
      }
      for (const [key, value] of Object.entries(inquiryMessages[locale].state)) {
        expect(value.trim(), `${locale}/state.${key}`).not.toBe("");
      }
    }
  });

  it("keeps tone independent of locale and only reports success for accepted", () => {
    const tones = OUTCOMES.map((outcome) => [outcome.status, inquiryOutcomeMessage(outcome).tone]);
    expect(Object.fromEntries(tones)).toEqual({
      unavailable: "info",
      accepted: "success",
      invalid: "error",
      rate_limited: "error",
      verification_failed: "error",
      failed: "error",
      uncertain: "warning",
    });
  });

  it("renders English text for codes produced by validation", () => {
    const errors = validateProjectInquiry({
      name: "",
      company: "Acme",
      email: "not-an-email",
      phone: "",
      location: "x".repeat(161),
      description: "ok",
    });
    expect(inquiryFieldErrorMessage("project", "name", errors.name!)).toBe("Enter your name.");
    expect(inquiryFieldErrorMessage("project", "email", errors.email!)).toBe("Enter a valid email address.");
    expect(inquiryFieldErrorMessage("project", "location", errors.location!)).toBe(
      "The project location must be 160 characters or fewer.",
    );
    expect(inquiryOutcomeMessage({ status: "accepted", reference: "ENX-ABCDEF0123" }).text).toContain(
      "ENX-ABCDEF0123",
    );
  });

  it("validation output is language-neutral: codes and numbers only", () => {
    const errors = validateEquipmentInquiry(
      {
        name: "",
        company: "",
        email: "",
        phone: "abc",
        category: "unknown",
        description: "",
        quantity: "",
        destination: "",
        timeline: "",
      },
      null,
    );
    for (const error of Object.values(errors)) {
      expect(Object.keys(error!).every((key) => key === "code" || key === "max")).toBe(true);
      expect(INQUIRY_FIELD_ERROR_CODES).toContain(error!.code);
    }
  });
});
