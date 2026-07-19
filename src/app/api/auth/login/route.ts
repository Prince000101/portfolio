import { NextRequest, NextResponse } from "next/server";
import {
  verifyPassword,
  signToken,
  setSessionCookie,
  getPasswordHash,
  getSecretKey,
  getSecretPath,
} from "@/lib/auth";
import { checkLoginRateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password, k } = body;

  // Verify secret key first
  if (k !== getSecretKey()) {
    return NextResponse.json({ error: "Invalid request" }, { status: 404 });
  }

  // Get client IP for rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Check rate limit
  const rateLimit = checkLoginRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: "Too many login attempts",
        retryAfter: rateLimit.retryAfter,
      },
      { status: 429 }
    );
  }

  // Validate password
  if (!password || typeof password !== "string") {
    return NextResponse.json(
      { error: "Password required" },
      { status: 400 }
    );
  }

  const passwordHash = getPasswordHash();
  if (!passwordHash) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const isValid = await verifyPassword(password, passwordHash);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid password", remaining: rateLimit.remaining },
      { status: 401 }
    );
  }

  // Create session token
  const token = await signToken({ role: "admin", ip });

  // Set cookie on response directly
  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  return response;
}
