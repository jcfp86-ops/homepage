import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { arcStages, mandates, capabilities, boundaries } from "@/content/site";
import {
  Section,
  Band,
  PageHero,
  SectionHead,
  DashItem,
  ClosingCTA,
} from "@/components/ui";
import GlobalReach from "@/components/GlobalReach";

export const metadata: Metadata = pageMetadata({
  title: "Program Direction",
  description:
    "SaMD Program Direction for Class II/III software: strategic scoping and analysis, program governance, execution and delivery, and multi-market success.",
  path: "/program-direction",
});

export default function ProgramDirectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Program Direction"
        title="One mandate, from scoping to market"
        lede="We direct Class II/III Software as a Medical Device programs across the full arc — establishing the strategy, building the governance, executing the plan, and carrying the program into every market it was built for."
      />

      {/* The four stages */}
      <Section className="section-y">
        <SectionHead
          eyebrow="The arc"
          title="Strategic scoping, governance, execution, multi-market"
          lede="Each stage has defined outputs and a defined close. The scoping stage is fixed-fee and standalone: no mandate is committed to before the position is established and the exposure quantified."
        />

        <ol className="mt-14 space-y-px border border-[var(--rule)] bg-[var(--rule)]">
          {arcStages.map((s) => (
            <li key={s.stage} className="bg-[var(--ground)] p-7 sm:p-11">
              <div className="grid gap-8 lg:grid-cols-[20rem_1fr] lg:gap-12">
                <div>
                  <span className="font-display text-sm text-[var(--accent)]">
                    {s.n}
                  </span>
                  <h3 className="t-display-md mt-4">{s.stage}</h3>
                  <p className="t-body mt-4">{s.lede}</p>
                </div>

                <div>
                  <p className="t-body max-w-2xl text-[var(--ink-soft)]">
                    {s.body}
                  </p>
                  <p className="t-eyebrow mt-8 text-[var(--accent)]">
                    Defined outputs
                  </p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {s.outputs.map((o) => (
                      <DashItem key={o} className="text-[var(--ink-soft)]">
                        {o}
                      </DashItem>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Engagement models */}
      <Band>
        <Section className="section-y">
          <SectionHead
            onBand
            eyebrow="Engagement models"
            title="Interim, fractional and embedded direction"
            lede="Selection follows the situation rather than a service menu. Where more than one applies, the scoping stage resolves which mandate is the correct entry point."
          />

          <div className="mt-14 grid gap-px border border-[var(--band-rule)] bg-[var(--band-rule)] sm:grid-cols-2">
            {mandates.map((m) => (
              <div key={m.name} className="bg-[var(--band)] p-7 sm:p-8">
                <h3 className="t-heading-lg">{m.name}</h3>
                <p className="t-meta mt-3 text-[var(--band-accent)]">
                  {m.commitment} · {m.term}
                </p>
                <p className="t-body mt-5 text-[var(--band-soft)]">{m.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </Band>

      <GlobalReach />

      {/* Capability */}
      <Section className="section-y-b">
        <SectionHead
          eyebrow="Capability"
          title="Directed across every function the program touches"
        />
        <div className="mt-14 grid gap-x-14 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="border-t border-[var(--rule)] pt-5">
              <h3 className="t-heading">{c.title}</h3>
              <p className="t-body-sm mt-3 text-[var(--ink-soft)]">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Boundaries */}
      <Section className="section-y-b">
        <SectionHead
          eyebrow="Governance and boundaries"
          title="How external direction remains audit-defensible"
          lede="External leadership inside a regulated program creates obligations on both sides. These are established before a mandate begins, not discovered during an inspection."
        />
        <div className="mt-14 grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2">
          {boundaries.map((b) => (
            <div key={b.title} className="bg-[var(--ground)] p-6 sm:p-7">
              <h3 className="t-heading-sm">{b.title}</h3>
              <p className="t-body-sm mt-3 text-[var(--ink-soft)]">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCTA />
    </>
  );
}
