"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors hover:bg-[var(--border-color)]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors" />
      )}
    </button>
  );
}
