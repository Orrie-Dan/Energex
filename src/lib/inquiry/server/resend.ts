/**
 * Minimal Resend REST client (no SDK dependency).
 * https://resend.com/docs/api-reference/emails/send-email
 *
 * `sent` is returned only for a 2xx response that carries a message id.
 * Acceptance by Resend is not confirmation of inbox delivery.
 */

const RESEND_URL = "https://api.resend.com/emails";
const TIMEOUT_MS = 10000;

export type OutgoingEmail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  tags: { name: string; value: string }[];
};

export type SendOutcome =
  /** Resend accepted the message and returned its id. */
  | { kind: "sent"; providerId: string }
  /** Resend definitively refused the message; it was not accepted. */
  | { kind: "refused"; httpStatus: number; errorName?: string }
  /** The outcome is unknown (timeout, network error, 5xx, idempotency conflict, malformed reply). */
  | { kind: "unknown"; httpStatus: number | null; errorName?: string };

/**
 * Resend's machine-readable error code (e.g. `validation_error`,
 * `invalid_from_address`). The free-text `message` is never read because it
 * can echo addresses; only a strictly formatted code is kept for logs.
 */
async function readErrorName(response: Response): Promise<string | undefined> {
  try {
    const name = ((await response.json()) as { name?: unknown })?.name;
    return typeof name === "string" && /^[a-z_]{1,64}$/.test(name) ? name : undefined;
  } catch {
    return undefined;
  }
}

export type EmailSender = (email: OutgoingEmail, idempotencyKey: string) => Promise<SendOutcome>;

export function createResendSender(apiKey: string, fetchImpl: typeof fetch = fetch): EmailSender {
  return async (email, idempotencyKey) => {
    let response: Response;
    try {
      response = await fetchImpl(RESEND_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          // Resend de-duplicates requests that reuse a key for 24 hours.
          "Idempotency-Key": `energex-inquiry/${idempotencyKey}`,
        },
        body: JSON.stringify({
          from: email.from,
          to: [email.to],
          reply_to: email.replyTo,
          subject: email.subject,
          text: email.text,
          html: email.html,
          tags: email.tags,
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    } catch {
      // The request may or may not have reached Resend.
      return { kind: "unknown", httpStatus: null };
    }

    if (response.ok) {
      let id: unknown;
      try {
        id = ((await response.json()) as { id?: unknown })?.id;
      } catch {
        id = undefined;
      }
      if (typeof id === "string" && id.length > 0) return { kind: "sent", providerId: id };
      return { kind: "unknown", httpStatus: response.status };
    }

    const errorName = await readErrorName(response);
    // 409: concurrent or conflicting idempotent request. A previous attempt may have been accepted.
    if (response.status === 409 || response.status >= 500) {
      return { kind: "unknown", httpStatus: response.status, ...(errorName ? { errorName } : {}) };
    }
    return { kind: "refused", httpStatus: response.status, ...(errorName ? { errorName } : {}) };
  };
}
