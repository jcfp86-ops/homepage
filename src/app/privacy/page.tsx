import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy Notice",
    description: `How ${site.name} collects, uses and protects personal data.`,
    path: "/privacy",
  }),
  robots: { index: true, follow: false },
};

/** Update when the substance of the notice changes. */
const LAST_UPDATED = "26 September 2026";

const sections = [
  {
    h: "Who we are",
    p: [
      `${site.name} (“we”, “us”) provides program direction and regulatory delivery consulting for medical device software. We are the data controller for the personal data described in this notice.`,
      `You can reach us at ${site.email}.`,
    ],
  },
  {
    h: "What we collect",
    p: [
      "When you submit the enquiry form we collect the name, email address, organization and message you provide. We do not use cookies for advertising, and we do not track you across other websites.",
      "Our hosting provider processes standard server logs, including IP address and browser type, for security and reliability purposes.",
    ],
  },
  {
    h: "Why we use it, and our lawful basis",
    p: [
      "We use the details you submit solely to respond to your enquiry and, where relevant, to discuss a potential engagement. Our lawful basis is your consent, which you give when you submit the form, and our legitimate interest in responding to business enquiries addressed to us.",
      "We do not sell personal data, and we do not add enquiries to a marketing list without a separate request from you.",
    ],
  },
  {
    h: "Who we share it with",
    p: [
      "Enquiry messages are delivered through Resend, our transactional email provider, and to a Google Workspace mailbox. The website is hosted by Vercel. Each acts as a processor on our behalf under a data processing agreement.",
      "We disclose personal data to no one else, except where required by law.",
    ],
  },
  {
    h: "International transfers",
    p: [
      "Our processors may store or process data outside the United Kingdom and European Economic Area, including in the United States. Where that occurs, transfers are made under Standard Contractual Clauses or an equivalent approved safeguard.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "Enquiries that do not lead to an engagement are deleted within 24 months. Where an engagement begins, records are retained for the duration of that engagement and for the period required by our professional, contractual and statutory obligations.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "Subject to applicable law, you have the right to access the personal data we hold about you, to have it corrected or erased, to restrict or object to its processing, to receive it in a portable form, and to withdraw consent at any time.",
      `To exercise any of these rights, contact ${site.email}. You also have the right to lodge a complaint with a supervisory authority — in the United Kingdom, the Information Commissioner’s Office; in the European Union, the authority in your country of residence.`,
    ],
  },
  {
    h: "Changes to this notice",
    p: [
      "We may update this notice from time to time. The date of the current version is shown below.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy notice"
        lede="How we collect, use and protect the personal data you provide through this website."
      />

      <Section className="section-y">
        <div className="max-w-2xl space-y-12">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="t-heading">{s.h}</h2>
              {s.p.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="t-body mt-4 text-[var(--ink-soft)]"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <p className="t-caption border-t border-[var(--rule)] pt-6 text-[var(--ink-soft)]">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </Section>
    </>
  );
}
