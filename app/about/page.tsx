import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Maurice Kelter: runner, builder, angel investor.",
};

const timeline = [
  {
    year: "2026",
    title: "Angel Investing",
    description:
      "Joined StartMate First Believers, a structured cohort for first-time angel investors. Focus: SaaS and sports.",
  },
  {
    year: "2026",
    title: "AgentHire.ai",
    description:
      "Started building a discovery and review platform for AI agents. First users: the Hourglass AI cohort.",
  },
  {
    year: "2023",
    title: "HubSpot: Sales Strategy",
    description:
      "Sales Strategy lead covering Australia/NZ, upmarket, and global small business. Working directly with MD and C-suite on planning, forecasting, and growth.",
  },
  {
    year: "2022",
    title: "Moved to Sydney",
    description:
      "Relocated from Ireland to Sydney, Australia. Swapped Atlantic drizzle for Pacific sunshine. No complaints.",
  },
];

const links = [
  {
    label: "Substack",
    href: "https://mauricekelter.substack.com",
    description: "Essays on running, building, and investing",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mauricekelter",
    description: "Professional background",
  },
  {
    label: "Strava",
    href: "https://www.strava.com/athletes/mkelter",
    description: "Training log: every km tracked",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        {/* Bio */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
            About
          </h1>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I&apos;m Maurice, Irish and living in Sydney. By day I work in Sales
              Strategy at HubSpot, where I cover Australia/NZ, upmarket, and
              global small business. I spend a lot of time on targets,
              forecasting, and working with leadership on how we grow.
            </p>
            <p>
              Outside of that, I run. A lot. I&apos;m training for a sub-2:30
              marathon at the Gold Coast in July 2026, putting in 100km+ per
              week. Running is the constant. It&apos;s where the thinking
              happens.
            </p>
            <p>
              I&apos;m also building. AgentHire.ai is my current project, a
              discovery platform for AI agents. The space is exploding and no
              one has built a good signal layer yet. That&apos;s the gap
              I&apos;m going after.
            </p>
            <p>
              And I&apos;m investing, right at the start of that journey.
              StartMate First Believers is the program. SaaS and sports are the
              focus areas. Learning fast.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-8">
            Timeline
          </h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-sm text-gray-400 w-10 flex-shrink-0 pt-0.5">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-8">
            Find me online
          </h2>
          <div className="space-y-4">
            {links.map(({ label, href, description }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                    {label}
                  </span>
                  <p className="text-sm text-gray-400 mt-0.5">{description}</p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transform group-hover:translate-x-0.5 transition-all duration-200"
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
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
