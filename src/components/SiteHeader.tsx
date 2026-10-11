import Link from "next/link";
import Logo from "@/components/Logo";

const nav = [
  { href: "/program-direction", label: "Program Direction" },
  { href: "/approach", label: "Approach" },
  { href: "/leadership", label: "Leadership" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--ground)]/92 backdrop-blur">
      <div className="mx-auto flex max-w-[76rem] items-center justify-between gap-6 px-6 py-4 sm:px-8 sm:py-5 lg:px-10">
        <Logo />

        <div className="flex items-center gap-6 sm:gap-8">
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="t-caption text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="t-action bg-[var(--ink)] px-4 py-2.5 text-[var(--ground)] transition-opacity hover:opacity-85"
          >
            Engage
          </Link>
        </div>
      </div>

      {/* Secondary nav — visible only where the primary row is hidden */}
      <nav
        aria-label="Primary, compact"
        className="flex items-center gap-6 overflow-x-auto border-t border-[var(--rule)] px-6 py-3 sm:px-8 md:hidden"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="t-caption whitespace-nowrap text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
