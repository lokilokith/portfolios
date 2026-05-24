import Image from "next/image";

type EvidenceItem = {
  title: string;
  src: string;
  alt: string;
  caption: string;
  context: string;
  relevance: string;
  significance: string;
};

const evidenceItems: EvidenceItem[] = [
  {
    title: "SentinelTrace Dashboard",
    src: "/images/sentineltrace/dashboard-overview.png",
    alt: "SentinelTrace dashboard overview showing telemetry visibility and alert triage",
    caption: "Main SOC monitoring surface used to review telemetry, alerts, and investigation status.",
    context: "Analyst monitoring interface",
    relevance: "Shows how high-volume endpoint data is condensed into triage-ready visibility.",
    significance: "Supports daily SOC review by surfacing the signals that matter first.",
  },
  {
    title: "Incident Timeline Reconstruction",
    src: "/images/sentineltrace/investigation-timeline.png",
    alt: "SentinelTrace investigation timeline reconstructing correlated events",
    caption: "Reconstructed event sequence used to follow the investigation from first signal to outcome.",
    context: "Attack investigation flow",
    relevance: "Turns correlated telemetry into a readable sequence for analyst decision-making.",
    significance: "Validates what happened, when it happened, and how the behavior evolved.",
  },
  {
    title: "Threat Hunting Console",
    src: "/images/sentineltrace/threat-hunting-console.png",
    alt: "SentinelTrace threat hunting console showing security event analysis",
    caption: "Investigation console used for security event review, filtering, and hypothesis-driven hunting.",
    context: "Threat hunting workflow",
    relevance: "Provides a focused space for hunting, triage, and detection verification.",
    significance: "Demonstrates analyst reasoning across suspicious activity and event context.",
  },
  {
    title: "MITRE ATT&CK Mapping",
    src: "/images/sentineltrace/mitre-attack-mapping.png",
    alt: "SentinelTrace MITRE ATT&CK mapping view with detection alignment",
    caption: "Technique mapping used to align detection logic with ATT&CK coverage.",
    context: "Detection alignment",
    relevance: "Shows how findings are classified into a standard adversary behavior model.",
    significance: "Improves detection coverage and makes the investigation easier to communicate.",
  },
  {
    title: "Platform Architecture",
    src: "/images/sentineltrace/architecture-diagram.png",
    alt: "SentinelTrace architecture diagram showing telemetry ingestion and processing flow",
    caption: "System view of the telemetry ingestion flow, processing layers, and detection pipeline.",
    context: "Telemetry ingestion flow",
    relevance: "Explains how events move from collection into detection and analyst review.",
    significance: "Provides proof of a working pipeline rather than a static dashboard mockup.",
  },
];

type ScreenshotEvidenceCardProps = {
  item: EvidenceItem;
};

export function ScreenshotEvidenceCard({ item }: ScreenshotEvidenceCardProps) {
  return (
    <figure className="surface-panel group overflow-hidden rounded-3xl transition-colors hover:border-cyan-400/20">
      <div className="border-b border-white/8 bg-white/[0.02] p-3 sm:p-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8 bg-slate-950/60">
          <a
            href={item.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size ${item.title}`}
            className="absolute inset-0 block"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain p-2 transition-transform duration-200 group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </a>
        </div>
      </div>

      <figcaption className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300/90">{item.caption}</p>
          </div>
          <a
            href={item.src}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-cyan-300/30 hover:bg-white/8"
          >
            View full size
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Context
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.context}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 sm:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Detection Relevance
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.relevance}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3 sm:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Technical Significance
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{item.significance}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function ProofOfWorkGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {evidenceItems.map((item) => (
        <ScreenshotEvidenceCard key={item.title} item={item} />
      ))}
    </div>
  );
}