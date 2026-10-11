import { coreMarkets, extendedMarkets } from "@/content/site";
import { Section, SectionHead } from "@/components/ui";

/** Global reach, in two tiers. `onBand` renders it against the navy band. */
export default function GlobalReach({ onBand = false }: { onBand?: boolean }) {
  const rule = onBand ? "border-[var(--band-rule)]" : "border-[var(--rule)]";
  const ruleBg = onBand ? "bg-[var(--band-rule)]" : "bg-[var(--rule)]";
  const bg = onBand ? "bg-[var(--band)]" : "bg-[var(--ground)]";
  const soft = onBand ? "text-[var(--band-soft)]" : "text-[var(--ink-soft)]";
  const accent = onBand ? "text-[var(--band-accent)]" : "text-[var(--accent)]";

  return (
    <Section className="section-y">
      <SectionHead
        onBand={onBand}
        eyebrow="Global reach"
        title="Programs directed across regulated markets worldwide"
        lede="Multi-market entry is planned as a single sequence, so that evidence generated once serves more than one submission wherever the requirements permit."
      />

      <p className={`t-eyebrow mt-14 ${accent}`}>Core markets</p>
      <ul
        className={`mt-6 grid grid-cols-2 gap-px border ${rule} ${ruleBg} sm:grid-cols-3`}
      >
        {coreMarkets.map((m) => (
          <li key={m.region} className={`${bg} p-5 sm:p-7`}>
            <p className="t-heading">{m.region}</p>
            <p className={`t-body-sm mt-2 ${soft}`}>{m.authority}</p>
            <p className={`t-caption mt-0.5 ${soft}`}>{m.pathway}</p>
          </li>
        ))}
      </ul>

      <p className={`t-eyebrow mt-14 ${accent}`}>Extended capability</p>
      <ul
        className={`mt-6 grid grid-cols-2 gap-x-8 gap-y-5 border-t ${rule} pt-6 sm:flex sm:flex-wrap sm:gap-x-12`}
      >
        {extendedMarkets.map((m) => (
          <li key={m.region}>
            <p className="t-body-sm font-medium">{m.region}</p>
            <p className={`t-caption mt-0.5 ${soft}`}>{m.authority}</p>
          </li>
        ))}
      </ul>
      <p className={`t-body-sm mt-6 max-w-2xl ${soft}`}>
        Extended markets are directed in coordination with local authorized
        representatives and in-country agents, under the same program governance
        as the core markets.
      </p>
    </Section>
  );
}
