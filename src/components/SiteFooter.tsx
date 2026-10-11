import Link from "next/link";
import { site, coreMarkets, extendedMarkets, standards } from "@/content/site";
import Logo from "@/components/Logo";

const nav = [
  { href: "/program-direction", label: "Program Direction" },
  { href: "/approach", label: "Approach" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--ground-alt)]">
      <div className="mx-auto max-w-[76rem] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1.3fr_1fr]">
          <div>
            <Logo href={null} />
            <p className="t-body-sm mt-4 max-w-xs text-[var(--ink-soft)]">
              {site.discipline} for Class II/III Software as a Medical Device.
            </p>
            <p className="t-body-sm mt-6">
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--ink-soft)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <p className="t-eyebrow text-[var(--ink-soft)]">Core markets</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {coreMarkets.map((m) => (
                <li key={m.region}>
                  <span className="t-body-sm block">{m.region}</span>
                  <span className="t-caption text-[var(--ink-soft)]">
                    {m.authority}
                  </span>
                </li>
              ))}
            </ul>
            <p className="t-caption mt-6 text-[var(--ink-soft)]">
              Extended: {extendedMarkets.map((m) => m.region).join(" · ")}
            </p>
          </div>

          <div>
            <p className="t-eyebrow text-[var(--ink-soft)]">Navigate</p>
            <nav aria-label="Footer" className="mt-5 flex flex-col gap-3">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="t-body-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-[var(--rule)] pt-8">
          {standards.map((s) => (
            <li
              key={s}
              className="t-eyebrow tracking-[0.16em] text-[var(--ink-soft)]"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="t-caption max-w-3xl text-[var(--ink-soft)]">
            {site.name} provides program direction and regulatory delivery
            consulting for medical device software. Nothing on this site
            constitutes legal or regulatory advice, or a guarantee of clearance,
            certification or a notified body decision.
          </p>
          <Link
            href="/privacy"
            className="t-caption shrink-0 text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
