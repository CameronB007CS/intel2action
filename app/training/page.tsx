import { Button, Eyebrow, CalloutBanner, IntensityBar } from "@/components/ui";

type ModuleTag = "gov" | "osint" | "threat" | "corp";

interface TrainingModule {
  num:         string;
  tag:         ModuleTag;
  tagLabel:    string;
  title:       string;
  description: string;
  learn:       string[];
  action:      string[];
  intensity:   number;
  highIntensity: boolean;
}

const TAG_STYLES: Record<ModuleTag, string> = {
  gov:    "bg-cyan/10 text-cyan border border-cyan/25",
  osint:  "bg-amber/10 text-amber border border-amber/25",
  threat: "bg-red-500/10 text-red-400 border border-red-500/25",
  corp:   "bg-green-500/10 text-green-400 border border-green-500/25",
};

const MODULES: TrainingModule[] = [
  {
    num:         "MODULE 01",
    tag:         "gov",
    tagLabel:    "Government Contracting Readiness",
    title:       "CTI for the Federal Arena",
    description:
      "Designed for analysts and contractors entering or supporting the federal intelligence ecosystem. Covers the language, structure, and operational expectations of government CTI roles — from IC agencies to DHS-adjacent contracting environments.",
    learn: [
      "Intelligence Community reporting standards and product formats (IIR, SIR, PIR frameworks)",
      "Navigating the DCSA and security clearance landscape as a contractor",
      "RFP and task order language specific to CTI service delivery",
      "Chain-of-evidence documentation for law enforcement-adjacent reporting",
    ],
    action: [
      "Write a complete Spot Report and a finished intelligence product to IC format standards — graded against actual agency templates",
      "Simulate a contract debrief: brief a mock government client on threat findings under time constraint",
      "Build a personal capability matrix mapped to active USAJobs CTI postings",
    ],
    intensity:     4,
    highIntensity: false,
  },
  {
    num:         "MODULE 02",
    tag:         "osint",
    tagLabel:    "Advanced OSINT / SOCMINT Analytics",
    title:       "Digital Terrain Mastery",
    description:
      "The internet is a collection environment, not a search engine. This module teaches structured exploitation of open-source and social media intelligence — from persona construction to geospatial pivoting to automated collection pipelines.",
    learn: [
      "Source reliability matrices and OSINT collection planning methodology",
      "Advanced social network analysis: mapping influence, affiliation, and behavioral indicators",
      "Geolocation verification techniques including satellite imagery cross-referencing",
      "Dark web topology, access considerations, and safely handling sensitive material",
    ],
    action: [
      "Execute a live mock investigation: given a notional subject, build a complete target profile using only open-source methods",
      "Construct an automated OSINT pipeline using real tool stacks (Maltego, SpiderFoot, custom Python scrapers)",
      "Produce an analytic note on a real-world disinformation campaign with sourcing appendix",
    ],
    intensity:     5,
    highIntensity: true,
  },
  {
    num:         "MODULE 03",
    tag:         "threat",
    tagLabel:    "Threat Environment Mapping",
    title:       "Operational Threat Fusion",
    description:
      "Raw threat data is noise. This module teaches analysts to transform multi-source intelligence into structured, decision-ready threat pictures — integrating TTPs, geographic threat overlays, and adversary modeling into a live operational product.",
    learn: [
      "MITRE ATT&CK framework applied to real threat actor profiling",
      "Building threat matrices that integrate cyber, physical, and geopolitical indicators",
      "Adversary emulation planning and red-team intelligence support",
      "Indicator of Compromise (IoC) lifecycle management and deprecation",
    ],
    action: [
      "Map a full threat environment for a notional organization operating in a high-risk sector — produce a threat picture briefing deck",
      "Build and populate a structured threat register using live open-source threat feeds",
      "Conduct a tabletop exercise: respond to a simulated multi-vector threat escalation in real time",
    ],
    intensity:     5,
    highIntensity: true,
  },
  {
    num:         "MODULE 04",
    tag:         "corp",
    tagLabel:    "Corporate VIP Risk Mitigation",
    title:       "Executive Threat Management",
    description:
      "High-value individuals face asymmetric threats that corporate security teams frequently misread as IT or physical security problems. This module builds analysts who can assess, monitor, and brief on threats to executives, board members, and diplomatic assets.",
    learn: [
      "VIP threat profiling: behavioral analysis, online surface monitoring, and pattern-of-life assessment",
      "Corporate espionage indicators and insider threat detection methodology",
      "Travel security intelligence: pre-departure country threat packages",
      "Crisis communications intelligence support during active incidents",
    ],
    action: [
      "Produce a complete pre-travel threat package for a notional C-suite executive traveling to a high-risk jurisdiction",
      "Conduct a simulated threat briefing to a mock board risk committee — deliver findings under pressure and respond to challenges",
      "Build a personal threat monitoring dashboard using open-source tooling and structured reporting templates",
    ],
    intensity:     4,
    highIntensity: false,
  },
];

