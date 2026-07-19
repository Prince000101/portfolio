"use client";

import Link from "next/link";
import { Plus, FileText, FolderOpen, ExternalLink, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { getPosts, getProjects } from "@/lib/storage";

export default function SecretDashboardPage() {
  const [postCount, setPostCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPostCount(getPosts().length);
    setProjectCount(getProjects().length);
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };

  if (!mounted) {
    return (
      <div>
        <h1 className="text-3xl font-serif mb-2">Dashboard</h1>
        <p className="text-[var(--muted)] text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-serif mb-2">Dashboard</h1>
          <p className="text-[var(--muted)] text-sm">Welcome back, Prince.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] border border-[var(--border-color)] text-xs text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted)] transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Site
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] border border-[var(--border-color)] text-xs text-[var(--muted)] hover:text-red-500 hover:border-red-500/50 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <Link
          href="./posts"
          className="group border border-[var(--border-color)] p-6 hover:border-[var(--muted)]/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-4xl font-serif mb-1">{postCount}</p>
              <p className="text-[var(--muted)] text-sm">Blog Posts</p>
            </div>
            <FileText className="w-8 h-8 text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
          </div>
          <p className="text-xs text-[var(--muted)] mt-4">
            Manage posts &rarr;
          </p>
        </Link>

        <Link
          href="./projects"
          className="group border border-[var(--border-color)] p-6 hover:border-[var(--muted)]/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-4xl font-serif mb-1">{projectCount}</p>
              <p className="text-[var(--muted)] text-sm">Projects</p>
            </div>
            <FolderOpen className="w-8 h-8 text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors" />
          </div>
          <p className="text-xs text-[var(--muted)] mt-4">
            Manage projects &rarr;
          </p>
        </Link>
      </div>

      <div className="border-t border-[var(--border-color)] pt-8">
        <h2 className="text-lg font-serif mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link
            href="./posts/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Link>
          <Link
            href="./projects/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
          >
            <Plus className="w-4 h-4" />
            New Project
          </Link>
        </div>
      </div>
    </div>
  );
}
