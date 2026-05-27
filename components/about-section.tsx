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
            Early-career SOC Analyst with hands-on experience in SIEM monitoring, telemetry analysis, threat hunting, and incident investigation using Sysmon and Wazuh.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
            Built a SOC-focused telemetry investigation that uses artifacts derived from a 50,000+ event lab dataset (see project README), with MITRE ATT&CK mapping, behavioral correlation, and attack timeline reconstruction.
          </p>
        </div>
        <div className="surface-panel rounded-3xl p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Trust signals</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300/90">
            <p>Top 3% global on TryHackMe</p>
            <p>SentinelTrace demonstrates a full SOC investigation workflow from ingestion to timeline reconstruction</p>
            <p>MITRE ATT&CK mapping used across detections and investigations</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}