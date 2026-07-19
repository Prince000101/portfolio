import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const SECRET_PATH = process.env.ADMIN_SECRET_PATH || "";
const SECRET_KEY = process.env.ADMIN_SECRET_KEY || "";
const COOKIE_NAME = "admin_token";

// Paths that always return 404 (decoy paths attackers scan for)
const DECOY_PATHS = [
  "/admin",
  "/wp-admin",
  "/dashboard",
  "/login",
  "/wp-login.php",
  "/administrator",
  "/cpanel",
  "/phpmyadmin",
  "/.env",
  "/config",
  "/debug",
  "/api/admin",
];

// Scan detection: paths attackers typically probe
const SCAN_PROBE_PATHS = [
  "/admin",
  "/wp-admin",
  "/wp-login.php",
  "/administrator",
  "/cpanel",
  "/phpmyadmin",
  "/.env",
  "/config",
  "/debug",
  "/backup",
  "/database",
  "/test",
  "/staging",
  "/dev",
  "/old",
  "/new",
  "/temp",
  "/tmp",
  "/setup",
  "/install",
];

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function createDecoy404(): NextResponse {
  const response = NextResponse.next();
  // Return actual 404 status code (not 302 or 401 which reveal something exists)
  return new NextResponse(
    `<!DOCTYPE html><html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>The requested URL was not found on this server.</p></body></html>`,
    {
      status: 404,
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "X-Robots-Tag": "noindex, nofollow",
      },
    }
  );
}

function createSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.delete("X-Powered-By");
  response.headers.delete("Server");
  response.headers.delete("X-Nextjs-Cache");
  return response;
}

async function verifySession(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, JWT_SECRET, { issuer: "portfolio-admin" });
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getClientIP(request);

  // Block known scan probe paths → return perfect 404
  for (const decoy of DECOY_PATHS) {
    if (pathname === decoy || pathname.startsWith(decoy + "/")) {
      return createDecoy404();
    }
  }

  // Detect scanning behavior (rapid requests to probe paths)
  for (const probe of SCAN_PROBE_PATHS) {
    if (pathname === probe || pathname.startsWith(probe + "/")) {
      // In production, you'd use Redis for this. For now, basic detection.
      // The scan detection is handled client-side in rate-limit.ts for API routes.
      return createDecoy404();
    }
  }

  // Check if this request is for the secret admin path
  if (pathname === `/${SECRET_PATH}` || pathname.startsWith(`/${SECRET_PATH}/`)) {
    const url = request.nextUrl;

    // Login page: require secret key in query parameter
    if (pathname === `/${SECRET_PATH}` || pathname === `/${SECRET_PATH}/`) {
      const key = url.searchParams.get("k");
      if (key !== SECRET_KEY) {
        // Wrong or missing key → show decoy 404
        return createDecoy404();
      }
      // Correct key → show login page
      const response = NextResponse.next();
      return createSecurityHeaders(response);
    }

    // API routes under secret path: allow through (API handles auth)
    if (pathname.startsWith(`/${SECRET_PATH}/api/`)) {
      const response = NextResponse.next();
      return createSecurityHeaders(response);
    }

    // Admin sub-pages: check session cookie
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (!token || !(await verifySession(token))) {
      // No valid session → redirect to login with key
      const loginUrl = new URL(`/${SECRET_PATH}`, request.url);
      loginUrl.searchParams.set("k", SECRET_KEY);
      return NextResponse.redirect(loginUrl);
    }

    // Valid session → allow through
    const response = NextResponse.next();
    return createSecurityHeaders(response);
  }

  // Everything else: normal site, add security headers
  const response = NextResponse.next();
  return createSecurityHeaders(response);
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|image.jpg|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
