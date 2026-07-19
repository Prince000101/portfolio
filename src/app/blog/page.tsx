"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { LayoutGrid, List, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <main className="w-full">
      <section className="min-h-screen py-20 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-4">
                  Blog{" "}
                  <span className="text-[var(--muted)] italic">&amp; Thoughts</span>
                </h1>
                <p className="text-[var(--muted)] text-sm max-w-md">
                  Writing about code, psychology, and the intersection of both.
                </p>
              </div>
              <div className="flex items-center gap-1 border border-[var(--border-color)] shrink-0">
                <button
                  onClick={() => setView("grid")}
                  className={`p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                    view === "grid"
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-[var(--border-color)]" />
                <button
                  onClick={() => setView("list")}
                  className={`p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                    view === "list"
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {view === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border border-[var(--border-color)] overflow-hidden hover:border-[var(--muted)]/50 transition-colors h-full"
                  >
                    <div className="relative h-32 sm:h-40 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[var(--border-color)]/40 via-[var(--background)] to-[var(--border-color)]/20 group-hover:from-[var(--muted)]/20 group-hover:via-[var(--background)] group-hover:to-[var(--muted)]/10 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[var(--muted)]">
                          <span>{post.date}</span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-serif text-lg sm:text-xl mb-2 group-hover:text-[var(--muted)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[var(--muted)] text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border-color)] px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="space-y-0">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block py-8 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-xs text-[var(--muted)] mb-3">
                          <span>{post.date}</span>
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="font-serif text-xl sm:text-2xl mb-2 group-hover:text-[var(--muted)] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-[var(--muted)] text-sm max-w-2xl">
                          {post.excerpt}
                        </p>
                        <div className="flex gap-3 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border-color)] px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 self-center group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
