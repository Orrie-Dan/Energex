import type { EquipmentInquiryFields, InquiryFieldErrors, ProjectInquiryFields } from "./validate";

/**
 * Wire format shared by the browser adapter (`submit.ts`) and the server
 * endpoint (`/api/inquiry`). Contains no configuration or secrets.
 */

export const INQUIRY_ENDPOINT = "/api/inquiry";

/** Upper bound for the JSON request body. Text fields only; files are never sent. */
export const INQUIRY_MAX_BODY_BYTES = 32 * 1024;

/** Cloudflare Turnstile action name bound to the inquiry widget. */
export const INQUIRY_TURNSTILE_ACTION = "inquiry";

export const PROJECT_FIELD_KEYS = [
  "name",
  "company",
  "email",
  "phone",
  "location",
  "description",
] as const satisfies readonly (keyof ProjectInquiryFields)[];

export const EQUIPMENT_FIELD_KEYS = [
  "name",
  "company",
  "email",
  "phone",
  "category",
  "description",
  "quantity",
  "destination",
  "timeline",
] as const satisfies readonly (keyof EquipmentInquiryFields)[];

export type InquiryRequestBody =
  | {
      mode: "project";
      fields: ProjectInquiryFields;
      turnstileToken: string;
      idempotencyKey: string;
      /** Honeypot. Must be an empty string. */
      website: string;
    }
  | {
      mode: "equipment";
      fields: EquipmentInquiryFields;
      turnstileToken: string;
      idempotencyKey: string;
      website: string;
    };

/**
 * Server responses. `accepted` is returned only after the email provider
 * acknowledged the message and returned an identifier. It does not mean the
 * message reached an inbox.
 */
export type InquiryResponseBody =
  | { status: "accepted"; reference: string }
  | { status: "invalid"; errors: InquiryFieldErrors }
  | { status: "unavailable" }
  | { status: "rate_limited"; retryAfterSeconds: number }
  | { status: "verification_failed" }
  | { status: "rejected" }
  | { status: "failed" }
  | { status: "uncertain" };

const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export function isIdempotencyKey(value: unknown): value is string {
  return typeof value === "string" && UUID_V4.test(value);
}

/** Short reference shown to the visitor and printed in the email. Derived from the idempotency key. */
export function inquiryReference(idempotencyKey: string): string {
  return `ENX-${idempotencyKey.replace(/-/g, "").slice(0, 10).toUpperCase()}`;
}
