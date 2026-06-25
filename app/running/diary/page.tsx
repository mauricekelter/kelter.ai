import type { Metadata } from "next";
import Link from "next/link";
import { getAllDiaryEntries } from "@/lib/content";
import DiaryAccordion from "@/components/DiaryAccordion";

export const metadata: Metadata = {
  title: "Training Diary",
  description: "Maurice Kelter's weekly training diary — powered by Strava.",
};

export default function DiaryPage() {
  const entries = getAllDiaryEntries();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-2">
        <Link
          href="/running"
          className="text-xs text-gray-400 hover:text-gray-900 transition-colors duration-200 uppercase tracking-wider"
        >
          ← Running
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
          Training Diary
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          Weekly log generated from Strava. Every run, every week.
        </p>
      </div>

      {entries.length === 0 ? (
        <p className="text-sm text-gray-400">No entries yet.</p>
      ) : (
        <DiaryAccordion entries={entries} />
      )}
    </div>
  );
}
