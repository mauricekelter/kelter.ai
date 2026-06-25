import Link from "next/link";
import { getLatestArticles } from "@/lib/content";
import WritingCard from "@/components/WritingCard";

const areas = [
  {
    label: "Running",
    href: "/running",
    stat: "100km+ per week",
    description:
      "Training toward sub-2:30 at Gold Coast in July 2026. Running is where I do my best thinking.",
  },
  {
    label: "Building",
    href: "/building",
    stat: "Building in public",
    description:
      "Products built for problems I actually have. Running, investing, getting things done. If I needed it, I built it.",
  },
  {
    label: "Investing",
    href: "/about",
    stat: "Angel investor",
    description:
      "Early in the journey. StartMate First Believers. Looking for founders with one thing that's undeniably exceptional, and backing them early.",
  },
  {
    label: "Go-to-Market",
    href: "/writing",
    stat: "Over a decade in strategy",
    description:
      "A student of the business world. Always been fascinated by how companies are built, structured, and grown. Over a decade in strategy, now focused on sales and go-to-market at HubSpot.",
  },
];

export default async function HomePage() {
  const articles = getLatestArticles(3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-20">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
          Sydney, Australia
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Maurice Kelter
        </h1>
        <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
          Spent six years as a management consultant across industries, then
          crossed over to build go-to-market strategy at HubSpot. Running,
          building products, and backing early-stage founders take up the rest.
          The common thread: figuring out how things grow. Companies, athletes,
          ideas.
        </p>
      </section>

      {/* Area cards */}
      <section className="pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {areas.map(({ label, href, stat, description }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all duration-200"
            >
              <span className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                {label}
              </span>
              <span className="text-lg font-semibold text-gray-900 mb-2">
                {stat}
              </span>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {description}
              </p>
              <span className="mt-5 text-xs text-gray-300 group-hover:text-gray-500 transition-colors duration-200 flex items-center gap-1">
                Learn more
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
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest writing */}
      <section className="pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">
            Latest Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            All posts &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <WritingCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
