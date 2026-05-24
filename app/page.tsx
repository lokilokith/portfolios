import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/site-navbar";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { FeaturedProjectSection } from "@/components/featured-project-section";
import { SkillsSection } from "@/components/skills-section";
import { WorkflowVisualizationSection } from "@/components/workflow-visualization-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectSection />
        <WorkflowVisualizationSection />
        <CaseStudiesSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
