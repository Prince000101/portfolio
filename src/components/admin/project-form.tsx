"use client";

import { useState } from "react";

interface ProjectFormProps {
  initialData?: {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    image: string;
    github: string;
    demo: string;
    tags: string;
    featured: boolean;
  };
  onSubmit: (data: {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    image: string;
    github: string;
    demo: string;
    tags: string[];
    featured: boolean;
  }) => void;
  submitLabel?: string;
}

export default function ProjectForm({
  initialData,
  onSubmit,
  submitLabel = "Save Project",
}: ProjectFormProps) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    description: initialData?.description || "",
    longDescription: initialData?.longDescription || "",
    image: initialData?.image || "",
    github: initialData?.github || "",
    demo: initialData?.demo || "",
    tags: initialData?.tags || "",
    featured: initialData?.featured || false,
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
          Short Description
        </label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={2}
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Full Description
        </label>
        <textarea
          value={form.longDescription}
          onChange={(e) =>
            setForm({ ...form, longDescription: e.target.value })
          }
          rows={6}
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Cover Image URL
        </label>
        <input
          type="url"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          placeholder="https://images.unsplash.com/..."
          required
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors font-mono"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
            GitHub URL
          </label>
          <input
            type="url"
            value={form.github}
            onChange={(e) => setForm({ ...form, github: e.target.value })}
            className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors font-mono"
          />
        </div>
        <div>
          <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
            Demo URL
          </label>
          <input
            type="url"
            value={form.demo}
            onChange={(e) => setForm({ ...form, demo: e.target.value })}
            className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
          Tags (comma separated)
        </label>
        <input
          type="text"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
          placeholder="Next.js, Supabase, Full-Stack"
          className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          checked={form.featured}
          onChange={(e) => setForm({ ...form, featured: e.target.checked })}
          className="w-4 h-4 accent-[var(--foreground)]"
        />
        <label
          htmlFor="featured"
          className="text-sm text-[var(--muted)]"
        >
          Featured project (shows on homepage)
        </label>
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
