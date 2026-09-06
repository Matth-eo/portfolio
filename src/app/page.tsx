import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
export default function HomePage() {
  return (
    <main id="main-content" className="container">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TechStack />
      <ContactSection />
    </main>
  );
}
