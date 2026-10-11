export const site = {
  name: "Fernandez Consulting",
  principal: "Jose Fernandez",
  principalRole: "Principal",
  discipline: "Global SaMD Program Direction",

  heroHeadline: "Global SaMD Program Direction",
  heroSub:
    "Rigorous strategic discipline combined with hands-on delivery, directing Class II/III Software as a Medical Device programs from strategy and governance through multi-market launch and post-market operations.",

  ctaPrimary: "Discuss Your SaMD Program",
  ctaSecondary: "How We Work",

  email: "jose@fernandezconsulting.co",
  domain: "fernandezconsulting.co",
  url: "https://fernandezconsulting.co",
};

/**
 * Core positioning statement. This wording is fixed brand language —
 * do not dilute, paraphrase or omit it.
 */
export const positioning = {
  lines: [
    "We do not conclude at recommendations.",
    "We remain accountable for outcomes.",
  ],
  body: "Every program is scoped with the rigor of a top-tier strategy engagement and then delivered with full ownership — through governance, stage gates, and into the markets it was designed to serve.",
};

/** Primary markets: programs directed to submission and market entry. */
export const coreMarkets = [
  { region: "United States", authority: "FDA", pathway: "510(k) · De Novo" },
  { region: "European Union", authority: "EU MDR", pathway: "CE marking" },
  { region: "United Kingdom", authority: "MHRA", pathway: "UKCA" },
  { region: "Canada", authority: "Health Canada", pathway: "MDSAP" },
  { region: "Australia", authority: "TGA", pathway: "ARTG inclusion" },
  { region: "Switzerland", authority: "Swissmedic", pathway: "MedDO" },
];

/** Extended capability: markets directed through local partners and agents. */
export const extendedMarkets = [
  { region: "Japan", authority: "PMDA" },
  { region: "China", authority: "NMPA" },
  { region: "Brazil", authority: "ANVISA" },
  { region: "Selected Asia-Pacific", authority: "Market-specific" },
];

export const arcStages = [
  {
    n: "01",
    stage: "Strategic Scoping and Analysis",
    lede: "Establish the real position before committing to a plan.",
    body: "Device qualification and classification, regulatory pathway selection across target markets, and an evidence gap assessment measured against the date the business has committed to. Delivered as a decision document, not a discussion.",
    outputs: [
      "Qualification and classification rationale per market",
      "Pathway strategy across core and extended markets",
      "Evidence and documentation gap baseline",
      "Quantified exposure to the committed timeline",
    ],
  },
  {
    n: "02",
    stage: "Program Governance and Direction",
    lede: "Convert strategy into a structure that can be executed.",
    body: "Terms of reference, workstream architecture, named ownership and decision rights. Design control governance and phase gate criteria defined so that engineering velocity and regulatory obligation advance together rather than in tension.",
    outputs: [
      "Program terms of reference and re-baselined plan",
      "Workstream architecture with accountable owners",
      "Design control governance and gate criteria",
      "Steering cadence and executive escalation path",
    ],
  },
  {
    n: "03",
    stage: "Execution and Delivery",
    lede: "The phase where advisory engagements end and ours continues.",
    body: "We hold the plan and drive it. Decisions are taken to closure, blockers removed personally, cross-functional and cross-border dependencies managed, and the evidence base completed to the standard the gate requires.",
    outputs: [
      "Requirements traceability through verification and validation",
      "Technical documentation and design history file completion",
      "Risk management and cybersecurity documentation",
      "Gates prepared, reviewed and passed",
    ],
  },
  {
    n: "04",
    stage: "Multi-Market Success",
    lede: "Launch is a milestone, not the finish line.",
    body: "Market entry sequenced so that a single body of evidence serves as many submissions as the requirements allow, followed by the surveillance and change control obligations that begin on the day of release.",
    outputs: [
      "Sequenced multi-market submission strategy",
      "Notified body and agency interaction management",
      "Post-market surveillance and vigilance readiness",
      "Change control and lifecycle governance",
    ],
  },
];

export const capabilities = [
  {
    title: "SaMD Program Direction",
    body: "Direction of Class II/III software programs where delivery, regulatory compliance and patient safety cannot be separated from one another.",
  },
  {
    title: "Multi-Market Regulatory Strategy",
    body: "FDA, EU MDR, MHRA, Health Canada, TGA and Swissmedic pathways sequenced as one coordinated program rather than as separate, duplicated submissions.",
  },
  {
    title: "Lifecycle Governance",
    body: "IEC 62304 lifecycle processes and ISO 13485 quality systems applied so that they describe how the organization genuinely builds software.",
  },
  {
    title: "Design Control and Traceability",
    body: "A traceable path from requirements and design controls through verification, validation and release that withstands notified body and agency review.",
  },
  {
    title: "Interoperability",
    body: "HL7 FHIR and connected clinical systems, where integration risk across hospital environments is program risk and must be governed as such.",
  },
  {
    title: "Medical Device Cybersecurity",
    body: "Security requirements, threat modeling and documentation carried inside the delivery plan rather than raised as a premarket surprise.",
  },
];

export const engagedWhen = [
  "A committed submission or launch date is materially at risk",
  "Program leadership is vacant and the program cannot pause",
  "Evidence is incomplete against a fixed regulatory timeline",
  "Dependencies span functions, sites and jurisdictions",
  "Multi-market entry requires coordinated regulatory sequencing",
  "Senior direction is required continuously but short of a permanent hire",
];

