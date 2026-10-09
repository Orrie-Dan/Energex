import { INQUIRY_ENDPOINT, type InquiryRequestBody } from "./protocol";
import { publicInquiryConfig, type PublicInquiryConfig } from "./public-config";
import {
  INQUIRY_FIELD_ERROR_CODES,
  INQUIRY_FIELD_NAMES,
  type EquipmentInquiryFields,
  type InquiryFieldErrors,
  type ProjectInquiryFields,
} from "./validate";

/**
 * Browser adapter for `/api/inquiry`.
 * Contains no recipient address or credentials and never sends file bytes.
 * `accepted` is reported only when the server confirms the email provider
 * accepted the message; anything ambiguous is reported as `uncertain`.
 */

export type InquirySubmission =
  | { mode: "project"; fields: ProjectInquiryFields }
  | { mode: "equipment"; fields: EquipmentInquiryFields };

export type InquiryAttempt = {
  turnstileToken: string;
  /** Reused for retries of unchanged content so the provider de-duplicates them. */
  idempotencyKey: string;
  /** Value of the hidden honeypot input. People leave it empty. */
  honeypot: string;
};

export type InquiryDeliveryResult =
  /** Delivery is not configured. Nothing was sent. */
  | { status: "unavailable" }
  /** The email provider accepted the message. Not a confirmation of inbox delivery. */
  | { status: "accepted"; reference: string }
  /** Server-side validation failed. Nothing was sent. */
  | { status: "invalid"; errors: InquiryFieldErrors }
  /** Too many attempts. Nothing was sent. */
  | { status: "rate_limited"; retryAfterSeconds: number }
  /** Bot verification failed. Nothing was sent. */
  | { status: "verification_failed" }
  /** The request was refused or the provider declined it. Nothing was sent. */
  | { status: "failed" }
  /** The outcome is unknown. The message may or may not have been sent. */
  | { status: "uncertain" };

const REFERENCE = /^ENX-[0-9A-F]{10}$/;
const CLIENT_TIMEOUT_MS = 35000;

function sanitizeErrors(value: unknown): InquiryFieldErrors | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  const errors: InquiryFieldErrors = {};
  for (const [field, error] of Object.entries(value)) {
    if (!(INQUIRY_FIELD_NAMES as readonly string[]).includes(field)) return null;
    const code = (error as { code?: unknown })?.code;
    const max = (error as { max?: unknown })?.max;
    if (typeof code !== "string" || !(INQUIRY_FIELD_ERROR_CODES as readonly string[]).includes(code)) return null;
    errors[field as keyof InquiryFieldErrors] = {
      code: code as (typeof INQUIRY_FIELD_ERROR_CODES)[number],
      ...(typeof max === "number" ? { max } : {}),
    };
  }
  return Object.keys(errors).length > 0 ? errors : null;
}

/** Maps an HTTP response to a result. Exported for tests. */
export async function interpretInquiryResponse(response: Response): Promise<InquiryDeliveryResult> {
  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }
  const status = (body as { status?: unknown } | null)?.status;

  if (response.ok) {
    const reference = (body as { reference?: unknown } | null)?.reference;
    if (status === "accepted" && typeof reference === "string" && REFERENCE.test(reference)) {
      return { status: "accepted", reference };
    }
    // A 2xx without a well-formed acceptance cannot be treated as success.
    return { status: "uncertain" };
  }

  switch (status) {
    case "unavailable":
      return { status: "unavailable" };
    case "invalid": {
      const errors = sanitizeErrors((body as { errors?: unknown }).errors);
      return errors ? { status: "invalid", errors } : { status: "failed" };
    }
    case "rate_limited": {
      const seconds = (body as { retryAfterSeconds?: unknown }).retryAfterSeconds;
      return {
        status: "rate_limited",
        retryAfterSeconds: typeof seconds === "number" && seconds > 0 ? Math.ceil(seconds) : 60,
      };
    }
    case "verification_failed":
      return { status: "verification_failed" };
    case "rejected":
    case "failed":
      return { status: "failed" };
    case "uncertain":
      return { status: "uncertain" };
  }
  // Unrecognized body: gateway timeouts and 5xx may follow a send; 4xx did not reach the provider.
  return response.status >= 500 ? { status: "uncertain" } : { status: "failed" };
}

export type SubmitOptions = {
  config?: PublicInquiryConfig;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
};

export async function submitInquiry(
  submission: InquirySubmission,
  attempt: InquiryAttempt,
  options: SubmitOptions = {},
): Promise<InquiryDeliveryResult> {
  const config = options.config ?? publicInquiryConfig;
  if (!config.enabled) return { status: "unavailable" };

  const shared = {
    turnstileToken: attempt.turnstileToken,
    idempotencyKey: attempt.idempotencyKey,
    website: attempt.honeypot,
  };
  const body: InquiryRequestBody =
    submission.mode === "project"
      ? { mode: "project", fields: submission.fields, ...shared }
      : { mode: "equipment", fields: submission.fields, ...shared };

  const fetchImpl = options.fetchImpl ?? fetch;
  let response: Response;
  try {
    response = await fetchImpl(INQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "same-origin",
      cache: "no-store",
      signal: AbortSignal.timeout(options.timeoutMs ?? CLIENT_TIMEOUT_MS),
    });
  } catch {
    // Network loss or timeout: the server may still have handed the message to the provider.
    return { status: "uncertain" };
  }
  return interpretInquiryResponse(response);
}
