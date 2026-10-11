import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { site, coreMarkets, extendedMarkets } from "@/content/site";
import { Section, PageHero, DashItem } from "@/components/ui";
import ContactForm from "./ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Engage ${site.name} for direction of a Class II or III Software as a Medical Device program.`,
  path: "/contact",
});

const useful = [
  "Device class, intended use and target markets",
  "Where the program stands against its committed dates",
  "What is currently preventing progress",
  "Whether a quality system is already established",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Engage"
        title="Discuss your SaMD program"
        lede="A first conversation is senior, short and direct. If the mandate is not one we should hold, you will be told so — and told why."
      />

      <Section className="section-y">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <ContactForm />
          </div>

          <div>
            <p className="t-eyebrow text-[var(--accent)]">Direct</p>
            <p className="t-body-sm mt-5">
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline"
              >
                {site.email}
              </a>
            </p>

            <p className="t-eyebrow mt-12 text-[var(--accent)]">Core markets</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {coreMarkets.map((m) => (
                <li
                  key={m.region}
                  className="border-t border-[var(--rule)] pt-3"
                >
                  <p className="t-body-sm font-medium">{m.region}</p>
                  <p className="t-caption mt-0.5 text-[var(--ink-soft)]">
                    {m.authority}
                  </p>
                </li>
              ))}
            </ul>
            <p className="t-caption mt-5 text-[var(--ink-soft)]">
              Extended: {extendedMarkets.map((m) => m.region).join(" · ")}
            </p>

            <p className="t-eyebrow mt-12 text-[var(--accent)]">
              Useful to include
            </p>
            <ul className="mt-5 space-y-3">
              {useful.map((u) => (
                <DashItem key={u} className="text-[var(--ink-soft)]">
                  {u}
                </DashItem>
              ))}
            </ul>

            <p className="t-caption mt-12 text-[var(--ink-soft)]">
              Enquiries reach the Principal directly. Details you provide are
              used solely to respond — see the{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-[var(--ink)]"
              >
                privacy notice
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
