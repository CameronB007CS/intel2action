import Link from "next/link";

const PLATFORM_LINKS = [
  { href: "/",         label: "Gateway / Home"       },
  { href: "/training", label: "Training Academy"     },
  { href: "/advisory", label: "Corporate Advisory"   },
  { href: "/contact",  label: "Secure Briefing"      },
];

const DISCIPLINES = [
  "CTI Operations",
  "OSINT / SOCMINT Analytics",
  "Threat Environment Mapping",
  "Corporate VIP Risk Mitigation",
];

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-border mt-auto">
      <div className="max-w-[1100px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <p className="font-tactical font-bold text-[1.35rem] tracking-[0.08em] text-amber mb-2">
            INTEL 2 ACTION
          </p>
          <p className="text-slate text-sm leading-relaxed max-w-xs">
            Operational intelligence training for the modern threat landscape.
            Purpose-built for analysts, contractors, and risk professionals
            who need to act — not just analyze.
          </p>
        </div>

        {/* Platform nav */}
        <div>
          <p className="font-tactical font-semibold text-[0.85rem] tracking-[0.16em] uppercase text-ivory/70 mb-4">
            Platform
          </p>
          {PLATFORM_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-sm text-slate mb-2 hover:text-amber transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Disciplines */}
        <div>
          <p className="font-tactical font-semibold text-[0.85rem] tracking-[0.16em] uppercase text-ivory/70 mb-4">
            Disciplines
          </p>
          {DISCIPLINES.map((d) => (
            <p key={d} className="text-sm text-slate mb-2">{d}</p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1100px] mx-auto px-8 pb-6 border-t border-border pt-5 flex justify-between items-center">
        <span className="font-mono-i2a text-[0.58rem] tracking-[0.16em] text-slate-dim">
          © {new Date().getFullYear()} INTEL 2 ACTION LLC · ALL RIGHTS RESERVED
        </span>
        <span className="font-mono-i2a text-[0.58rem] tracking-[0.16em] text-slate-dim flex items-center gap-2">
          <span className="w-[6px] h-[6px] rounded-full bg-green-500 pulse-dot" />
          SECURE CONNECTION ESTABLISHED
        </span>
      </div>
    </footer>
  );
}
