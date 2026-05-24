import { SectionShell } from "@/components/section-shell";

const skills = [
  "Sysmon",
  "Wazuh",
  "Splunk",
  "Python",
  "Bash",
  "MITRE ATT&CK",
  "Cyber Kill Chain",
  "Behavioral Analysis",
  "Threat Hunting",
  "Incident Response",
  "Event Correlation",
  "SIEM Monitoring",
  "Wireshark",
  "YARA",
  "VirusTotal",
  "Any.Run",
];

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Core security capabilities"
      description="Show the tools and workflows you use without resorting to inflated claims or visual noise."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill} className="surface-panel rounded-2xl px-4 py-4 text-sm text-slate-200 transition-colors hover:border-cyan-400/20">
            {skill}
          </div>
        ))}
      </div>
      <div className="mt-4 surface-panel rounded-3xl p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Security Operations", "Threat Hunting, SIEM Monitoring, Incident Response, Event Correlation"],
            ["Threat Intelligence", "MITRE ATT&CK, Cyber Kill Chain, Behavioral Analysis"],
            ["Programming", "Python, Bash"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-cyan-400/20">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{label}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300/90">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}