"use client";

import { useState } from "react";

interface PostFormProps {
  initialData?: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    tags: string;
    readTime: string;
  };
  onSubmit: (data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    tags: string[];
    readTime: string;
  }) => void;
  submitLabel?: string;
}

export default function PostForm({
  initialData,
  onSubmit,
  submitLabel = "Save Post",
}: PostFormProps) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    tags: initialData?.tags || "",
    readTime: initialData?.readTime || "3 min read",
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...form,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Title
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => {
            setForm({
              ...form,
              title: e.target.value,
              slug: generateSlug(e.target.value),
            });
          }}
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Slug
        </label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors font-mono"
        />
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Excerpt
        </label>
        <textarea
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          rows={2}
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Content (supports ## and ### headings, - for lists)
        </label>
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows={10}
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors resize-none font-mono sm:rows-[15]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="Next.js, React, Full-Stack"
            className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
            Read Time
          </label>
          <input
            type="text"
            value={form.readTime}
            onChange={(e) => setForm({ ...form, readTime: e.target.value })}
            className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
      >
        {submitLabel}
      </button>
    </form>
  );
}