export const metadata = {
  title: "Training Academy | Intel 2 Action",
  description:
    "Four operational CTI training tracks. Each module separates what you learn from what you do — because passive knowledge is not operational capability.",
};

export default function TrainingPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative bg-navy border-b border-border px-8 py-20 overflow-hidden">
        <span
          className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-tactical font-bold
                     text-[8rem] text-amber/[0.04] tracking-[0.1em] pointer-events-none select-none"
          aria-hidden="true"
        >
          ACADEMY
        </span>
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>The Training Grid</Eyebrow>
          <h1 className="tactical-heading text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]">
            The <span className="text-amber">Academy</span>
          </h1>
          <p className="text-slate text-[0.95rem] leading-relaxed max-w-[600px] mt-4">
            Four operational tracks. Each module is split: what you learn, then
            what you do. Theory without application is liability. We don't
            produce liabilities.
          </p>
        </div>
      </section>

      {/* MODULE GRID */}
      <div className="max-w-[1100px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {MODULES.map((mod) => (
            <article
              key={mod.num}
              className="bg-midnight hover:bg-charcoal transition-colors duration-300 p-10"
            >
              {/* Module number */}
              <p className="font-mono-i2a text-[0.62rem] tracking-[0.28em] text-slate-dim mb-3">
                {mod.num}
              </p>

              {/* Tag */}
              <span
                className={`inline-block font-mono-i2a text-[0.58rem] tracking-[0.15em]
                            uppercase px-2.5 py-1 mb-3 ${TAG_STYLES[mod.tag]}`}
              >
                {mod.tagLabel}
              </span>

              {/* Title */}
              <h2 className="tactical-heading text-[1.5rem] mb-2 text-ivory">
                {mod.title}
              </h2>

              {/* Description */}
              <p className="text-slate text-[0.85rem] leading-relaxed mb-6">
                {mod.description}
              </p>

              <hr className="border-border mb-6" />

              {/* What You Learn */}
              <div className="mb-5">
                <p className="font-mono-i2a text-[0.6rem] tracking-[0.25em] uppercase
                               text-slate pb-2 border-b border-border mb-3">
                  // What You Learn
                </p>
                <ul className="space-y-1.5">
                  {mod.learn.map((item, i) => (
                    <li
                      key={i}
                      className="text-[0.82rem] text-slate leading-relaxed
                                 pl-4 relative before:content-['›'] before:absolute
                                 before:left-0 before:text-slate-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Action Phase */}
              <div className="mb-2">
                <p className="font-mono-i2a text-[0.6rem] tracking-[0.25em] uppercase
                               text-amber pb-2 border-b border-border mb-3">
                  // The Action Phase
                </p>
                <ul className="space-y-1.5">
                  {mod.action.map((item, i) => (
                    <li
                      key={i}
                      className="text-[0.82rem] text-ivory/80 leading-relaxed
                                 pl-4 relative before:content-['›'] before:absolute
                                 before:left-0 before:text-amber"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <IntensityBar
                level={mod.intensity}
                variant={mod.highIntensity ? "red" : "amber"}
              />
            </article>
          ))}
        </div>

        <CalloutBanner
          heading="Ready to Operate?"
          subtext="Cohort enrollment is limited to ensure every student receives hands-on facilitation. Secure your position before the next intake closes."
          cta="Request an Intake Assessment"
          ctaHref="/contact"
        />
      </div>
    </>
  );
}
