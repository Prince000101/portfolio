"use client";

import { useRouter } from "next/navigation";
import PostForm from "@/components/admin/post-form";
import { addPost } from "@/lib/storage";
import { useState, use } from "react";

export default function SecretNewPostPage({
  params,
}: {
  params: Promise<{ secret: string }>;
}) {
  const { secret } = use(params);
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-serif mb-2">New Post</h1>
      <p className="text-[var(--muted)] text-sm mb-10">
        Create a new blog post.
      </p>

      {saved ? (
        <div className="border border-[var(--border-color)] p-6 max-w-3xl">
          <p className="text-sm mb-4 text-green-500">
            Post published successfully!
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/${secret}/posts`)}
              className="px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
            >
              Back to posts
            </button>
            <button
              onClick={() => setSaved(false)}
              className="px-4 py-2 bg-[var(--foreground)] text-[var(--background)] text-sm hover:opacity-90 transition-opacity"
            >
              Write another
            </button>
          </div>
        </div>
      ) : (
        <PostForm
          onSubmit={(data) => {
            addPost({
              ...data,
              date: new Date().toISOString().split("T")[0],
            });
            setSaved(true);
          }}
          submitLabel="Publish Post"
        />
      )}
    </div>
  );
}
