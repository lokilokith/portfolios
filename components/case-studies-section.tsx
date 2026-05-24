import { SectionShell } from "@/components/section-shell";

export function CaseStudiesSection() {
  return (
    <SectionShell
      id="case-studies"
      eyebrow="Case Studies"
      title="DNS Beaconing Detection Investigation"
      description="A concise investigation narrative that shows how telemetry was used to validate command-and-control behavior and map the evidence to ATT&CK."
    >
      <article className="surface-panel rounded-3xl p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Threat Scenario</p>
              <p className="mt-3 text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
                Suspicious periodic DNS activity suggested a low-and-slow beacon pattern that required validation against endpoint and network telemetry.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Detection Method</p>
              <p className="mt-3 text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
                Detection relied on Sysmon telemetry and network logs, with recurring query behavior and process context used to confirm the signal was not routine background traffic.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Outcome</p>
              <p className="mt-3 text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
                The investigation validated command-and-control behavior and provided a clear ATT&CK-mapped evidence trail for SOC review.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Investigation Steps", "Reviewed event timing, process context, and DNS query frequency to establish the behavior pattern."],
              ["Correlation Process", "Cross-referenced Sysmon telemetry with network logs to separate suspicious behavior from background noise."],
              ["MITRE ATT&CK Mapping", "Mapped the activity to T1071 to anchor the analysis in a standard detection framework."],
              ["Analyst Value", "Turned an ambiguous signal into a concise, evidence-backed triage decision."],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-slate-200 transition-colors hover:border-cyan-400/20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/90">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </SectionShell>
  );
}