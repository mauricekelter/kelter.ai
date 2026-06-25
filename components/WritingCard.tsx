import Link from "next/link";
import { Article } from "@/lib/content";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getPublisher(url: string) {
  if (url.includes("medium.com")) return "Read on Medium";
  if (url.includes("substack.com")) return "Read on Substack";
  return "Read article";
}

function CardBody({ article, isLive }: { article: Article; isLive: boolean }) {
  return (
    <div
      className={`group flex flex-col h-full p-6 border rounded-xl transition-all duration-200 ${
        isLive
          ? "border-gray-100 hover:border-gray-200 hover:shadow-sm"
          : "border-gray-100 bg-gray-50/50"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <time className="text-xs text-gray-400 uppercase tracking-wider">
          {formatDate(article.date)}
        </time>
        <div className="flex items-center gap-1.5">
          {!isLive && (
            <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">
              Coming soon
            </span>
          )}
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3
        className={`text-base font-semibold mb-2 leading-snug transition-colors duration-200 ${
          isLive
            ? "text-gray-900 group-hover:text-gray-600"
            : "text-gray-400"
        }`}
      >
        {article.title}
      </h3>

      {isLive && (
        <>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-600 transition-colors duration-200">
            <span>{getPublisher(article.substack_url)}</span>
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
        </>
      )}
    </div>
  );
}

export default function WritingCard({ article }: { article: Article }) {
  const isLive = !!article.substack_url;

  if (isLive) {
    return (
      <Link
        href={article.substack_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col"
      >
        <CardBody article={article} isLive />
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <CardBody article={article} isLive={false} />
    </div>
  );
}
