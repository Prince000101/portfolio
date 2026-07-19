"use client";

import { useRouter } from "next/navigation";
import ProjectForm from "@/components/admin/project-form";
import { addProject } from "@/lib/storage";
import { useState, use } from "react";

export default function SecretNewProjectPage({
  params,
}: {
  params: Promise<{ secret: string }>;
}) {
  const { secret } = use(params);
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-serif mb-2">New Project</h1>
      <p className="text-[var(--muted)] text-sm mb-10">
        Add a new project to your portfolio.
      </p>

      {saved ? (
        <div className="border border-[var(--border-color)] p-6 max-w-3xl">
          <p className="text-sm mb-4 text-green-500">
            Project added successfully!
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/${secret}/projects`)}
              className="px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
            >
              Back to projects
            </button>
            <button
              onClick={() => setSaved(false)}
              className="px-4 py-2 bg-[var(--foreground)] text-[var(--background)] text-sm hover:opacity-90 transition-opacity"
            >
              Add another
            </button>
          </div>
        </div>
      ) : (
        <ProjectForm
          onSubmit={(data) => {
            addProject({
              ...data,
              image:
                data.image ||
                "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            });
            setSaved(true);
          }}
          submitLabel="Add Project"
        />
      )}
    </div>
  );
}
