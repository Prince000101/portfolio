"use client";

import { useRouter } from "next/navigation";
import PostForm from "@/components/admin/post-form";
import { getPost, updatePost } from "@/lib/storage";
import { useState, useEffect, use } from "react";

export default function SecretEditPostPage({
  params,
}: {
  params: Promise<{ secret: string; id: string }>;
}) {
  const { secret, id } = use(params);
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [post, setPost] = useState<ReturnType<typeof getPost>>(undefined);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const found = getPost(id);
    if (found) {
      setPost(found);
    } else {
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Post Not Found</h1>
        <p className="text-[var(--muted)] text-sm mb-6">
          No post found with slug &quot;{id}&quot;.
        </p>
        <button
          onClick={() => router.push(`/${secret}/posts`)}
          className="px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
        >
          Back to posts
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Edit Post</h1>
        <p className="text-[var(--muted)] text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-serif mb-2">Edit Post</h1>
      <p className="text-[var(--muted)] text-sm mb-10">
        Editing &quot;{post.title}&quot;
      </p>

      {saved ? (
        <div className="border border-[var(--border-color)] p-6 max-w-3xl">
          <p className="text-sm mb-4 text-green-500">
            Post updated successfully!
          </p>
          <button
            onClick={() => router.push(`/${secret}/posts`)}
            className="px-4 py-2 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
          >
            Back to posts
          </button>
        </div>
      ) : (
        <PostForm
          initialData={{
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            tags: post.tags.join(", "),
            readTime: post.readTime,
          }}
          onSubmit={(data) => {
            updatePost(id, data);
            setSaved(true);
          }}
          submitLabel="Update Post"
        />
      )}
    </div>
  );
}
