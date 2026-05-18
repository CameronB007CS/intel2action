"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",          label: "Gateway"  },
  { href: "/training",  label: "Academy"  },
  { href: "/advisory",  label: "Advisory" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-8
                 bg-midnight/90 backdrop-blur-md border-b border-border"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span
          className="w-2 h-2 bg-amber"
          style={{ clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)" }}
          aria-hidden="true"
        />
        <span className="font-tactical font-bold text-[1.35rem] tracking-[0.08em] text-amber">
          INTEL<span className="text-ivory">2 ACTION</span>
        </span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-8">
        {NAV_LINKS.map(({ href, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`font-tactical font-medium text-[0.88rem] tracking-[0.14em] uppercase
                         transition-colors duration-200 pb-[2px] border-b-2
                         ${active
                           ? "text-amber border-amber"
                           : "text-slate border-transparent hover:text-amber hover:border-amber"
                         }`}
            >
              {label}
            </Link>
          );
        })}

        <Link
          href="/contact"
          className="btn-clip-sm font-tactical font-semibold text-[0.82rem] tracking-[0.18em]
                     uppercase bg-amber text-midnight px-5 py-2 transition-all duration-200
                     hover:bg-amber-bright hover:-translate-y-px"
        >
          Secure Briefing
        </Link>
      </div>
    </nav>
  );
}
