"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SecretLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(false);
  const [retryAfter, setRetryAfter] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const k = searchParams.get("k");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, k }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setLocked(true);
        setRetryAfter(data.retryAfter || 900);
        setError(`Too many attempts. Try again in ${Math.ceil((data.retryAfter || 900) / 60)} minutes.`);
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(data.error || "Invalid password");
        setLoading(false);
        return;
      }

      // Success — redirect to admin dashboard
      const secretPath = data.secretPath;
      router.push(`/${secretPath}/dashboard`);
    } catch {
      setError("Connection error");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[var(--background)]">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-serif mb-2">Admin</h1>
        <p className="text-[var(--muted)] text-sm mb-8">
          Enter your password to access the admin panel.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Password"
              required
              disabled={locked || loading}
              className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors disabled:opacity-50"
            />
            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={locked || loading}
            className="w-full py-3 bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Verifying..." : locked ? "Locked" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
