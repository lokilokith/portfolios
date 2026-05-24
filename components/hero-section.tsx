export function HeroSection() {
  return (
    <section id="top" className="px-6 pt-14 pb-10 sm:px-8 sm:pt-20 sm:pb-14 lg:px-12 lg:pt-24 lg:pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
          Security Operations Portfolio
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Lokith Duraisamy
        </h1>
        <p className="mt-5 text-base font-medium text-cyan-300 sm:text-lg lg:text-xl">
          SOC Analyst | Threat Detection | SIEM Engineering
        </p>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
          SOC Analyst aspirant with hands-on experience in SIEM monitoring, telemetry analysis, threat hunting, and incident investigation using Sysmon and Wazuh. SentinelTrace, MITRE ATT&CK alignment, and 50,000+ telemetry events form the core of the work shown below.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/resume/Lokith_Duraisamy_SOC_Analyst_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
          >
            Download Resume
          </a>
          <a
            href="#featured-project"
            className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            Review SentinelTrace
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
          >
            Contact Recruiter
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
          <a href="https://www.linkedin.com/in/lokith-cybersec/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/30 hover:text-cyan-200">LinkedIn</a>
          <a href="https://github.com/lokilokith" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/30 hover:text-cyan-200">GitHub</a>
          <a href="https://tryhackme.com/p/loki.lokith" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/30 hover:text-cyan-200">TryHackMe</a>
        </div>
        <div className="surface-panel mt-12 grid w-full gap-4 rounded-3xl p-5 text-left sm:grid-cols-3 sm:p-6">
          {[
            ["Location", "Namakkal, Tamil Nadu"],
              ["Stack", "Sysmon, Wazuh, Splunk, Python"],
              ["Focus", "SOC analysis, detections, and triage"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-cyan-400/20">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{label}</p>
              <p className="mt-2 text-sm leading-6 text-white/95">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}