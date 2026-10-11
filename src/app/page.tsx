import {
  site,
  coreMarkets,
  extendedMarkets,
  arcStages,
  capabilities,
  engagedWhen,
  mandates,
  distinction,
  credibility,
} from "@/content/site";
import {
  Section,
  Band,
  Eyebrow,
  SectionHead,
  CTA,
  DashItem,
  ClosingCTA,
} from "@/components/ui";
import GlobalReach from "@/components/GlobalReach";
import Positioning from "@/components/Positioning";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `${site.name} — ${site.discipline}`,
  description: site.heroSub,
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Band>
        <Section className="section-y">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Eyebrow onBand>{site.name}</Eyebrow>

              <h1 className="t-display-xl mt-8 text-balance">
                {site.heroHeadline}
              </h1>

              <p className="t-lede mt-8 max-w-xl text-[var(--band-soft)]">
                {site.heroSub}
              </p>

              <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTA href="/contact" tone="onBandSolid">
                  {site.ctaPrimary}
                </CTA>
                <CTA href="/approach" tone="onBand">
                  {site.ctaSecondary}
                </CTA>
              </div>
            </div>

            {/* Core positioning, held at eye level rather than buried below */}
            <div className="border-t border-[var(--band-rule)] pt-8 lg:mt-24 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              <Positioning variant="hero" />
            </div>
          </div>

          {/* Global presence */}
          <div className="mt-16 border-t border-[var(--band-rule)] pt-8 lg:mt-20">
            <Eyebrow onBand>Core markets</Eyebrow>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
              {coreMarkets.map((m) => (
                <li key={m.region}>
                  <p className="t-body-sm font-medium">{m.region}</p>
                  <p className="t-caption mt-1 text-[var(--band-soft)]">
                    {m.authority}
                  </p>
                </li>
              ))}
            </ul>
            <p className="t-caption mt-8 text-[var(--band-soft)]">
              <span className="text-[var(--band-ink)]">
                Extended capability:
              </span>{" "}
              {extendedMarkets.map((m) => m.region).join(" · ")}
            </p>
          </div>
        </Section>
      </Band>

      {/* ── The arc ──────────────────────────────────────────── */}
      <Section className="section-y">
        <SectionHead
          eyebrow="The mandate"
          title="Strategy, scoping, governance, execution"
          lede="One continuous arc under a single accountable direction. Most engagements begin at the first stage; recovery mandates begin wherever the program actually stands."
        />

        <ol className="mt-14 grid gap-px border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-2">
          {arcStages.map((s) => (
            <li key={s.stage} className="bg-[var(--ground)] p-7 sm:p-10">
              <span className="font-display text-sm text-[var(--accent)]">
                {s.n}
              </span>
              <h3 className="t-heading-lg mt-4">{s.stage}</h3>
              <p className="t-body-sm mt-3 font-medium">{s.lede}</p>
              <p className="t-body-sm mt-4 text-[var(--ink-soft)]">{s.body}</p>
              <ul className="mt-6 space-y-2.5 border-t border-[var(--rule)] pt-5">
                {s.outputs.map((o) => (
                  <DashItem key={o} className="text-[var(--ink-soft)]">
                    {o}
                  </DashItem>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Distinction ──────────────────────────────────────── */}
      <Band>
        <Section className="section-y">
          <SectionHead
            onBand
            eyebrow="The distinction"
            title="Where advisory engagements conclude, the mandate continues"
            lede="The scoping stage would be familiar to anyone who has bought from a top-tier firm. What follows it is not."
          />

          <div className="mt-14 grid gap-px border border-[var(--band-rule)] bg-[var(--band-rule)] lg:grid-cols-2">
            <div className="bg-[var(--band)] p-7 sm:p-10">
              <p className="t-eyebrow text-[var(--band-soft)]">
                Conventional advisory
              </p>
              <ul className="mt-6 space-y-4">
                {distinction.advisory.map((i) => (
                  <li key={i} className="t-body-sm text-[var(--band-soft)]">
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--band)] p-7 sm:p-10">
              <p className="t-eyebrow text-[var(--band-accent)]">
                Fernandez Consulting
              </p>
              <ul className="mt-6 space-y-4">
                {distinction.ours.map((i) => (
                  <DashItem key={i} onBand>
                    {i}
                  </DashItem>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </Band>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <Section className="section-y">
        <SectionHead
          eyebrow="Capability"
          title="Where the program and the regulation meet"
          lede="Class II/III software programs fail at the seams between functions. Direction is held across all of them rather than within any single one."
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

      {/* ── Global reach ─────────────────────────────────────── */}
      <GlobalReach />

      {/* ── Credibility ──────────────────────────────────────── */}
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

      {/* ── When engaged ─────────────────────────────────────── */}
      <Section className="section-y-b">
        <SectionHead
          eyebrow="When we are engaged"
          title="Programs at the point where direction decides the outcome"
        />
        <ul className="mt-12 grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2">
          {engagedWhen.map((e) => (
            <DashItem key={e} className="bg-[var(--ground)] p-6">
              {e}
            </DashItem>
          ))}
        </ul>
      </Section>

      {/* ── Mandates ─────────────────────────────────────────── */}
      <Section className="section-y-b">
        <SectionHead
          eyebrow="Engagement models"
          title="Interim, fractional and embedded direction"
          lede="The arc is constant. What varies is what is held, at what commitment, and over what term."
        />

        <div className="mt-14 grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {mandates.map((m) => (
            <div key={m.name} className="bg-[var(--ground)] p-7">
              <h3 className="t-heading">{m.name}</h3>
              <p className="t-meta mt-3 text-[var(--accent)]">
                {m.commitment} · {m.term}
              </p>
              <p className="t-body-sm mt-4 text-[var(--ink-soft)]">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CTA href="/program-direction" tone="outline">
            Program Direction in detail
          </CTA>
        </div>
      </Section>

      <ClosingCTA />
    </>
  );
}
