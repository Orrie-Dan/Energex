/**
 * Tracks the idempotency key and in-flight state of the contact form.
 *
 * - One key per inquiry content: retries of unchanged content reuse it, so a
 *   retry after an uncertain outcome is de-duplicated by the provider.
 * - Any edit invalidates the key, so changed content is a new inquiry.
 * - Only one submission may be in flight at a time.
 */
export type InquiryAttemptTracker = {
  /** Returns the key to submit with, or null when a submission is already in flight. */
  begin(): string | null;
  /** Marks the in-flight submission as finished. Keeps the key for retries. */
  finish(): void;
  /** Content changed or a new inquiry started: the next submission gets a new key. */
  invalidate(): void;
};

export function createInquiryAttemptTracker(
  newKey: () => string = () => crypto.randomUUID(),
): InquiryAttemptTracker {
  let key: string | null = null;
  let inFlight = false;
  return {
    begin() {
      if (inFlight) return null;
      inFlight = true;
      key ??= newKey();
      return key;
    },
    finish() {
      inFlight = false;
    },
    invalidate() {
      key = null;
    },
  };
}
