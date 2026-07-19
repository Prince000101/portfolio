"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="w-full">
      <section className="min-h-screen py-20 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] overflow-hidden border border-[var(--border-color)] mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif">
                {project.title}
              </h1>
              <div className="flex gap-3 shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex gap-3 flex-wrap mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border-color)] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="prose max-w-none overflow-hidden">
              <p className="text-[var(--muted)] text-base sm:text-lg leading-relaxed whitespace-pre-line overflow-wrap-break-word">
                {project.longDescription}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
