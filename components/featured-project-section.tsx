import { SectionShell } from "@/components/section-shell";
import { ProofOfWorkGallery } from "@/components/proof-of-work-gallery";
import Image from "next/image";

function WindowsIocScannerSupportBlock() {
  return (
    <section className="surface-panel rounded-3xl p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Blue-Team Utility</p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">Windows IOC Scanner</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300/90">
            A focused Windows IOC scanner that produces lightweight IOC triage artifacts for SOC investigations and telemetry review, with a supporting role alongside SentinelTrace.
          </p>
        </div>
        <a
          href="https://github.com/lokilokith/windows-ioc-scanner"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center self-start rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-300/25 hover:bg-white/[0.05]"
        >
          View repository
        </a>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl overflow-hidden border border-white/6">
          <Image
            src="/images/windows-ioc-scanner/dashboard-clean-state.png"
            alt="Windows IOC Scanner dashboard"
            width={800}
            height={520}
            className="object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/6">
          <Image
            src="/images/windows-ioc-scanner/powershell-detection-evidence.png"
            alt="PowerShell detection evidence"
            width={800}
            height={520}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

const highlights = [
  "Sysmon log ingestion and normalization",
  "MITRE ATT&CK aligned detections",
  "Flask dashboards for investigation workflows",
  "Incident triage and timeline reconstruction",
  "Telemetry correlation across a 50,000+ event lab dataset (see project README)",
  "PowerShell abuse, DNS beaconing, and LOLBIN detection workflows",
];

export function FeaturedProjectSection() {
  return (
    <SectionShell
      id="featured-project"
      eyebrow="Featured Project"
      title="SentinelTrace — SOC telemetry investigation"
      description="A SOC telemetry investigation that ingests endpoint events, correlates telemetry, and produces investigation artifacts and evidence for triage."
    >
      <div className="space-y-4">
        <section className="surface-panel rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Centerpiece
            </span>
            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">GitHub-backed case evidence</span>
          </div>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
            SentinelTrace addresses the problem of turning high-volume endpoint telemetry into analyst-friendly evidence. It ingests Sysmon events, normalizes the telemetry, correlates behavior across process, network, and DNS activity, and presents investigation context that can be used for triage and reporting.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Overview</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">
                The project uses artifacts derived from a 50,000+ event lab dataset (see project README) and is designed to support SOC workflows where evidence remains traceable from raw event to analyst conclusion.
              </p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Detection Capabilities</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">
                Detection logic includes telemetry correlation for DNS beaconing, PowerShell abuse detection, and LOLBIN analysis to surface suspicious patterns and reduce false positives.
              </p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Investigation Workflow</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">
                Event review flows from ingestion to correlation, then into attack timeline reconstruction, allowing an analyst to validate what happened, when it happened, and how the behavior evolved.
              </p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Technologies Used</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">
                Sysmon monitoring, Wazuh SIEM, Flask dashboards, telemetry normalization, and Python-driven analysis form the core of the workflow.
              </p>
            </div>
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">MITRE ATT&CK Coverage</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">
                The project is mapped to ATT&CK techniques across execution, command and control, defense evasion, and discovery, with particular emphasis on DNS beaconing and PowerShell abuse paths.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-4 text-sm leading-6 text-slate-200 transition-colors hover:border-cyan-300/30 hover:bg-cyan-400/7"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="surface-panel rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Key Achievements</p>
              <p className="mt-2 text-sm leading-7 text-slate-300/90">
                Selected outcomes and artifacts for verification.
              </p>
            </div>
            <a
              href="https://github.com/lokilokith/sentineltrace-platform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-300/30 hover:bg-white/8"
            >
              View repository
            </a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Processed artifacts from a 50,000+ event lab dataset for investigation workflows.",
              "Built telemetry correlation for DNS beaconing and PowerShell abuse.",
              "Reconstructed attack timelines to support incident triage and reporting.",
              "Aligned detections to MITRE ATT&CK for analyst clarity and coverage.",
              "Presented telemetry in a format that supports faster SOC review.",
              "Kept evidence traceable from raw Sysmon event to analyst interpretation.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-slate-200 transition-colors hover:border-cyan-400/20">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Proof of Work</p>
            <p className="mt-2 text-sm leading-7 text-slate-300/90">
              The screenshots below show the live SentinelTrace workflow: dashboard monitoring, timeline reconstruction, threat hunting, ATT&CK mapping, and platform architecture.
            </p>
          </div>
          <ProofOfWorkGallery />
          <WindowsIocScannerSupportBlock />
        </section>
      </div>
    </SectionShell>
  );
}