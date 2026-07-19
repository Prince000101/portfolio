import { BlogPost, Project } from "./types";
import { blogPosts as defaultPosts, projects as defaultProjects } from "./data";

const POSTS_KEY = "admin_blog_posts";
const PROJECTS_KEY = "admin_projects";

function getFromStorage<T>(key: string, defaults: T[]): T[] {
  if (typeof window === "undefined") return defaults;
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore
  }
  return defaults;
}

function saveToStorage<T>(key: string, data: T[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
}

// Posts
export function getPosts(): BlogPost[] {
  return getFromStorage(POSTS_KEY, defaultPosts);
}

export function savePosts(posts: BlogPost[]): void {
  saveToStorage(POSTS_KEY, posts);
}

export function getPost(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function addPost(post: BlogPost): void {
  const posts = getPosts();
  posts.unshift(post);
  savePosts(posts);
}

export function updatePost(slug: string, updates: Partial<BlogPost>): void {
  const posts = getPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updates };
    savePosts(posts);
  }
}

export function deletePost(slug: string): void {
  const posts = getPosts().filter((p) => p.slug !== slug);
  savePosts(posts);
}

// Projects
export function getProjects(): Project[] {
  return getFromStorage(PROJECTS_KEY, defaultProjects);
}

export function saveProjects(projects: Project[]): void {
  saveToStorage(PROJECTS_KEY, projects);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function addProject(project: Project): void {
  const projects = getProjects();
  projects.unshift(project);
  saveProjects(projects);
}

export function updateProject(
  slug: string,
  updates: Partial<Project>
): void {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...updates };
    saveProjects(projects);
  }
}

export function deleteProject(slug: string): void {
  const projects = getProjects().filter((p) => p.slug !== slug);
  saveProjects(projects);
}
