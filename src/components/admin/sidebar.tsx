"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, FolderOpen, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const secret = pathname.split("/")[1];
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileOpen]);

  const adminLinks = [
    { href: `/${secret}/dashboard`, label: "Dashboard", icon: LayoutDashboard },
    { href: `/${secret}/posts`, label: "Blog Posts", icon: FileText },
    { href: `/${secret}/projects`, label: "Projects", icon: FolderOpen },
  ];

  const sidebarContent = (
    <>
      <Link
        href={`/${secret}/dashboard`}
        className="font-serif italic text-lg tracking-wide block mb-10"
      >
        Prince. <span className="text-[var(--muted)] text-xs">Admin</span>
      </Link>

      <nav className="space-y-1">
        {adminLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            pathname === link.href ||
            (link.href !== `/${secret}/dashboard` &&
              pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 min-h-[44px] text-sm rounded transition-colors ${
                isActive
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border-color)]/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 min-h-[44px] text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <LogOut className="w-4 h-4" />
          View Site
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center border border-[var(--border-color)] bg-[var(--background)]"
        aria-label="Toggle admin menu"
      >
        {mobileOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Desktop sidebar */}
      <aside className="w-64 min-h-screen border-r border-[var(--border-color)] bg-[var(--background)] p-6 hidden lg:block relative">
        {sidebarContent}
      </aside>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[55]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 w-72 h-full border-r border-[var(--border-color)] bg-[var(--background)] p-6 z-[56] transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-12">
          {sidebarContent}
        </div>
      </aside>
    </>
  );
}
