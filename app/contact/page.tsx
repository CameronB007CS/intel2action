"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui";

const INQUIRY_TYPES = [
  "Individual Training Enrollment",
  "Team / Group Training Engagement",
  "Corporate Advisory Services",
  "Government / Agency Advisory",
  "VIP & Principal Protection Intelligence",
  "General Operational Inquiry",
];

const REFERRAL_SOURCES = [
  "Referral from a colleague or peer",
  "Conference or professional event",
  "LinkedIn or professional network",
  "Online search",
  "Government or agency recommendation",
  "Prefer not to say",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName:    "",
    lastName:     "",
    email:        "",
    organization: "",
    role:         "",
    inquiryType:  "",
    message:      "",
    referral:     "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to API route /api/intake
    setSubmitted(true);
  };

  const inputBase =
    "w-full bg-navy border border-border text-ivory font-body text-[0.9rem] px-3.5 py-2.5 " +
    "transition-colors duration-200 outline-none focus:border-cyan placeholder:text-slate-dim/60";

  return (
    <>
      {/* HERO */}
      <section className="bg-navy border-b border-border px-8 py-16">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Secure Briefing / Intake Terminal</Eyebrow>
          <h1 className="tactical-heading text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]">
            Open a{" "}
            <span className="text-amber">Secure Channel</span>
          </h1>
          <p className="text-slate text-[0.95rem] leading-relaxed max-w-[580px] mt-4">
            Whether you are a prospective analyst seeking enrollment or an
            organization requesting bespoke advisory services — this is where
            the operational relationship begins.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <div className="max-w-[1100px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-[1fr_1.65fr] gap-12 items-start">

        {/* LEFT: Intake pathways & protocol */}
        <aside className="space-y-4">
          <div className="border border-border p-6">
            <p className="font-mono-i2a text-[0.58rem] tracking-[0.2em] text-cyan mb-5">
              INTAKE PATHWAYS
            </p>

            <div className="mb-5">
              <h3 className="tactical-heading text-[0.95rem] uppercase tracking-[0.08em] text-amber mb-2">
                Individual Enrollment
              </h3>
              <p className="text-slate text-[0.82rem] leading-[1.75]">
                Aspiring or transitioning CTI analysts, OSINT practitioners,
                law enforcement professionals seeking certification, and
                government contractors building towards cleared roles.
              </p>
            </div>

            <div className="border-t border-border pt-5">
              <h3 className="tactical-heading text-[0.95rem] uppercase tracking-[0.08em] text-cyan mb-2">
                Corporate / Agency Request
              </h3>
              <p className="text-slate text-[0.82rem] leading-[1.75]">
                Organizations seeking bespoke team training, intelligence
                architecture advisory, threat briefings, or ongoing VIP risk
                monitoring services.
              </p>
            </div>
          </div>

          <div className="border border-border p-6">
            <p className="font-mono-i2a text-[0.58rem] tracking-[0.2em] text-cyan mb-4">
              RESPONSE PROTOCOL
            </p>
            <div className="text-slate text-[0.82rem] leading-[1.9] space-y-3">
              <p>
                All inquiries are reviewed within{" "}
                <span className="text-amber">24–48 hours</span> by a member of
                our operations team.
              </p>
              <p>
                Corporate and agency requests may be directed to a classified
                intake call before scope and proposal development.
              </p>
              <p>
                All communications are treated as confidential. We do not
                retain or share intake data beyond the purpose of this
                engagement.
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT: Terminal form */}
        <div className="border border-border-bright bg-midnight">
          {/* Terminal bar */}
          <div className="bg-panel border-b border-border px-5 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono-i2a text-[0.58rem] tracking-[0.18em] text-slate-dim mx-auto">
              i2a-secure-intake-v2 · ENCRYPTED CHANNEL
            </span>
          </div>

          <div className="p-8">
            <p className="font-mono-i2a text-[0.68rem] text-cyan/70 leading-relaxed mb-6">
              // INTEL 2 ACTION SECURE INTAKE TERMINAL<br />
              // Identify yourself and your operational requirement below.
            </p>

            {submitted ? (
              <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
                <span className="font-mono-i2a text-[0.6rem] tracking-[0.25em] text-green-400 block mb-3">
                  TRANSMISSION RECEIVED
                </span>
                <p className="tactical-heading text-[1.5rem] text-green-400 mb-2">
                  Standing By.
                </p>
                <p className="text-slate text-[0.88rem] leading-relaxed">
                  Your intake has been logged. Expect a response via your
                  provided secure email within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Given name or callsign"
                      className={inputBase}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Surname"
                      className={inputBase}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                    Secure Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Use a non-personal or organizational address where appropriate"
                    className={inputBase}
                    required
                  />
                </div>

                {/* Org + Role */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                      Organization / Agency
                    </label>
                    <input
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="If applicable"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                      Current Role
                    </label>
                    <input
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      placeholder="e.g. Analyst, Contractor, LE Officer"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Inquiry type */}
                <div>
                  <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className={`${inputBase} text-slate`}
                    required
                  >
                    <option value="" disabled>Select your operational need</option>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Divider */}
                <div className="relative border-t border-border my-2">
                  <span
                    className="absolute -top-[9px] left-1/2 -translate-x-1/2
                               font-mono-i2a text-[0.52rem] tracking-[0.2em]
                               text-slate-dim bg-midnight px-2"
                  >
                    OPERATIONAL REQUIREMENT
                  </span>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                    Operational Requirement / Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your background, objective, or the specific capability gap you are working to close. The more operational context you provide, the more precisely we can calibrate our response."
                    className={`${inputBase} min-h-[100px] resize-y`}
                    required
                  />
                </div>

                {/* Referral */}
                <div>
                  <label className="font-mono-i2a text-[0.6rem] tracking-[0.2em] text-cyan uppercase block mb-1.5">
                    How Did You Locate This Platform?
                  </label>
                  <select
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    className={`${inputBase} text-slate`}
                  >
                    <option value="" disabled>Select source</option>
                    {REFERRAL_SOURCES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Security note */}
                <div className="flex items-start gap-3 border border-border p-3">
                  <span className="text-[0.9rem] mt-0.5" aria-hidden="true">🔒</span>
                  <p className="font-mono-i2a text-[0.58rem] tracking-[0.12em] text-slate-dim leading-relaxed">
                    All intake submissions are transmitted over TLS 1.3 encrypted
                    channels. Your information is not shared with third parties and
                    is handled under strict operational security protocols.
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn-clip w-full font-tactical font-bold text-[0.95rem] tracking-[0.25em]
                             uppercase bg-amber text-midnight py-4 mt-2
                             transition-all duration-200 hover:bg-amber-bright hover:-translate-y-px
                             border-0 cursor-pointer"
                >
                  SUBMIT →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