export const mandates = [
  {
    name: "Interim Program Direction",
    commitment: "4–5 days weekly",
    term: "3–9 months",
    body: "Embedded leadership of a Class II/III program during a vacancy, transition or capability gap. We hold the plan, chair the governance and carry the milestone dates until a permanent appointment is made and the mandate handed over.",
  },
  {
    name: "Fractional Program Direction",
    commitment: "1–3 days weekly",
    term: "Rolling, 3-month minimum",
    body: "Continuous senior direction for organizations requiring genuine regulatory-delivery judgment across release cycles without a full-time appointment.",
  },
  {
    name: "Program Recovery",
    commitment: "Full-time, front-loaded",
    term: "90 days, extendable",
    body: "Time-boxed intervention where priorities, evidence or cross-functional friction have stalled delivery. The first phase establishes the true position; the remainder restores a credible, owned path to release.",
  },
  {
    name: "Submission and Gate Readiness",
    commitment: "2–4 days weekly",
    term: "To the gate",
    body: "Direction of a defined workstream to a specific gate, covering requirements traceability, verification and validation readiness, and technical documentation completeness — assessed against the standard the gate applies, then driven closed.",
  },
  {
    name: "Specialist Augmentation",
    commitment: "Scaled to the workstream",
    term: "Defined deliverable",
    body: "Where a workstream exceeds the capacity an organization can release internally, we mobilize qualified specialists under our direction and inside your quality system. A specialist can typically be placed within days.",
  },
  {
    name: "EU MDR PRRC Support",
    commitment: "Defined availability",
    term: "Ongoing",
    body: "Article 15(6) permits micro and small enterprises to hold the Person Responsible for Regulatory Compliance externally, provided that person is permanently and continuously at the manufacturer's disposal. Above that threshold we support the appointed PRRC rather than hold the role.",
  },
];

export const distinction = {
  advisory: [
    "A findings pack and a set of recommendations",
    "An implementation roadmap for another team to run",
    "Risks identified, logged and handed over",
    "Success measured by acceptance of the report",
  ],
  ours: [
    "Decisions taken to closure and recorded",
    "The plan executed under our direction",
    "Blockers removed personally and escalated early",
    "Success measured by the gate passed and the market entered",
  ],
};

export const howWeWork = [
  {
    label: "Senior by construction",
    body: "Engagements are directed by the Principal. There is no analyst bench learning on your program and no account layer between you and the work.",
  },
  {
    label: "Written terms of reference",
    body: "Scope, decision rights, reporting lines, governance cadence and exit criteria are agreed in writing before work begins.",
  },
  {
    label: "Fixed-fee entry",
    body: "The scoping phase is fixed-fee and standalone. No mandate is committed to before the position is established and the exposure quantified.",
  },
  {
    label: "Inside your quality system",
    body: "We work under your procedures, document control and training requirements as a qualified supplier — not a parallel system.",
  },
  {
    label: "Candor as method",
    body: "Where a pathway is genuinely uncertain or a program is not ready, that is stated plainly and early. Escalation is a governance instrument, not a last resort.",
  },
  {
    label: "Deliberate exit",
    body: "Every mandate concludes with capability transferred to a permanent owner. The objective is a program that no longer requires us.",
  },
];

export const credibility = [
  {
    figure: "~4,000",
    label:
      "hospitals and clinics running platforms delivered under programs we have directed",
  },
  {
    figure: "Class II/III",
    label:
      "software device programs, where evidence and patient safety carry the greatest weight",
  },
  {
    figure: "10+",
    label:
      "regulatory markets across North America, Europe, Asia-Pacific and Latin America",
  },
];

export const standards = [
  "IEC 62304",
  "ISO 13485",
  "ISO 14971",
  "IEC 62366",
  "FDA 510(k)",
  "EU MDR",
  "UKCA",
  "MDSAP",
  "HL7 FHIR",
];

export const boundaries = [
  {
    title: "The manufacturer retains responsibility",
    body: "Regulatory responsibility and final decision authority remain with the legal manufacturer. We direct programs and drive decisions to closure; we do not displace accountable decision-makers.",
  },
  {
    title: "Engaged as a qualified supplier",
    body: "These services are a purchased input to your quality system under ISO 13485 §7.4 and 21 CFR 820.50. We provide the qualification evidence your procedures require.",
  },
  {
    title: "Specialists qualified before they start",
    body: "Personnel placed under an augmentation mandate are competence-assessed and trained to your applicable procedures before performing work, with records maintained per ISO 13485 §6.2.",
  },
  {
    title: "Independence preserved",
    body: "We do not audit processes we have designed or directed, consistent with ISO 13485 §8.2.4. Independent assessment of our own work is sourced separately.",
  },
  {
    title: "Roles that must be held internally",
    body: "The ISO 13485 management representative must be a member of your own management. The same applies to the PRRC above the micro and small enterprise threshold. We will say so rather than accept an appointment that will not withstand audit.",
  },
  {
    title: "No guaranteed outcomes",
    body: "No external party can guarantee clearance, certification or a notified body decision, and no fee here is contingent on one. What is committed to is defined scope, visible progress and evidence that withstands review.",
  },
];
