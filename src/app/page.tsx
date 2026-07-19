"use client";

import { personal, projects, blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-[100svh] w-full flex flex-col justify-center items-center text-center px-6 sm:px-12 py-20 lg:py-0 relative">
        <ScrollReveal>
          <p className="text-[var(--muted)] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 xl:mb-6 font-medium">
            Portfolio
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-medium leading-[1.1] mb-6 md:mb-8 text-[var(--foreground)] max-w-full">
            Building digital <br className="hidden sm:block" />
            <span className="text-[var(--muted)] italic sm:inline block mt-1 sm:mt-0">
              experiences
            </span>{" "}
            <br className="hidden sm:block" />
            with purpose.
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-[var(--muted)] max-w-lg lg:max-w-2xl font-light leading-relaxed mb-10 xl:mb-12">
            {personal.heroDescription}
          </p>
        </ScrollReveal>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-[var(--muted)] uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-[var(--border-color)]" />
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif">
                Selected <br className="hidden sm:block md:hidden" />
                <span className="text-[var(--muted)] italic">Works</span>
              </h2>
              <Link
                href="/projects"
                className="text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors mt-4 md:mt-0"
              >
                View all &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.1}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block border border-[var(--border-color)] overflow-hidden hover:border-[var(--muted)]/50 transition-colors"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                      <p className="text-[var(--muted)] text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex gap-3 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-widest text-[var(--muted)]"
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
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif">
                Latest <span className="text-[var(--muted)] italic">Posts</span>
              </h2>
              <Link
                href="/blog"
                className="text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors mt-4 md:mt-0"
              >
                All posts &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-8 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-xl sm:text-2xl mb-2 group-hover:text-[var(--muted)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm max-w-2xl">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted)] shrink-0">
                      <span>{post.readTime}</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-serif mb-8">
              Let&apos;s <span className="text-[var(--muted)] italic">talk.</span>
            </h2>
            <p className="text-[var(--muted)] text-sm sm:text-base lg:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
              Whether you have a question, a project idea, or just want to say
              hi, my inbox is always open!
            </p>
            <Link
              href="/contact"
              className="inline-block text-xl sm:text-2xl lg:text-3xl border-b border-[var(--foreground)] hover:text-[var(--muted)] hover:border-[var(--muted)] transition-colors pb-1 break-all max-w-full"
            >
              {personal.email}
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
