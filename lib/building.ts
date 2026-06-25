import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "building");

export type ProjectStatus = "Live" | "In Progress" | "Idea";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  url: string;
  date: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir);

  return files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? "",
        description: data.description ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        status: (data.status as ProjectStatus) ?? "Idea",
        url: data.url ?? "",
        date: data.date ?? "",
      };
    })
    .sort((a, b) => {
      const order: Record<ProjectStatus, number> = { Live: 0, "In Progress": 1, Idea: 2 };
      return order[a.status] - order[b.status];
    });
}
