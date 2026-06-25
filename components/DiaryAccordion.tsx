"use client";

import { useState } from "react";
import { DiaryEntry } from "@/lib/content";

function formatWeek(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  const startFmt = s.toLocaleDateString("en-AU", { day: "numeric", month: "long" });
  const endFmt = e.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
  return `${startFmt} – ${endFmt}`;
}

function WeekEntry({ entry, defaultOpen }: { entry: DiaryEntry; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-100">
      {/* Header row — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-medium text-gray-900 group-hover:text-gray-500 transition-colors duration-150">
          {formatWeek(entry.week_start, entry.week_end)}
        </span>
        <div className="flex items-center gap-6 ml-4">
          <div className="hidden sm:flex items-center gap-6">
            <span className="text-sm tabular-nums text-gray-900 font-semibold">{entry.total_km}<span className="text-xs text-gray-400 font-normal ml-0.5">km</span></span>
            <span className="text-sm tabular-nums text-gray-400">{entry.sessions}<span className="text-xs ml-0.5">d</span></span>
            <span className="text-sm tabular-nums text-gray-400">{entry.elevation}<span className="text-xs ml-0.5">m</span></span>
          </div>
          <svg
            className={`w-4 h-4 text-gray-300 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Mobile stats — show below header on small screens */}
      {open && (
        <div className="flex sm:hidden gap-6 pb-4 text-sm">
          <span className="tabular-nums text-gray-900 font-semibold">{entry.total_km}<span className="text-xs text-gray-400 font-normal ml-0.5">km</span></span>
          <span className="tabular-nums text-gray-400">{entry.sessions}<span className="text-xs ml-0.5">d</span></span>
          <span className="tabular-nums text-gray-400">{entry.elevation}<span className="text-xs ml-0.5">m</span></span>
        </div>
      )}

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pb-8">
          {/* Runs table */}
          {entry.runs.length > 0 && (
            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left text-xs text-gray-400 uppercase tracking-wider pb-2 pr-8 font-medium w-10">Day</th>
                    <th className="text-left text-xs text-gray-400 uppercase tracking-wider pb-2 pr-8 font-medium">Session</th>
                    <th className="text-right text-xs text-gray-400 uppercase tracking-wider pb-2 pr-8 font-medium">km</th>
                    <th className="text-right text-xs text-gray-400 uppercase tracking-wider pb-2 font-medium">Pace</th>
                  </tr>
                </thead>
                <tbody>
                  {entry.runs.map((run, i) => (
                    <tr key={i} className="border-t border-gray-50">
                      <td className="py-2 pr-8 text-xs text-gray-400 font-medium">{run.day}</td>
                      <td className="py-2 pr-8 text-gray-700">{run.label}</td>
                      <td className="py-2 pr-8 text-right text-gray-900 tabular-nums font-medium">{run.km}</td>
                      <td className="py-2 text-right tabular-nums text-gray-400">
                        {run.pace ?? "—"}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200">
                    <td className="pt-3 pr-8 text-xs text-gray-400 uppercase tracking-wider font-medium">Total</td>
                    <td className="pt-3 pr-8" />
                    <td className="pt-3 pr-8 text-right font-bold text-gray-900 tabular-nums">{entry.total_km}</td>
                    <td className="pt-3" />
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Narrative */}
          {entry.body && (
            <p className="text-sm text-gray-500 leading-relaxed max-w-xl border-t border-gray-50 pt-5">
              {entry.body}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DiaryAccordion({ entries }: { entries: DiaryEntry[] }) {
  return (
    <div>
      {entries.map((entry, i) => (
        <WeekEntry key={entry.slug} entry={entry} defaultOpen={i === 0} />
      ))}
      <div className="border-t border-gray-100" />
    </div>
  );
}
