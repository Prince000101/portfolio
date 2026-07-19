"use client";

import { useRouter } from "next/navigation";
import ProjectForm from "@/components/admin/project-form";
import { getProject, updateProject } from "@/lib/storage";
import { useState, useEffect, use } from "react";

export default function SecretEditProjectPage({
  params,
}: {
  params: Promise<{ secret: string; id: string }>;
}) {
  const { secret, id } = use(params);
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [project, setProject] = useState<ReturnType<typeof getProject>>(
    undefined
  );
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const found = getProject(id);
    if (found) {
      setProject(found);
    } else {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Project Not Found</h1>
        <p className="text-[var(--muted)] text-sm mb-6">
          No project found with slug &quot;{id}&quot;.
        </p>
        <button
          onClick={() => router.push(`/${secret}/projects`)}
          className="px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
        >
          Back to projects
        </button>
      </div>
    );
  }

  if (!project) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Edit Project</h1>
        <p className="text-[var(--muted)] text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-serif mb-2">Edit Project</h1>
      <p className="text-[var(--muted)] text-sm mb-10">
        Editing &quot;{project.title}&quot;
      </p>

      {saved ? (
        <div className="border border-[var(--border-color)] p-6 max-w-3xl">
          <p className="text-sm mb-4 text-green-500">
            Project updated successfully!
          </p>
          <button
            onClick={() => router.push(`/${secret}/projects`)}
            className="px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
          >
            Back to projects
          </button>
        </div>
      ) : (
        <ProjectForm
          initialData={{
            title: project.title,
            slug: project.slug,
            description: project.description,
            longDescription: project.longDescription,
            image: project.image,
            github: project.github,
            demo: project.demo || "",
            tags: project.tags.join(", "),
            featured: project.featured,
          }}
          onSubmit={(data) => {
            updateProject(id, data);
            setSaved(true);
          }}
          submitLabel="Update Project"
        />
      )}
    </div>
  );
}
