import type { Metadata } from "next";
import { getAllProjects } from "@/lib/building";
import BuildingGrid from "@/components/BuildingGrid";

export const metadata: Metadata = {
  title: "Building",
  description:
    "Things I'm building: productivity tools, investing tools, and running utilities.",
};

export default function BuildingPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Building
        </h1>
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
          Projects I&apos;m building across productivity, investing, and running.
          Some are live. Some are in progress. Some are still ideas.
        </p>
      </div>

      <BuildingGrid projects={projects} />
    </div>
  );
}
