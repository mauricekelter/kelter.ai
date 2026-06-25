import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Running",
  description:
    "Maurice Kelter's running — training logs, race goals, and the marathon calculator tool.",
};

const stats = [
  { label: "Weekly mileage", value: "100km+" },
  { label: "Current goal", value: "Sub 2:30" },
  { label: "Race", value: "Gold Coast" },
  { label: "Date", value: "5 Jul 2026" },
];

const recentRaces = [
  {
    race: "Launceston Half Marathon",
    date: "31 May 2026",
    time: "1:10:46",
    note: "PB",
  },
];

export default function RunningPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
          Running
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          100km a week, every week.
        </h1>
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
          Running is my non-negotiable. It&apos;s where I process, plan, and
          reset. The volume is high — not because I&apos;m chasing fitness, but
          because it&apos;s become the baseline I need to function well.
        </p>
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed mt-4">
          Current mission: sub-2:30 at the Gold Coast Marathon on 5 July 2026.
          That&apos;s a 3:33/km average over 42.2km. Everything between now and
          then is working toward that number.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="p-5 border border-gray-100 rounded-xl"
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                {label}
              </p>
              <p className="text-xl font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent races */}
      <section className="mb-20">
        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-8">
          Recent Races
        </h2>
        <div className="divide-y divide-gray-100">
          {recentRaces.map(({ race, date, time, note }) => (
            <div
              key={race}
              className="flex items-center justify-between py-5"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">{race}</p>
                <p className="text-xs text-gray-400 mt-0.5">{date}</p>
              </div>
              <div className="flex items-center gap-3">
                {note && (
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {note}
                  </span>
                )}
                <span className="text-sm font-semibold text-gray-900 tabular-nums">
                  {time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strava CTA */}
      <section className="pt-10 border-t border-gray-100">
        <Link
          href="https://www.strava.com/athletes/mkelter"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all duration-200"
        >
          <div>
            <p className="text-sm font-semibold text-gray-900">Follow on Strava</p>
            <p className="text-sm text-gray-400 mt-0.5">Every run logged — training, races, and everything in between.</p>
          </div>
          <svg
            className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transform group-hover:translate-x-0.5 transition-all duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
