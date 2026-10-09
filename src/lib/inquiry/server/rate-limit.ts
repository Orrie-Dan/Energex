/**
 * Fixed-window rate limiting.
 *
 * - `memory`: per server instance. Suitable for local and preview use only;
 *   serverless instances do not share it.
 * - `upstash`: shared Redis over the Upstash REST API (no SDK dependency).
 *
 * Store failures throw so callers can fail closed.
 */

/** `retryAfterSeconds` is 0 when the request is allowed. */
export type RateLimitDecision = { allowed: boolean; retryAfterSeconds: number };

export interface RateLimiter {
  hit(key: string, limit: number, windowSeconds: number): Promise<RateLimitDecision>;
}

export function createMemoryRateLimiter(now: () => number = Date.now): RateLimiter {
  const windows = new Map<string, { count: number; resetAt: number }>();
  return {
    async hit(key, limit, windowSeconds) {
      const time = now();
      if (windows.size > 10_000) {
        for (const [entryKey, entry] of windows) if (entry.resetAt <= time) windows.delete(entryKey);
      }
      let entry = windows.get(key);
      if (!entry || entry.resetAt <= time) {
        entry = { count: 0, resetAt: time + windowSeconds * 1000 };
        windows.set(key, entry);
      }
      entry.count += 1;
      if (entry.count > limit) {
        return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - time) / 1000)) };
      }
      return { allowed: true, retryAfterSeconds: 0 };
    },
  };
}

export function createUpstashRateLimiter(
  url: string,
  token: string,
  fetchImpl: typeof fetch = fetch,
): RateLimiter {
  return {
    async hit(key, limit, windowSeconds) {
      const redisKey = `energex:inquiry:rl:${key}`;
      const response = await fetchImpl(`${url}/pipeline`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify([
          ["SET", redisKey, "0", "EX", String(windowSeconds), "NX"],
          ["INCR", redisKey],
          ["TTL", redisKey],
        ]),
        signal: AbortSignal.timeout(3000),
      });
      if (!response.ok) throw new Error(`rate-limit store responded ${response.status}`);
      const results: unknown = await response.json();
      if (!Array.isArray(results)) throw new Error("rate-limit store returned an unexpected response");
      const count = (results[1] as { result?: unknown } | undefined)?.result;
      const ttl = (results[2] as { result?: unknown } | undefined)?.result;
      if (typeof count !== "number") {
        throw new Error("rate-limit store returned an unexpected response");
      }
      if (count > limit) {
        const retryAfterSeconds = typeof ttl === "number" && ttl > 0 ? ttl : windowSeconds;
        return { allowed: false, retryAfterSeconds };
      }
      return { allowed: true, retryAfterSeconds: 0 };
    },
  };
}
