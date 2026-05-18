import Link from "next/link";
import { type ReactNode } from "react";

/* ─── Button ──────────────────────────────────────────────── */
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base = `font-tactical font-semibold text-[0.88rem] tracking-[0.2em] uppercase
    px-8 py-3 transition-all duration-200 cursor-pointer btn-clip inline-block`;

  const styles = {
    primary: `bg-amber text-midnight hover:bg-amber-bright hover:-translate-y-px ${base}`,
    ghost:   `bg-transparent text-cyan border border-cyan hover:bg-cyan/10 ${base}`,
  };

  const cls = `${styles[variant]} ${className}`;

  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}


/* ─── Eyebrow label ───────────────────────────────────────── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow mb-4 text-cyan">
      {children}
    </p>
  );
}


/* ─── Section heading ─────────────────────────────────────── */
export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`tactical-heading text-[clamp(2rem,4vw,3rem)] mb-10 ${className}`}
    >
      {children}
    </h2>
  );
}


/* ─── Callout banner ─────────────────────────────────────── */
export function CalloutBanner({
  heading,
  subtext,
  cta,
  ctaHref,
}: {
  heading: string;
  subtext: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <div
      className="relative bg-amber/5 border border-amber/20 p-12 text-center my-16"
    >
      {/* Amber top bar */}
      <span
        className="absolute top-0 left-0 right-0 h-[2px] bg-amber"
        aria-hidden="true"
      />
      <h3 className="tactical-heading text-[2rem] mb-3">{heading}</h3>
      <p className="text-slate text-[0.95rem] leading-relaxed mb-6 max-w-xl mx-auto">
        {subtext}
      </p>
      <Button href={ctaHref}>{cta}</Button>
    </div>
  );
}


/* ─── Credential tag ─────────────────────────────────────── */
export function CredentialTag({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-mono-i2a text-[0.58rem] tracking-[0.15em] uppercase
                 text-cyan border border-cyan/40 px-2.5 py-1"
    >
      {children}
    </span>
  );
}


/* ─── Intensity bar ──────────────────────────────────────── */
export function IntensityBar({
  level,
  max = 5,
  variant = "amber",
}: {
  level: number;
  max?: number;
  variant?: "amber" | "red";
}) {
  const color = variant === "red" ? "bg-red-500" : "bg-amber";
  return (
    <div className="flex items-center gap-1 mt-5">
      <span className="font-mono-i2a text-[0.55rem] tracking-[0.15em] text-slate-dim mr-1">
        INTENSITY
      </span>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`w-5 h-[3px] ${i < level ? color : "bg-border"}`}
        />
      ))}
    </div>
  );
}


/* ─── Section wrapper ────────────────────────────────────── */
export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 px-8 ${className}`}>
      <div className="max-w-[1100px] mx-auto">{children}</div>
    </section>
  );
}
