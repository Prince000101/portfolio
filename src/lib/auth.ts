import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const COOKIE_NAME = "admin_token";
const SESSION_DURATION = 3600; // 1 hour

export async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  return bcrypt.compare(password, storedHash);
}

export async function signToken(payload: Record<string, unknown>): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .setIssuer("portfolio-admin")
    .sign(JWT_SECRET);
}

export async function verifyToken(
  token: string
): Promise<Record<string, unknown> | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      issuer: "portfolio-admin",
    });
    return payload as Record<string, unknown>;
  } catch {
    return null;
  }
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_DURATION,
    path: "/",
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value ?? null;
}

export function getSecretPath(): string {
  if (!process.env.ADMIN_SECRET_PATH) throw new Error("ADMIN_SECRET_PATH not set");
  return process.env.ADMIN_SECRET_PATH;
}

export function getSecretKey(): string {
  if (!process.env.ADMIN_SECRET_KEY) throw new Error("ADMIN_SECRET_KEY not set");
  return process.env.ADMIN_SECRET_KEY;
}

export function getPasswordHash(): string {
  if (!process.env.ADMIN_PASSWORD_HASH) throw new Error("ADMIN_PASSWORD_HASH not set");
  return process.env.ADMIN_PASSWORD_HASH;
}
