import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <HeroSection />

      <SectionDivider />

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="tech">
        <TechStack />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
