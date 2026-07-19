"use client";

import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getPosts, deletePost } from "@/lib/storage";
import { BlogPost } from "@/lib/types";
import { use } from "react";

export default function SecretPostsPage({
  params,
}: {
  params: Promise<{ secret: string }>;
}) {
  const { secret } = use(params);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPosts(getPosts());
    setMounted(true);
  }, []);

  const handleDelete = (slug: string) => {
    if (confirm("Delete this post?")) {
      deletePost(slug);
      setPosts(getPosts());
    }
  };

  if (!mounted) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Blog Posts</h1>
        <p className="text-[var(--muted)] text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif mb-2">Blog Posts</h1>
          <p className="text-[var(--muted)] text-sm">
            {posts.length} posts total
          </p>
        </div>
        <Link
          href={`/${secret}/posts/new`}
          className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[var(--foreground)] text-[var(--background)] text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="border border-[var(--border-color)] p-12 text-center">
          <p className="text-[var(--muted)] text-sm mb-4">No posts yet.</p>
          <Link
            href={`/${secret}/posts/new`}
            className="text-sm text-[var(--foreground)] hover:text-[var(--muted)] transition-colors"
          >
            Create your first post &rarr;
          </Link>
        </div>
      ) : (
        <div className="space-y-0">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex items-center justify-between py-4 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg truncate">{post.title}</h3>
                <div className="flex items-center gap-4 text-xs text-[var(--muted)] mt-1 flex-wrap">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
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
                  href={`/${secret}/posts/${post.slug}`}
                  className="p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => handleDelete(post.slug)}
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
