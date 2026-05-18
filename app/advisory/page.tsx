import { Button, Eyebrow, SectionHeading, Section, CalloutBanner } from "@/components/ui";

const SERVICES = [
  {
    num:   "01",
    title: "Intelligence Architecture Review",
    body:
      "We conduct a structured audit of your organization's existing threat intelligence posture — collection sources, reporting chains, analyst workflows, and tool stack. The output is a gap analysis with a prioritized remediation roadmap aligned to your threat environment, not a generic framework checklist.",
  },
  {
    num:   "02",
    title: "Internal Lines of Reporting Design",
    body:
      "Most organizations struggle not with collecting intelligence, but with moving it to the right decision-maker at the right time. We design fluid, scalable internal reporting structures that eliminate bottlenecks, reduce signal loss, and ensure your intelligence actually reaches the people who can act on it.",
  },
  {
    num:   "03",
    title: "Bespoke Operational Training",
    body:
      "Custom-built training programs for internal security, risk, and intelligence teams. We embed within your operational context — using your actual data classification structures, tool stacks, and threat profiles — to produce training that translates directly to job performance, not generic capability.",
  },
  {
    num:   "04",
    title: "Threat Environment Briefings",
    body:
      "Executive and board-level threat briefings for organizations entering new markets, expanding operations into elevated-risk geographies, or responding to an emerging threat signal. Structured, clear, and calibrated to your leadership's decision-making cadence — not an analyst's comfort level with ambiguity.",
  },
  {
    num:   "05",
    title: "Crisis Intelligence Support",
    body:
      "When an incident is active, we provide real-time intelligence support to your crisis management team — tracking evolving threat indicators, monitoring adversary behavior across open and closed sources, and feeding actionable situational updates directly into your incident command structure.",
  },
  {
    num:   "06",
    title: "VIP & Principal Protection Intelligence",
    body:
      "Persistent threat monitoring and pre-travel intelligence packages for C-suite executives, board members, high-profile government officials, and family offices. Delivered to your existing security operation or as a standalone managed service — discreetly, with full analytical attribution on every product.",
  },
];

const PROCESS = [
  {
    phase: "PHASE 01",
    title: "Classified Intake",
    desc:  "A confidential discovery session to assess your current posture, threat exposure, and operational priorities. No templates — only your context.",
  },
  {
    phase: "PHASE 02",
    title: "Threat Environment Mapping",
    desc:  "We build a current-state threat picture specific to your sector, geography, and operational profile before any recommendations are made.",
  },
  {
    phase: "PHASE 03",
    title: "Framework Deployment",
    desc:  "Advisory recommendations are operationalized alongside your team — not delivered as a slide deck and abandoned after the engagement closes.",
  },
  {
    phase: "PHASE 04",
    title: "Persistent Review",
    desc:  "Structured follow-on reviews tied to your threat environment's evolution. The intelligence cycle doesn't stop — neither does our engagement.",
  },
];

const SECTORS = [
  "Federal Agencies",
  "Defense Contractors",
  "Corporate Risk Teams",
  "Law Enforcement",
  "Financial Institutions",
  "Energy Infrastructure",
  "Family Offices",
];

export const metadata = {
  title: "Advisory Services | Intel 2 Action",
  description:
    "Strategic intelligence advisory for enterprises and government entities that cannot afford to be reactive in a fluid threat landscape.",
};

export default function AdvisoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy border-b border-border px-8 py-20 overflow-hidden">
        {/* Amber bottom accent */}
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, var(--amber), transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Operational Frameworks &amp; Advisory</Eyebrow>
          <h1 className="tactical-heading text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]">
            When the Threat{" "}
            <span className="text-amber block">Doesn't Wait</span>
          </h1>
          <p className="text-slate text-[0.95rem] leading-relaxed max-w-[640px] mt-4 mb-8">
            The modern threat landscape does not respect org chart hierarchies or
            quarterly review cycles. We help enterprises, government agencies, and
            high-risk organizations build intelligence structures that are fluid,
            defensible, and decision-ready.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button href="/contact">Schedule a Classified Briefing</Button>
            <Button href="/training" variant="ghost">View Training Options</Button>
          </div>
        </div>
      </section>

      <Section>
        {/* SERVICES */}
        <Eyebrow>Advisory Service Lines</Eyebrow>
        <SectionHeading>
          How We <span className="text-amber">Deploy</span>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="bg-midnight hover:bg-panel transition-colors duration-300 p-8"
            >
              <div
                className="w-11 h-11 border border-border-bright flex items-center justify-center
                           font-tactical font-bold text-[1.1rem] text-amber mb-6"
              >
                {s.num}
              </div>
              <h3 className="tactical-heading text-[1.15rem] uppercase tracking-[0.06em] mb-3 text-ivory">
                {s.title}
              </h3>
              <p className="text-slate text-[0.85rem] leading-[1.85]">{s.body}</p>
            </div>
          ))}
        </div>

        {/* PROCESS TRACK */}
        <div className="relative border border-border p-10 mb-16">
          <span
            className="absolute -top-[10px] left-8 font-mono-i2a text-[0.58rem]
                       tracking-[0.22em] text-cyan bg-midnight px-2"
          >
            ENGAGEMENT PROTOCOL
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
            {PROCESS.map((step, i) => (
              <div
                key={i}
                className="bg-midnight p-6"
              >
                <p className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-amber mb-2">
                  {step.phase}
                </p>
                <h4 className="tactical-heading text-[0.95rem] uppercase tracking-[0.1em] mb-3 text-ivory">
                  {step.title}
                </h4>
                <p className="text-slate text-[0.8rem] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTORS */}
        <div className="border-t border-border pt-8 flex flex-wrap gap-3 items-center">
          <span className="font-mono-i2a text-[0.58rem] tracking-[0.22em] text-slate-dim mr-2">
            SECTORS SERVED
          </span>
          {SECTORS.map((sector) => (
            <span
              key={sector}
              className="font-tactical font-semibold text-[0.88rem] tracking-[0.1em]
                         uppercase text-slate border border-border px-3.5 py-1.5
                         hover:border-amber hover:text-amber transition-colors duration-200 cursor-default"
            >
              {sector}
            </span>
          ))}
        </div>

        <CalloutBanner
          heading="This Conversation is Confidential."
          subtext="All advisory inquiries are handled under strict confidentiality protocols. Initial intake sessions are conducted via secure channel only."
          cta="Open a Secure Intake"
          ctaHref="/contact"
        />
      </Section>
    </>
  );
}
