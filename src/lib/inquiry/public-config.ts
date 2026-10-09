/**
 * Browser-visible inquiry settings. Only non-secret values belong here.
 * `process.env.NEXT_PUBLIC_*` must be referenced literally so Next.js can
 * inline it at build time.
 *
 * Live submission is shown only when both values are present. The server
 * still decides independently (see `server/config.ts`); a mismatch falls back
 * to the unavailable state.
 */

export type PublicInquiryConfig =
  | { enabled: true; turnstileSiteKey: string }
  | { enabled: false };

export function readPublicInquiryConfig(
  enabledFlag: string | undefined,
  siteKey: string | undefined,
): PublicInquiryConfig {
  const key = (siteKey ?? "").trim();
  if (enabledFlag?.trim() === "true" && key) {
    return { enabled: true, turnstileSiteKey: key };
  }
  return { enabled: false };
}

export const publicInquiryConfig: PublicInquiryConfig = readPublicInquiryConfig(
  process.env.NEXT_PUBLIC_INQUIRY_DELIVERY_ENABLED,
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
);
