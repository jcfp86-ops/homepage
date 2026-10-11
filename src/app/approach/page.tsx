import type { Metadata } from "next";
import { howWeWork, distinction, engagedWhen } from "@/content/site";
import {
  Section,
  Band,
  PageHero,
  SectionHead,
  DashItem,
  ClosingCTA,
} from "@/components/ui";
import Positioning from "@/components/Positioning";

// DELIBERATE REGRESSION — do not merge.
//
// This drops /approach back to a plain metadata object, skipping the
// pageMetadata() helper. The page then emits no canonical URL and no og:url
// at all, so search engines are left to guess and a shared link carries no
// canonical reference.
//
// The point is what still passes: the build compiles, types check, lint is
// clean, the page renders correctly in a browser, and the Docker image
// serves it with a 200. Nothing a human would notice in review.
//
// Only `npm run check:metadata` fails. This branch exists to prove that
// guard is real rather than decorative.
export const metadata: Metadata = {
  title: "Approach",
  description:
    "Rigorous strategic discipline applied to SaMD delivery: written terms of reference, fixed-fee scoping, senior direction and a deliberate exit.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="Strategic rigor, carried through to delivery"
        lede="Scoped against a baseline, run on a governance cadence, closed against defined exit criteria — and directed through execution rather than concluding at the recommendation."
      />

      {/* Distinction */}
      <Section className="section-y">
        <SectionHead
          eyebrow="The distinction"
          title="Analysis is the entry point, not the deliverable"
          lede="Every mandate opens with rigorous scoping. The difference is what happens once the analysis is complete."
        />

        <div className="mt-14 grid gap-px border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-2">
          <div className="bg-[var(--ground)] p-7 sm:p-10">
            <p className="t-eyebrow text-[var(--ink-soft)]">
              Conventional advisory concludes with
            </p>
            <ul className="mt-6 space-y-4">
              {distinction.advisory.map((i) => (
                <li key={i} className="t-body-sm text-[var(--ink-soft)]">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--ground)] p-7 sm:p-10">
            <p className="t-eyebrow text-[var(--accent)]">
              The mandate concludes with
            </p>
            <ul className="mt-6 space-y-4">
              {distinction.ours.map((i) => (
                <DashItem key={i}>{i}</DashItem>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--rule-strong)] pt-10">
          <Positioning />
        </div>
      </Section>

      {/* How we work */}
      <Band>
        <Section className="section-y">
          <SectionHead
            onBand
            eyebrow="How we work"
            title="Six principles that govern every mandate"
          />
          <div className="mt-14 grid gap-px border border-[var(--band-rule)] bg-[var(--band-rule)] sm:grid-cols-2 lg:grid-cols-3">
            {howWeWork.map((h) => (
              <div key={h.label} className="bg-[var(--band)] p-7">
                <h3 className="t-heading">{h.label}</h3>
                <p className="t-body-sm mt-3 text-[var(--band-soft)]">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </Band>

      {/* When engaged */}
      <Section className="section-y">
        <SectionHead
          eyebrow="When we are engaged"
          title="The conditions that warrant senior direction"
          lede="If more than one of these describes your program, the scoping stage will establish which mandate is the correct entry point."
        />
        <ul className="mt-12 grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2">
          {engagedWhen.map((e) => (
            <DashItem key={e} className="bg-[var(--ground)] p-6">
              {e}
            </DashItem>
          ))}
        </ul>
      </Section>

      <ClosingCTA />
    </>
  );
}
