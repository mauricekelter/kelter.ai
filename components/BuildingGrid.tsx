"use client";

import { useState } from "react";
import { Project } from "@/lib/building";
import BuildingCard from "./BuildingCard";

const ALL_TAGS = ["All", "Productivity", "AI / Agents", "Investing", "Running", "For Fun"];

export default function BuildingGrid({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase())
        );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTag === tag
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-400 py-12 text-center">
          Nothing here yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <BuildingCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
