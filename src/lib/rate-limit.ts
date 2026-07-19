interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const loginAttempts = new Map<string, RateLimitEntry>();
const scanAttempts = new Map<string, RateLimitEntry>();

const LOGIN_MAX = 5;
const LOGIN_WINDOW = 15 * 60 * 1000; // 15 minutes
const SCAN_MAX = 10;
const SCAN_WINDOW = 60 * 1000; // 1 minute
const BLOCK_DURATION = 5 * 60 * 1000; // 5 minutes

function cleanup(map: Map<string, RateLimitEntry>, windowMs: number) {
  const now = Date.now();
  for (const [key, entry] of map) {
    if (now - entry.resetTime > windowMs) {
      map.delete(key);
    }
  }
}

export function checkLoginRateLimit(
  ip: string
): { allowed: boolean; remaining: number; retryAfter?: number } {
  cleanup(loginAttempts, LOGIN_WINDOW);
  const now = Date.now();
  const entry = loginAttempts.get(ip);

  if (!entry || now - entry.resetTime > LOGIN_WINDOW) {
    loginAttempts.set(ip, { count: 1, resetTime: now });
    return { allowed: true, remaining: LOGIN_MAX - 1 };
  }

  if (entry.count >= LOGIN_MAX) {
    const retryAfter = Math.ceil(
      (entry.resetTime + LOGIN_WINDOW - now) / 1000
    );
    return { allowed: false, remaining: 0, retryAfter };
  }

  entry.count++;
  return { allowed: true, remaining: LOGIN_MAX - entry.count };
}

export function checkScanRateLimit(
  ip: string
): { blocked: boolean; retryAfter?: number } {
  cleanup(scanAttempts, SCAN_WINDOW);
  const now = Date.now();
  const entry = scanAttempts.get(ip);

  if (!entry || now - entry.resetTime > SCAN_WINDOW) {
    scanAttempts.set(ip, { count: 1, resetTime: now });
    return { blocked: false };
  }

  entry.count++;

  if (entry.count >= SCAN_MAX) {
    const retryAfter = Math.ceil(
      (entry.resetTime + SCAN_WINDOW + BLOCK_DURATION - now) / 1000
    );
    return { blocked: true, retryAfter };
  }

  return { blocked: false };
}

export function isIPBlocked(ip: string): boolean {
  const entry = scanAttempts.get(ip);
  if (!entry) return false;
  if (entry.count < SCAN_MAX) return false;
  const now = Date.now();
  return now - entry.resetTime < SCAN_WINDOW + BLOCK_DURATION;
}
