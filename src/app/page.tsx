import ContactSection from "../components/common-sections/ContactSection";
import AboutSection from "./sections/AboutSection";
import CTASection from "./sections/CTASection";
import HeroSection from "./sections/HeroSection";
import MissionVisionSolutionsSection from "./sections/MissionVisionSolutionsSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen font-poppins">
      {/* <div className="fixed top-0 left-0 w-full z-0"> */}
      <HeroSection />
      {/* </div> */}
      {/* <div className="h-screen w-full z-0"></div> */}
      {/* <div className="w-full h-full z-20"> */}
      <AboutSection />
      <MissionVisionSolutionsSection />
      <CTASection />
      <ContactSection />
      {/* </div> */}
    </main>
  );
}
