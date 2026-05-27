import { SectionShell } from "@/components/section-shell";

type WorkflowStage = {
  step: string;
  title: string;
  technical: string;
  analystValue: string;
};

const workflowStages: WorkflowStage[] = [
  {
    step: "01",
    title: "Telemetry Collection",
    technical: "Endpoint activity is collected from monitored hosts and prepared for SOC review.",
    analystValue: "Creates the evidence base for every downstream detection and investigation.",
  },
  {
    step: "02",
    title: "Sysmon Ingestion & Normalization",
    technical: "Sysmon events are ingested, normalized, and structured into consistent process, network, and execution telemetry.",
    analystValue: "Preserves the behavioral details needed for reliable query and cross-event review.",
  },
  {
    step: "03",
    title: "Detection Logic & Correlation",
    technical: "Rule logic identifies suspicious patterns such as beaconing, LOLBIN use, and PowerShell abuse, then groups related process, DNS, and network activity.",
    analystValue: "Turns isolated alerts into a coherent incident story and reduces low-value noise.",
  },
  {
    step: "04",
    title: "MITRE ATT&CK Mapping",
    technical: "Observed behavior is mapped to ATT&CK techniques to classify execution, command and control, defense evasion, and discovery activity.",
    analystValue: "Adds a standard language for risk, coverage, and technical communication.",
  },
  {
    step: "05",
    title: "Threat Investigation & Triage",
    technical: "Correlated evidence is tested against the likely attack path to validate suspicious behavior and incident scope.",
    analystValue: "Helps the analyst decide what matters, what is credible, and what needs escalation.",
  },
  {
    step: "06",
    title: "Incident Review & Reporting",
    technical: "The final evidence package is translated into a concise incident summary, timeline, and response handoff.",
    analystValue: "Provides a clear endpoint for the workflow and a record recruiters can understand quickly.",
  },
];

export function WorkflowVisualizationSection() {
  return (
    <SectionShell
      id="workflow"
      eyebrow="Workflow"
      title="SentinelTrace SOC investigation pipeline"
      description="A concise end-to-end view of how telemetry moves through SentinelTrace, from collection to incident review, so recruiters can scan the analyst workflow quickly."
    >
      <div className="surface-panel rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-3 border-b border-white/8 pb-5 sm:pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Investigation flow
          </p>
          <p className="max-w-4xl text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8">
            SentinelTrace moves from raw telemetry to analyst action with minimal interpretation gaps so recruiters can scan the analyst workflow quickly.
          </p>
        </div>

        <ol className="mt-6 grid gap-4 xl:grid-cols-2">
          {workflowStages.map((stage, index) => {
            const isLast = index === workflowStages.length - 1;

            return (
              <li key={stage.step} className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-cyan-400/20">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                      {stage.step}
                    </div>
                    <div className="min-w-0 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold text-white sm:text-lg">{stage.title}</h3>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                          Stage {stage.step}
                        </span>
                      </div>
                      <p className="text-sm leading-7 text-slate-300/90">{stage.technical}</p>
                      <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                          Analyst value
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">{stage.analystValue}</p>
                      </div>
                    </div>
                  </div>

                  {!isLast ? (
                    <div
                      aria-hidden
                      className="mt-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500 xl:hidden"
                    >
                      <span className="h-px flex-1 bg-white/10" />
                      Next stage
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}