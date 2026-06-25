import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ── Writing ──────────────────────────────────────────────

const writingDir = path.join(process.cwd(), "content", "writing");

export interface Article {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  substack_url: string;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(writingDir)) return [];

  return fs
    .readdirSync(writingDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(writingDir, file), "utf-8"));
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        excerpt: data.excerpt ?? "",
        substack_url: data.substack_url ?? "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestArticles(count = 3): Article[] {
  return getAllArticles()
    .filter((a) => !!a.substack_url)
    .slice(0, count);
}

// ── Building ─────────────────────────────────────────────

const buildingDir = path.join(process.cwd(), "content", "building");

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "In Progress" | "Idea";
  url: string;
  date: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(buildingDir)) return [];

  return fs
    .readdirSync(buildingDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(buildingDir, file), "utf-8"));
      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        status: data.status ?? "Idea",
        url: data.url ?? "",
        date: data.date ?? "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
