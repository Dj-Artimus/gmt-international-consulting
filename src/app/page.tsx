import ContactSection from "@/components/common-sections/ContactSection";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import MissionVisionStatementSolutionsSection from "./sections/MissionVisionStatementSolutionsSection";
import ServicesSection from "./sections/ServicesSection";

export default function Services() {
  return (
    <main className="relative w-full min-h-screen font-poppins font-light">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MissionVisionStatementSolutionsSection />
      <ContactSection />
    </main>
  );
}
