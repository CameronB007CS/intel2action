const ITEMS = [
  { label: "OPERATIONAL TRAINING NOW ENROLLING", accent: "COHORT 7 · Q3 2025" },
  { label: "ADVANCED OSINT MODULE", accent: "LIVE PIPELINE CONSTRUCTION" },
  { label: "CORPORATE ADVISORY ENGAGEMENTS", accent: "SCHEDULE A CLASSIFIED BRIEFING" },
  { label: "CTI FRAMEWORK CERTIFICATION", accent: "GOVERNMENT CONTRACTING READINESS" },
  { label: "THREAT ENVIRONMENT MAPPING TRACK", accent: "MITRE ATT&CK INTEGRATION" },
];

export default function IntelTicker() {
  // Duplicate for seamless loop
  const full = [...ITEMS, ...ITEMS];

  return (
    <div
      className="bg-navy border-b border-border overflow-hidden whitespace-nowrap py-2"
      aria-hidden="true"
    >
      <div className="ticker-scroll inline-block">
        {full.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-12 font-mono-i2a text-[0.6rem] tracking-[0.18em] text-slate-dim"
          >
            {item.label} —{" "}
            <span className="text-amber">{item.accent}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
