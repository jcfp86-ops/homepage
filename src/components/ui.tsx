import Link from "next/link";

/* ── Layout ─────────────────────────────────────────────── */

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mx-auto max-w-[76rem] px-6 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </section>
  );
}

/** Full-bleed navy band. */
export function Band({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-[var(--band)] text-[var(--band-ink)] ${className}`}>
      {children}
    </div>
  );
}

/* ── Type ───────────────────────────────────────────────── */

export function Eyebrow({
  children,
  onBand = false,
}: {
  children: React.ReactNode;
  onBand?: boolean;
}) {
  return (
    <p
      className={`t-eyebrow ${
        onBand ? "text-[var(--band-accent)]" : "text-[var(--accent)]"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  onBand = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  onBand?: boolean;
}) {
  return (
    <div
      className={`border-t pt-8 ${
        onBand ? "border-[var(--band-rule)]" : "border-[var(--rule-strong)]"
      }`}
    >
      <Eyebrow onBand={onBand}>{eyebrow}</Eyebrow>
      <h2 className="t-display-md mt-6 max-w-3xl text-balance">{title}</h2>
      {lede && (
        <p
          className={`t-lede mt-5 max-w-2xl ${
            onBand ? "text-[var(--band-soft)]" : "text-[var(--ink-soft)]"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <Band>
      <Section className="section-y">
        <Eyebrow onBand>{eyebrow}</Eyebrow>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <h1 className="t-display-lg text-balance">{title}</h1>
          <p className="t-lede max-w-xl text-[var(--band-soft)] lg:pb-1.5">
            {lede}
          </p>
        </div>
      </Section>
    </Band>
  );
}

/* ── Actions ────────────────────────────────────────────── */

export function CTA({
  href,
  children,
  tone = "solid",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "solid" | "outline" | "onBand" | "onBandSolid";
}) {
  const styles = {
    solid: "bg-[var(--ink)] text-[var(--ground)] hover:opacity-85",
    outline:
      "border border-[var(--rule-strong)] text-[var(--ink)] hover:border-[var(--ink)]",
    onBand:
      "border border-[var(--band-soft)]/40 text-[var(--band-ink)] hover:border-[var(--band-ink)]",
    onBandSolid: "bg-[var(--band-ink)] text-[var(--band)] hover:opacity-90",
  }[tone];

  return (
    <Link
      href={href}
      className={`t-action inline-flex items-center justify-center px-6 py-3.5 text-center transition ${styles}`}
    >
      {children}
    </Link>
  );
}

/* ── Repeated blocks ────────────────────────────────────── */

/** Bulleted item with an em-dash marker. Used site-wide. */
export function DashItem({
  children,
  onBand = false,
  className = "",
}: {
  children: React.ReactNode;
  onBand?: boolean;
  className?: string;
}) {
  return (
    <li className={`t-body-sm flex gap-3 ${className}`}>
      <span
        aria-hidden
        className={
          onBand ? "text-[var(--band-accent)]" : "text-[var(--accent)]"
        }
      >
        —
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Closing call to action. Appears at the foot of every page. */
export function ClosingCTA() {
  return (
    <Band>
      <Section className="section-y">
        <div className="border-t border-[var(--band-rule)] pt-8">
          <Eyebrow onBand>Engage</Eyebrow>
          <h2 className="t-display-md mt-6 max-w-3xl text-balance">
            High-stakes programs deserve a direct conversation.
          </h2>
          <p className="t-lede mt-6 max-w-xl text-[var(--band-soft)]">
            If you are accountable for a Class II or III software program under
            regulatory or delivery pressure, we should speak. If the mandate is
            not one we should hold, you will be told so directly.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTA href="/contact" tone="onBandSolid">
              Discuss Your SaMD Program
            </CTA>
            <CTA href="/program-direction" tone="onBand">
              Program Direction
            </CTA>
          </div>
        </div>
      </Section>
    </Band>
  );
}
