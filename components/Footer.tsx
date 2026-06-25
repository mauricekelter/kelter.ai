import Link from "next/link";

const socials = [
  {
    label: "Substack",
    href: "https://mauricekelter.substack.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mauricekelter",
  },
  {
    label: "Strava",
    href: "https://www.strava.com/athletes/mkelter",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Maurice Kelter
        </p>
        <div className="flex items-center gap-6">
          {socials.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
