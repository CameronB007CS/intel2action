import { Button, Eyebrow, SectionHeading, Section, CalloutBanner, CredentialTag } from "@/components/ui";

/* ─── Hero stats ─────────────────────────────────────────── */
const STATS = [
  { num: "20+", label: "Years Counter-Terror & Cyber Operations" },
  { num: "4",   label: "Specialized Operational Tracks"          },
  { num: "100%",label: "Applied, Simulation-Based Curriculum"    },
];

/* ─── Philosophy data ────────────────────────────────────── */
const LECTURE_CONS = [
  "Passive absorption of threat taxonomies with no operational context.",
  "Certification tests built around recall, not applied judgment.",
  "Generic OSINT walkthroughs using case studies from five years ago.",
  "No exposure to live tool stacks, collection pipelines, or reporting chains.",
  "Graduates who can describe a threat but cannot brief one to a decision-maker.",
  "Siloed modules with no integration across intelligence disciplines.",
];

const I2A_PROS = [
  "Every lesson ends with a live operational exercise — not a quiz.",
  "Students build actual OSINT collection pipelines during instruction.",
  "Threat reports are written to IC and agency standards, graded on operability.",
  "Mock investigations run across all disciplines simultaneously.",
  "Graduates brief simulated executive and law enforcement audiences.",
  "Every module connects: OSINT feeds threat maps, threat maps drive reports.",
];

/* ─── Founder credentials ────────────────────────────────── */
const CREDENTIALS = [
  "Counter-Terrorism", "Cyber Operations", "HUMINT",
  "OSINT", "Risk Analysis", "Threat Fusion",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-8 py-24">
        {/* Grid */}
        <div className="tactical-grid absolute inset-0" aria-hidden="true" />
        {/* Radial glows */}
        <div
          className="absolute -top-1/5 -left-1/10 w-[60%] h-[80%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-1/5 -right-1/10 w-[50%] h-[70%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[950px] mx-auto w-full">
          <p className="eyebrow mb-6">
            Operational Intelligence Platform — Est. 2024
          </p>

          <h1
            className="tactical-heading leading-[0.95] text-[clamp(3rem,7vw,5.5rem)] mb-6"
          >
            Stop Collecting{" "}
            <span className="text-amber block">Intelligence.</span>
            Start Driving{" "}
            <span className="text-cyan">Operations.</span>
          </h1>

          <p className="text-slate text-[1.05rem] leading-relaxed max-w-[560px] mb-10 font-light">
            Most CTI training teaches you to fill notebooks. We build analysts
            who drive decisions, lead threat operations, and deliver intelligence
            that moves organizations to action — from day one.
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <Button href="/training">Access the Training Grid</Button>
            <Button href="/advisory" variant="ghost">Corporate Advisory</Button>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-border mt-16">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`p-6 ${i < STATS.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""}`}
              >
                <span className="font-tactical font-bold text-[2.2rem] text-amber block">
                  {s.num}
                </span>
                <span className="font-mono-i2a text-[0.6rem] tracking-[0.18em] text-slate uppercase mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ─────────────────────────────────────── */}
      <Section>
        <Eyebrow>The Intel 2 Action Philosophy</Eyebrow>
        <SectionHeading>
          Two Models.{" "}
          <span className="text-amber">One Winner.</span>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-0">
          {/* Legacy column */}
          <div className="relative border border-slate-dim/50 p-10 opacity-75">
            <span
              className="absolute -top-3 left-6 font-mono-i2a text-[0.58rem]
                         tracking-[0.2em] text-slate-dim bg-midnight px-2"
            >
              LEGACY LECTURE MODEL
            </span>
            <h3 className="font-tactical font-bold text-[1.4rem] uppercase tracking-[0.08em] text-slate mb-6">
              The Lecture Model
            </h3>
            {LECTURE_CONS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span className="w-[6px] h-[6px] rounded-full bg-red-500 shrink-0 mt-[7px]" />
                <p className="text-slate text-[0.88rem] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* VS divider */}
          <div className="flex items-center justify-center font-tactical font-bold text-[1.1rem] text-slate-dim py-8">
            VS
          </div>

          {/* I2A column */}
          <div className="relative border border-amber p-10">
            <span
              className="absolute -top-3 left-6 font-mono-i2a text-[0.58rem]
                         tracking-[0.2em] text-amber bg-midnight px-2"
            >
              INTEL 2 ACTION MODEL
            </span>
            <h3 className="font-tactical font-bold text-[1.4rem] uppercase tracking-[0.08em] text-amber mb-6">
              The Intel 2 Action Model
            </h3>
            {I2A_PROS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <span className="w-[6px] h-[6px] rounded-full bg-green-500 shrink-0 mt-[7px]" />
                <p className="text-ivory/85 text-[0.88rem] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FOUNDER ────────────────────────────────────────── */}
      <section className="bg-panel border-y border-border py-20 px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16 items-center">

          {/* Avatar block */}
          <div className="flex flex-col items-start">
            <div
              className="w-[180px] h-[180px] relative border-2 border-amber bg-charcoal
                         flex items-center justify-center"
            >
              <span className="font-tactical font-bold text-[3rem] text-amber">I2A</span>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber" />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 max-w-[200px]">
              {CREDENTIALS.map((c) => (
                <CredentialTag key={c}>{c}</CredentialTag>
              ))}
            </div>
          </div>

          {/* Text block */}
          <div>
            <Eyebrow>Institutional Authority</Eyebrow>
            <SectionHeading className="mb-4">
              Built by an <span className="text-amber">Operator,</span>{" "}
              Not an Academic
            </SectionHeading>

            <blockquote className="border-l-[3px] border-amber pl-6 mb-6">
              <p className="text-amber italic font-light text-[1.1rem] leading-relaxed">
                "Intelligence that doesn't move someone to action is just
                expensive noise. Every framework we teach is one I've personally
                relied upon in live operations — because in the real world,
                hesitation has consequences."
              </p>
            </blockquote>

            <p className="text-slate text-[0.9rem] leading-[1.95]">
              Intel 2 Action was founded by a 20-year veteran of elite law
              enforcement counter-terrorism and federal cyber operations. Deployed
              across multiple high-threat jurisdictions, our founder has led
              real-time threat intelligence fusion cells, managed multi-agency
              OSINT collection pipelines, and developed the reporting frameworks
              now embedded in this curriculum. This is not a civilian academic
              program with a tactical marketing veneer. Every module is drawn from
              documented operational methodology — the same frameworks used to
              disrupt active threat networks, protect high-value individuals, and
              brief senior government decision-makers under time pressure. Our
              graduates don't just understand intelligence. They produce it.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ────────────────────────────────────────── */}
      <Section>
        <CalloutBanner
          heading="Ready for an Operational Upgrade?"
          subtext="Select your track below and begin building the skill set that separates intelligence professionals from intelligence consumers."
          cta="View the Full Training Grid"
          ctaHref="/training"
        />
      </Section>
    </>
  );
}
