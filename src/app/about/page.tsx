import ContactSection from "@/components/common-sections/ContactSection";
import AboutBioSection from "./sections/AboutBioSection";
import AboutCTASection from "./sections/AboutCTASection";
import AboutHeroSection from "./sections/AboutHeroSection";

export default function About() {
  return (
    <main className="relative w-full min-h-screen">
      {/* <div className="fixed top-0 left-0 w-full z-0"> */}
      <AboutHeroSection />
      {/* </div> */}
      {/* <div className="h-screen w-full z-0"></div> */}
      {/* <div className="w-full h-full z-20"> */}
      <AboutBioSection />
      <AboutCTASection />
      <ContactSection />
      {/* </div> */}
    </main>
  );
}
