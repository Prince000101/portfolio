"use client";

import Link from "next/link";
import { Plus, Edit, Trash2, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { getProjects, deleteProject } from "@/lib/storage";
import { Project } from "@/lib/types";
import { use } from "react";

export default function SecretProjectsPage({
  params,
}: {
  params: Promise<{ secret: string }>;
}) {
  const { secret } = use(params);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setProjectList(getProjects());
    setMounted(true);
  }, []);

  const handleDelete = (slug: string) => {
    if (confirm("Delete this project?")) {
      deleteProject(slug);
      setProjectList(getProjects());
    }
  };

  if (!mounted) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Projects</h1>
        <p className="text-[var(--muted)] text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif mb-2">Projects</h1>
          <p className="text-[var(--muted)] text-sm">
            {projectList.length} projects total
          </p>
        </div>
        <Link
          href={`/${secret}/projects/new`}
          className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Link>
      </div>

      {projectList.length === 0 ? (
        <div className="border border-[var(--border-color)] p-12 text-center">
          <p className="text-[var(--muted)] text-sm mb-4">No projects yet.</p>
          <Link
            href={`/${secret}/projects/new`}
            className="text-sm text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
          >
            Add your first project &rarr;
          </Link>
        </div>
      ) : (
        <div className="space-y-0">
          {projectList.map((project) => (
            <div
              key={project.slug}
              className="flex items-center justify-between py-4 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-16 h-12 overflow-hidden shrink-0 border border-[var(--border-color)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg truncate">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star className="w-3.5 h-3.5 text-[var(--foreground)] fill-[var(--foreground)]" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)] mt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 ml-4 shrink-0">
                <Link
                  href={`/${secret}/projects/${project.slug}`}
                  className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(project.slug)}
                  className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-[var(--muted)] hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
