import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div aria-hidden className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300/80">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-300/90 sm:text-base">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}