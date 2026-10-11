import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { site, credibility, standards, coreMarkets } from "@/content/site";
import {
  Section,
  Band,
  PageHero,
  SectionHead,
  ClosingCTA,
} from "@/components/ui";
import GlobalReach from "@/components/GlobalReach";
import Positioning from "@/components/Positioning";

export const metadata: Metadata = pageMetadata({
  title: "Leadership",
  description: `${site.principal}, Principal — Global SaMD Program Direction for Class II/III medical device software.`,
  path: "/leadership",
});

const dual = [
  {
    label: "Strategic depth",
    body: "Programs are scoped and structured with the analytical discipline of a top-tier strategy engagement: the position established before the plan, the exposure quantified, and decisions framed for the executive who must take them.",
  },
  {
    label: "Delivery capability",
    body: "That structure is then executed. Requirements, design controls, verification and validation, technical documentation and submissions are driven to completion inside the client's quality system.",
  },
  {
    label: "Global program leadership",
    body: "Direction of programs spanning functions, sites and jurisdictions, where regulatory sequencing across markets and cross-border dependencies determine whether a committed date holds.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={site.principal}
        lede="Principal — Global SaMD Program Direction. Class II/III software programs directed from strategic scoping through multi-market launch and post-market operations."
      />

      {/* Positioning */}
      <Section className="section-y">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="max-w-2xl space-y-6">
            <p className="t-lede">
              Fernandez Consulting is directed by its Principal. Mandates are
              led personally rather than delegated to an analyst bench, and the
              person who scopes the program is the person accountable for
              delivering it.
            </p>
            <p className="t-body text-[var(--ink-soft)]">
              The practice exists because Class II/III software programs rarely
              fail for want of analysis. They fail at the seams — between
              engineering and regulatory, between sites and jurisdictions,
              between a strategy that was written and a plan that was never
              driven. Direction across those seams is what is offered here.
            </p>
            <p className="t-body text-[var(--ink-soft)]">
              Programs directed have placed platforms into service across
              approximately 4,000 hospitals and clinics worldwide, bringing
              product, engineering, regulatory, quality, cybersecurity and
              operational functions onto a single traceable path from
              requirements and design controls through verification, validation,
              release and lifecycle maintenance.
            </p>

            <div className="border-t border-[var(--rule-strong)] pt-8">
              <Positioning />
            </div>
          </div>

          <div>
            <p className="t-eyebrow text-[var(--accent)]">
              Core markets directed
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {coreMarkets.map((m) => (
                <li
                  key={m.region}
                  className="border-t border-[var(--rule)] pt-3"
                >
                  <p className="t-body-sm font-medium">{m.region}</p>
                  <p className="t-caption mt-1 text-[var(--ink-soft)]">
                    {m.authority}
                  </p>
                </li>
              ))}
            </ul>

            <p className="t-eyebrow mt-10 text-[var(--accent)]">Standards</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {standards.map((s) => (
                <li key={s} className="t-caption text-[var(--ink-soft)]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Dual strength */}
      <Band>
        <Section className="section-y">
          <SectionHead
            onBand
            eyebrow="The dual strength"
            title="Consulting discipline and delivery accountability in one seat"
            lede="These are ordinarily bought separately — a firm to define the strategy, a contractor to execute it, and a gap between them where programs are lost."
          />
          <div className="mt-14 grid gap-px border border-[var(--band-rule)] bg-[var(--band-rule)] lg:grid-cols-3">
            {dual.map((d) => (
              <div key={d.label} className="bg-[var(--band)] p-7 sm:p-8">
                <h3 className="t-heading-lg">{d.label}</h3>
                <p className="t-body mt-4 text-[var(--band-soft)]">{d.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </Band>

      <GlobalReach />

      {/* Credibility */}
      <Section className="section-y-b">
        <ul className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-3">
          {credibility.map((c) => (
            <li key={c.figure} className="bg-[var(--ground)] p-7 sm:p-8">
              <p className="t-figure text-[var(--accent)]">{c.figure}</p>
              <p className="t-body-sm mt-4 text-[var(--ink-soft)]">{c.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCTA />
    </>
  );
}
