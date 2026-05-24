"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Featured Project", href: "#featured-project", id: "featured-project" },
  { label: "Workflow", href: "#workflow", id: "workflow" },
  { label: "Case Studies", href: "#case-studies", id: "case-studies" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observedSections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const topSection = document.getElementById("top");
    if (topSection) {
      observedSections.unshift(topSection);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#05070b]/88 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-6 py-3 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:px-5">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.18em] text-white uppercase"
            onClick={() => setMobileOpen(false)}
          >
            Lokith Duraisamy
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-2.5 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume/Lokith_Duraisamy_SOC_Analyst_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-300/30 hover:bg-white/8 md:inline-flex"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="hidden items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-400/15 md:inline-flex"
            >
              Contact Recruiter
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors hover:border-cyan-300/30 hover:bg-white/8 lg:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="flex h-4 w-4 flex-col justify-between">
                <span className={`h-0.5 w-full rounded-full bg-current transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full rounded-full bg-current transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-200 lg:hidden ${mobileOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav aria-label="Mobile primary" className="surface-panel rounded-2xl p-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? <span className="h-2 w-2 rounded-full bg-cyan-300" /> : null}
                </a>
              );
            })}
            <a
              href="/resume/Lokith_Duraisamy_SOC_Analyst_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-300/30 hover:bg-white/8"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-400/15"
            >
              Contact Recruiter
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}