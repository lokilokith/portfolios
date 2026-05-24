import { SectionShell } from "@/components/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="SOC-focused summary"
      description="A concise overview of the candidate story recruiters should understand first: what you do, what you built, and why it matters."
    >
      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="surface-panel rounded-3xl p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
            SOC Analyst aspirant with hands-on experience in SIEM monitoring, telemetry analysis, threat hunting, and incident investigation using Sysmon and Wazuh.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
            Built a SOC-focused telemetry investigation platform processing 50,000+ endpoint events with MITRE ATT&CK mapping, behavioral correlation, and attack timeline reconstruction.
          </p>
        </div>
        <div className="surface-panel rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Trust signals</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300/90">
            <p>Top 3% Global Rank - TryHackMe</p>
            <p>SentinelTrace platform demonstrates end-to-end SOC workflow design</p>
            <p>MITRE ATT&CK mapping used across detections and investigations</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}