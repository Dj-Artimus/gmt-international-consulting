import AboutSection from "./home-sections/AboutSection";
import ContactSection from "./home-sections/ContactSection";
import CTASection from "./home-sections/CTASection";
import HeroSection from "./home-sections/HeroSection";
import MissionVisionSolutionsSection from "./home-sections/MissionVisionSolutionsSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
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
