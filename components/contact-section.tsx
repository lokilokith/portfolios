import { SectionShell } from "@/components/section-shell";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Professional availability"
      description="If you are hiring for SOC analysis, threat detection, or SIEM engineering, this is the quickest way to review the work and reach out."
    >
      <div className="surface-panel rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl space-y-4">
            <p className="text-sm font-medium text-white">Open to SOC Analyst roles and collaborative detection engineering work.</p>
            <p className="text-sm leading-7 text-slate-300/90 sm:leading-8">The links below make it easy to review the resume, check the SentinelTrace project, and verify hands-on activity on LinkedIn, GitHub, and TryHackMe.</p>
            <div className="flex flex-wrap gap-3">
              <a href="/resume/Lokith_Duraisamy_SOC_Analyst_Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition-colors hover:bg-cyan-400/15">Download Resume</a>
              <a href="https://www.linkedin.com/in/lokith-cybersec/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/30 hover:bg-white/8 hover:text-cyan-200">LinkedIn</a>
              <a href="https://github.com/lokilokith" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/30 hover:bg-white/8 hover:text-cyan-200">GitHub</a>
              <a href="https://tryhackme.com/p/loki.lokith" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/30 hover:bg-white/8 hover:text-cyan-200">TryHackMe</a>
            </div>
          </div>
<a
  href="mailto:lokilokith123@gmail.com"
  className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
>
  Contact
</a>
        </div>
      </div>
    </SectionShell>
  );
}