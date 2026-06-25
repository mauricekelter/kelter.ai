import type { Metadata } from "next";
import { getAllArticles } from "@/lib/content";
import WritingGrid from "@/components/WritingGrid";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing on running, building, and investing, by Maurice Kelter.",
};

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Writing
        </h1>
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
          Thoughts on running, building products, and angel investing. Published
          on Substack.
        </p>
      </div>

      <WritingGrid articles={articles} />
    </div>
  );
}
