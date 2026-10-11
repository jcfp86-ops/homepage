/**
 * A fixed-window rate limiter held in process memory.
 *
 * Scope and limits, stated plainly: serverless invocations do not share
 * memory, so this bounds abuse per instance rather than globally. A
 * distributed attacker spread across many cold starts is not stopped by it.
 * What it does stop is the realistic case — a single script hammering one
 * warm instance — which is enough to protect the mail quota while remaining
 * dependency-free. Move to a shared store if abuse becomes targeted.
 */

type Window = { count: number; resetAt: number };

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_WINDOW = 5;

/** Prevents the map growing without bound under sustained abuse. */
const MAX_TRACKED_KEYS = 10_000;

const hits = new Map<string, Window>();

function sweep(now: number) {
  for (const [key, w] of hits) {
    if (w.resetAt <= now) hits.delete(key);
  }
  // Still oversized after expiry means sustained distinct keys; drop the
  // oldest rather than letting memory grow.
  if (hits.size > MAX_TRACKED_KEYS) {
    const excess = hits.size - MAX_TRACKED_KEYS;
    let dropped = 0;
    for (const key of hits.keys()) {
      hits.delete(key);
      if (++dropped >= excess) break;
    }
  }
}

export type RateLimitResult = {
  allowed: boolean;
  /** Seconds until the window resets. Zero when allowed. */
  retryAfter: number;
};

export function checkRateLimit(
  key: string,
  { max = MAX_PER_WINDOW, windowMs = WINDOW_MS } = {},
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const existing = hits.get(key);

  if (!existing || existing.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  existing.count += 1;

  if (existing.count > max) {
    return {
      allowed: false,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  return { allowed: true, retryAfter: 0 };
}

/** Exposed so tests can start from a known state. */
export function resetRateLimits() {
  hits.clear();
}
