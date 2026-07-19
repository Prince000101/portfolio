"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { LayoutGrid, List, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <main className="w-full">
      <section className="min-h-screen py-20 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-4">
                  Selected{" "}
                  <span className="text-[var(--muted)] italic">Works</span>
                </h1>
                <p className="text-[var(--muted)] text-sm max-w-md">
                  A collection of projects I&apos;ve built, from full-stack
                  platforms to desktop applications.
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
              {projects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.06}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block border border-[var(--border-color)] overflow-hidden hover:border-[var(--muted)]/50 transition-colors h-full"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border-color)] px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] px-1 py-1">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="space-y-0">
              {projects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.04}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col sm:flex-row gap-6 py-6 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors"
                  >
                    <div className="relative w-full sm:w-48 h-36 sm:h-28 overflow-hidden shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-[var(--background)]/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-serif text-lg sm:text-xl mb-1 group-hover:text-[var(--muted)] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[var(--muted)] text-sm line-clamp-2 mb-3">
                            {project.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[var(--muted)] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border-color)] px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 5 && (
                          <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] px-1 py-1">
                            +{project.tags.length - 5}
                          </span>
                        )}
                      </div>
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
