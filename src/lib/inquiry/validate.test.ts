import { describe, expect, it } from "vitest";
import { equipmentCategories } from "../../data/energex/equipment";
import { inquiryFieldErrorMessage } from "./messages";
import { validEquipment, validProject } from "./test-fixtures";
import { INQUIRY_FIELD_ERROR_CODES, validateEquipmentInquiry, validateProjectInquiry } from "./validate";

describe("validateProjectInquiry", () => {
  it("accepts a complete project inquiry", () => {
    expect(validateProjectInquiry(validProject)).toEqual({});
  });

  it("returns language-neutral codes for missing required fields", () => {
    const errors = validateProjectInquiry({ ...validProject, name: "  ", location: "", description: "" });
    expect(errors).toEqual({
      name: { code: "required" },
      location: { code: "required" },
      description: { code: "required" },
    });
  });

  it("reports length limits with the maximum", () => {
    expect(validateProjectInquiry({ ...validProject, description: "x".repeat(2001) }).description).toEqual({
      code: "tooLong",
      max: 2000,
    });
    expect(validateProjectInquiry({ ...validProject, name: "x".repeat(121) }).name).toEqual({
      code: "tooLong",
      max: 120,
    });
  });

  it("rejects line breaks in single-line fields (header injection)", () => {
    expect(validateProjectInquiry({ ...validProject, company: "Acme\r\nBcc: x@y.z" }).company).toEqual({
      code: "singleLine",
    });
    expect(validateProjectInquiry({ ...validProject, location: "A\u2028B" }).location).toEqual({ code: "singleLine" });
  });

  it("rejects control characters in multi-line fields but allows newlines and tabs", () => {
    expect(validateProjectInquiry({ ...validProject, description: "ok\n\tok" }).description).toBeUndefined();
    expect(validateProjectInquiry({ ...validProject, description: "bad\u0007" }).description).toEqual({
      code: "controlCharacters",
    });
  });

  it("rejects email addresses that could rewrite an address header", () => {
    for (const email of ["a@b.com, c@d.com", "Name <a@b.com>", "a@b.com;c@d.com", "not-an-email", "a b@c.com"]) {
      expect(validateProjectInquiry({ ...validProject, email }).email, email).toEqual({ code: "invalidEmail" });
    }
  });

  it("keeps phone optional but validates its characters", () => {
    expect(validateProjectInquiry({ ...validProject, phone: "" }).phone).toBeUndefined();
    expect(validateProjectInquiry({ ...validProject, phone: "call me" }).phone).toEqual({ code: "invalidPhone" });
  });
});

describe("validateEquipmentInquiry", () => {
  it("accepts every published category slug", () => {
    for (const category of equipmentCategories) {
      expect(validateEquipmentInquiry({ ...validEquipment, category: category.slug }, null)).toEqual({});
    }
  });

  it("rejects unknown categories", () => {
    expect(validateEquipmentInquiry({ ...validEquipment, category: "nuclear" }, null).category).toEqual({
      code: "unknownCategory",
    });
  });

  it("keeps the 10 MB document specification for the future attachment phase", () => {
    const meta = { fileName: "spec.pdf", byteLength: 10 * 1024 * 1024 + 1, mediaType: "application/pdf" };
    expect(validateEquipmentInquiry(validEquipment, meta).document).toEqual({ code: "documentTooLarge" });
    expect(
      validateEquipmentInquiry(validEquipment, { fileName: "a.exe", byteLength: 10, mediaType: "" }).document,
    ).toEqual({ code: "documentType" });
  });
});

describe("inquiryFieldErrorMessage", () => {
  it("has English text for every error code in both modes", () => {
    for (const code of INQUIRY_FIELD_ERROR_CODES) {
      for (const mode of ["project", "equipment"] as const) {
        const text = inquiryFieldErrorMessage(mode, "description", { code, max: 2000 });
        expect(text, `${mode}/${code}`).toMatch(/\w/);
      }
    }
  });

  it("preserves the established wording", () => {
    expect(inquiryFieldErrorMessage("project", "name", { code: "required" })).toBe("Enter your name.");
    expect(inquiryFieldErrorMessage("equipment", "category", { code: "unknownCategory" })).toBe(
      "Select an equipment category.",
    );
    expect(inquiryFieldErrorMessage("project", "description", { code: "tooLong", max: 2000 })).toBe(
      "A project description must be 2000 characters or fewer.",
    );
  });
});
