import { INQUIRY_TURNSTILE_ACTION } from "../protocol";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TIMEOUT_MS = 5000;

export type TurnstileOutcome =
  /** Cloudflare confirmed the token. */
  | { kind: "passed" }
  /** Cloudflare answered and rejected the token. */
  | { kind: "rejected" }
  /** Cloudflare could not be reached or answered unexpectedly. Treated as not verified. */
  | { kind: "error" };

export type TurnstileVerifier = (token: string, remoteIp: string | null) => Promise<TurnstileOutcome>;

export type TurnstileOptions = {
  /**
   * Accept Cloudflare's published testing-key results, which carry no action.
   * Must be false in production so a test secret can never pass real traffic.
   */
  allowTestingKeys?: boolean;
  /** When set, real tokens must have been issued for one of these hostnames. */
  allowedHostnames?: readonly string[];
};

export function createTurnstileVerifier(
  secretKey: string,
  fetchImpl: typeof fetch = fetch,
  options: TurnstileOptions = {},
): TurnstileVerifier {
  return async (token, remoteIp) => {
    const body = new URLSearchParams({ secret: secretKey, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);
    let response: Response;
    try {
      response = await fetchImpl(SITEVERIFY_URL, {
        method: "POST",
        body,
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    } catch {
      return { kind: "error" };
    }
    if (!response.ok) return { kind: "error" };
    let result: unknown;
    try {
      result = await response.json();
    } catch {
      return { kind: "error" };
    }
    if (typeof result !== "object" || result === null) return { kind: "error" };
    const { success, action, hostname, metadata } = result as {
      success?: unknown;
      action?: unknown;
      hostname?: unknown;
      metadata?: unknown;
    };
    if (success !== true) return { kind: "rejected" };
    const testingKey = (metadata as { result_with_testing_key?: unknown } | undefined)?.result_with_testing_key === true;
    if (testingKey) return options.allowTestingKeys ? { kind: "passed" } : { kind: "rejected" };
    // Bind the token to the inquiry widget so tokens minted elsewhere are refused.
    if (action !== INQUIRY_TURNSTILE_ACTION) return { kind: "rejected" };
    if (options.allowedHostnames && (typeof hostname !== "string" || !options.allowedHostnames.includes(hostname))) {
      return { kind: "rejected" };
    }
    return { kind: "passed" };
  };
}
