import Link from "next/link";

/**
 * Fernandez Consulting lockup.
 *
 * A solid block carrying a reversed "F" — the letter built as a program spine
 * crossed by two stage-gate arms — set against the full name in the display
 * face. The block gives the mark presence at small sizes and inverts cleanly
 * onto the navy band. Sizes step up at the `sm` breakpoint so the lockup never
 * crowds the header action on narrow screens.
 */

function Glyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 17 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={`w-auto ${className}`}
    >
      {/* spine */}
      <rect x="0" y="0" width="3.5" height="24" />
      {/* upper gate */}
      <rect x="0" y="0" width="16.2" height="3.5" />
      {/* lower gate */}
      <rect x="0" y="10.25" width="11" height="3.5" />
    </svg>
  );
}

/** The block mark on its own — for tight contexts and as an app icon. */
export function LogoBlock({ tone = "auto" }: { tone?: "auto" | "onBand" }) {
  const skin =
    tone === "onBand"
      ? "bg-[var(--band-ink)] text-[var(--band)]"
      : "bg-[var(--ink)] text-[var(--ground)]";

  return (
    <span
      className={`inline-flex h-[29px] w-[29px] shrink-0 items-center justify-center sm:h-[34px] sm:w-[34px] ${skin}`}
    >
      <Glyph className="h-[13.5px] sm:h-[16px]" />
    </span>
  );
}

export default function Logo({
  href = "/" as string | null,
  tone = "auto",
  className = "",
}: {
  href?: string | null;
  tone?: "auto" | "onBand";
  className?: string;
}) {
  const lockup = (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoBlock tone={tone} />
      <span className="font-display text-[16.5px] leading-none tracking-[-0.015em] whitespace-nowrap sm:text-[19.5px]">
        Fernandez Consulting
      </span>
    </span>
  );

  if (!href) return lockup;

  return (
    <Link
      href={href}
      className="shrink-0 transition-opacity hover:opacity-80"
      aria-label="Fernandez Consulting — home"
    >
      {lockup}
    </Link>
  );
}
