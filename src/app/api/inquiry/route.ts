import { readInquiryServerConfig } from "../../../lib/inquiry/server/config";
import {
  createMemoryIdempotencyStore,
  handleInquiryRequest,
  type InquiryHandlerDeps,
} from "../../../lib/inquiry/server/handler";
import { createMemoryRateLimiter, createUpstashRateLimiter } from "../../../lib/inquiry/server/rate-limit";
import { createResendSender } from "../../../lib/inquiry/server/resend";
import { createTurnstileVerifier } from "../../../lib/inquiry/server/turnstile";

/** The only server-rendered route. Every page stays statically generated. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
/** Worst case: 2 rate-limit calls (3 s each) + Turnstile (5 s) + Resend (10 s). */
export const maxDuration = 30;

let deps: InquiryHandlerDeps | null = null;

function getDeps(): InquiryHandlerDeps {
  if (deps) return deps;
  const config = readInquiryServerConfig(process.env);
  if ("reasons" in config) {
    console.info(JSON.stringify({ scope: "inquiry", outcome: "delivery_disabled", reasons: config.reasons }));
  }
  const unavailable = async () => {
    throw new Error("inquiry delivery is not configured");
  };
  deps = {
    config,
    rateLimiter: !config.enabled
      ? createMemoryRateLimiter()
      : config.config.rateLimitStore.kind === "upstash"
        ? createUpstashRateLimiter(config.config.rateLimitStore.url, config.config.rateLimitStore.token)
        : createMemoryRateLimiter(),
    verifyTurnstile: config.enabled
      ? createTurnstileVerifier(config.config.turnstileSecretKey, fetch, {
          allowTestingKeys: config.config.testMode,
          allowedHostnames: config.config.allowedHostnames,
        })
      : unavailable,
    sendEmail: config.enabled ? createResendSender(config.config.resendApiKey) : unavailable,
    idempotency: createMemoryIdempotencyStore(),
    log: (event) => console.info(JSON.stringify({ scope: "inquiry", ...event })),
  };
  return deps;
}

export async function POST(request: Request): Promise<Response> {
  return handleInquiryRequest(request, getDeps());
}
