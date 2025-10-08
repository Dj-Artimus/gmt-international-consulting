import ContactSection from "../../components/common-sections/ContactSection";
import ServicesAboutSection from "./sections/ServicesAboutSection";
import ServicesHeroSection from "./sections/ServicesHeroSection";
import ServicesMissionVisionStatementSolutionsSection from "./sections/ServicesMissionVisionStatementSolutionsSection";
import ServicesSection from "./sections/ServicesSection";

export default function Services() {
  return (
    <main className="relative w-full min-h-screen font-poppins font-light">
      {/* <div className="fixed top-0 left-0 w-full z-0"> */}
      <ServicesHeroSection />
      {/* </div> */}
      {/* <div className="h-screen w-full z-0"></div> */}
      {/* <div className="w-full h-full z-20"> */}
      <ServicesSection />
      <ServicesAboutSection />
      <ServicesMissionVisionStatementSolutionsSection />
      <ContactSection />
      {/* </div> */}
    </main>
  );
}
