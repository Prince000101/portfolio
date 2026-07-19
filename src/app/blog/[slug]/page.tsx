"use client";

import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (const line of lines) {
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-2xl font-semibold mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={key++} className="text-[var(--muted)] ml-4 mb-1 list-disc">
            {line.replace("- ", "")}
          </li>
        );
      } else if (/^\d+\./.test(line)) {
        elements.push(
          <li key={key++} className="text-[var(--muted)] ml-4 mb-1 list-decimal">
            {line.replace(/^\d+\.\s*/, "")}
          </li>
        );
      } else if (line.trim() === "") {
        elements.push(<div key={key++} className="h-2" />);
      } else {
        elements.push(
          <p key={key++} className="text-[var(--muted)] leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <main className="w-full">
      <section className="min-h-screen py-20 lg:py-32 px-6 sm:px-8 lg:px-12">
        <article className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex items-center gap-4 text-xs text-[var(--muted)] mb-6">
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
              {post.title}
            </h1>
            <div className="flex gap-3 flex-wrap mb-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest text-[var(--muted)] border border-[var(--border-color)] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="border-t border-[var(--border-color)] pt-8 overflow-hidden">
              {renderContent(post.content)}
            </div>
          </ScrollReveal>
        </article>
      </section>
    </main>
  );
}
