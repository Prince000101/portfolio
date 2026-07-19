import Link from "next/link";
import { personal, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border-color)]/20 py-8 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[10px] sm:text-xs text-[var(--muted)] font-serif italic">
          {personal.footerText}
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-[var(--muted)]">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
              className="py-2 px-1 hover:text-[var(--foreground)] transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
