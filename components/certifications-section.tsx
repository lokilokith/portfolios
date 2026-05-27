import { SectionShell } from "@/components/section-shell";

const achievements = [
  "Top 3% global on TryHackMe",
  "Finalist — CREST CTF 2026",
  "Winner — GDG On Campus 30-Day Challenge (2025)",
  "Certified Blue Team Practitioner (CBTP) — course certificate",
  "Cisco Junior Cybersecurity Analyst",
  "Microsoft Student SOC Program Foundations",
];

export function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Certifications"
      title="Credentials and achievements"
      description="List formal certifications, labs, and standout competitive achievements here to make the portfolio easier to trust at a glance."
    >
      <div className="surface-panel rounded-3xl p-6 sm:p-8">
        <ul className="grid gap-3 md:grid-cols-2">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-3 text-sm text-slate-300/90">
              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}