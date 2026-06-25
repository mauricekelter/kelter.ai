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

// ── Diary ────────────────────────────────────────────────

const diaryDir = path.join(process.cwd(), "content", "diary");

export interface DiaryRun {
  day: string;
  label: string;
  km: number;
  pace: string | null;
}

export interface DiaryEntry {
  slug: string;
  week_start: string;
  week_end: string;
  total_km: number;
  sessions: number;
  elevation: number;
  runs: DiaryRun[];
  body: string;
}

export function getAllDiaryEntries(): DiaryEntry[] {
  if (!fs.existsSync(diaryDir)) return [];

  return fs
    .readdirSync(diaryDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(diaryDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        week_start: data.week_start ?? "",
        week_end: data.week_end ?? "",
        total_km: data.total_km ?? 0,
        sessions: data.sessions ?? 0,
        elevation: data.elevation ?? 0,
        runs: Array.isArray(data.runs) ? data.runs : [],
        body: content.trim(),
      };
    })
    .sort((a, b) => new Date(b.week_start).getTime() - new Date(a.week_start).getTime());
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
