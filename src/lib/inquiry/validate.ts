import { getEquipmentCategory } from "../../data/energex/equipment";
import {
  requirementsDocumentError,
  type RequirementsDocumentErrorCode,
  type RequirementsDocumentMeta,
} from "./contract";

/**
 * Business validation shared by the browser and the server endpoint.
 * Errors are language-neutral codes; `messages.ts` turns them into display
 * text so a future locale can translate them without touching these rules.
 */

export type InquiryMode = "project" | "equipment";

export type ProjectInquiryFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  description: string;
};

export type EquipmentInquiryFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  description: string;
  quantity: string;
  destination: string;
  timeline: string;
};

export type InquiryFieldName =
  | keyof ProjectInquiryFields
  | keyof EquipmentInquiryFields
  | "document";

export const INQUIRY_FIELD_NAMES = [
  "name",
  "company",
  "email",
  "phone",
  "location",
  "category",
  "description",
  "quantity",
  "destination",
  "timeline",
  "document",
] as const satisfies readonly InquiryFieldName[];

export type InquiryFieldErrorCode =
  | "required"
  | "tooLong"
  | "singleLine"
  | "controlCharacters"
  | "invalidEmail"
  | "invalidPhone"
  | "unknownCategory"
  | RequirementsDocumentErrorCode;

export const INQUIRY_FIELD_ERROR_CODES = [
  "required",
  "tooLong",
  "singleLine",
  "controlCharacters",
  "invalidEmail",
  "invalidPhone",
  "unknownCategory",
  "documentType",
  "documentEmpty",
  "documentTooLarge",
] as const satisfies readonly InquiryFieldErrorCode[];

export type InquiryFieldError = { code: InquiryFieldErrorCode; max?: number };

export type InquiryFieldErrors = Partial<Record<InquiryFieldName, InquiryFieldError>>;

/** Maximum lengths after trimming. */
export const INQUIRY_FIELD_LIMITS = {
  name: 120,
  company: 160,
  email: 254,
  location: 160,
  description: 2000,
  quantity: 80,
  destination: 160,
  timeline: 160,
} as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Characters that could split or rewrite an address header such as Reply-To. */
const EMAIL_UNSAFE = /[<>()[\]\\,;:"]/;
const PHONE = /^[0-9+().\-\s]{7,20}$/;
/** Single-line fields reject line breaks and other control characters. */
const SINGLE_LINE_UNSAFE = /[\x00-\x1f\x7f\u2028\u2029]/;
/** Multi-line fields keep tabs and line breaks but reject other control characters. */
const MULTI_LINE_UNSAFE = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/;

function requiredText(value: string, max: number, multiline = false): InquiryFieldError | null {
  const text = value.trim();
  if (!text) return { code: "required" };
  if (text.length > max) return { code: "tooLong", max };
  if (multiline ? MULTI_LINE_UNSAFE.test(text) : SINGLE_LINE_UNSAFE.test(text)) {
    return { code: multiline ? "controlCharacters" : "singleLine" };
  }
  return null;
}

function contactErrors(fields: { name: string; company: string; email: string; phone: string }): InquiryFieldErrors {
  const errors: InquiryFieldErrors = {};
  const name = requiredText(fields.name, INQUIRY_FIELD_LIMITS.name);
  const company = requiredText(fields.company, INQUIRY_FIELD_LIMITS.company);
  const email = fields.email.trim();
  if (name) errors.name = name;
  if (company) errors.company = company;
  if (!email) errors.email = { code: "required" };
  else if (email.length > INQUIRY_FIELD_LIMITS.email || !EMAIL.test(email) || EMAIL_UNSAFE.test(email)) {
    errors.email = { code: "invalidEmail" };
  }
  const phone = fields.phone.trim();
  if (phone && !PHONE.test(phone)) errors.phone = { code: "invalidPhone" };
  return errors;
}

export function validateProjectInquiry(fields: ProjectInquiryFields): InquiryFieldErrors {
  const errors = contactErrors(fields);
  const location = requiredText(fields.location, INQUIRY_FIELD_LIMITS.location);
  const description = requiredText(fields.description, INQUIRY_FIELD_LIMITS.description, true);
  if (location) errors.location = location;
  if (description) errors.description = description;
  return errors;
}

export function validateEquipmentInquiry(
  fields: EquipmentInquiryFields,
  document: RequirementsDocumentMeta | null,
): InquiryFieldErrors {
  const errors = contactErrors(fields);
  if (!getEquipmentCategory(fields.category)) errors.category = { code: "unknownCategory" };
  const description = requiredText(fields.description, INQUIRY_FIELD_LIMITS.description, true);
  const quantity = requiredText(fields.quantity, INQUIRY_FIELD_LIMITS.quantity);
  const destination = requiredText(fields.destination, INQUIRY_FIELD_LIMITS.destination);
  const timeline = requiredText(fields.timeline, INQUIRY_FIELD_LIMITS.timeline);
  if (description) errors.description = description;
  if (quantity) errors.quantity = quantity;
  if (destination) errors.destination = destination;
  if (timeline) errors.timeline = timeline;
  const documentError = requirementsDocumentError(document);
  if (documentError) errors.document = { code: documentError };
  return errors;
}

export function hasInquiryErrors(errors: InquiryFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
