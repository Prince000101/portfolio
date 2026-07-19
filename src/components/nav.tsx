"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Connect" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)]/50 transition-all duration-300">
      <div className="w-full px-6 sm:px-8 lg:px-12 py-4 sm:py-5 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif italic text-base sm:text-lg tracking-wide hover:text-[var(--muted)] transition-colors"
        >
          Prince.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs sm:text-sm font-medium text-[var(--muted)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-[var(--foreground)] transition-colors ${
                  pathname === link.href ? "text-[var(--foreground)]" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-[var(--border-color)]/50 bg-[var(--background)]/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-2 text-sm font-medium text-[var(--muted)]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 px-6 min-h-[44px] flex items-center hover:text-[var(--foreground)] transition-colors ${
                  pathname === link.href ? "text-[var(--foreground)]" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
