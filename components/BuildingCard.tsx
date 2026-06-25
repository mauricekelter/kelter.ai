import Link from "next/link";
import { Project, ProjectStatus } from "@/lib/building";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-emerald-50 text-emerald-700",
  "In Progress": "bg-amber-50 text-amber-700",
  Idea: "bg-gray-100 text-gray-500",
};

function CardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
        <div className="flex gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug group-hover:text-gray-600 transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed flex-1">
        {project.description}
      </p>

      {project.url && (
        <div className="mt-4 flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
          <span>Open project</span>
          <svg
            className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </>
  );
}

const cardClass =
  "group flex flex-col p-6 border border-gray-100 rounded-xl transition-all duration-200";

export default function BuildingCard({ project }: { project: Project }) {
  if (project.url) {
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClass} hover:border-gray-200 hover:shadow-sm`}
      >
        <CardContent project={project} />
      </Link>
    );
  }

  return (
    <div className={cardClass}>
      <CardContent project={project} />
    </div>
  );
}
