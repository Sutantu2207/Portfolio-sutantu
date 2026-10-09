import Hero from "@/sections/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import SelectedWork from "@/sections/SelectedWork";
import FlutterProjects from "@/sections/FlutterProjects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 01. Hero Section */}
      <Hero />

      {/* Live Animated Design Marquee */}
      <MarqueeTicker />

      {/* 02. About Section */}
      <About />

      {/* 03. Expertise (What I Do) */}
      <Expertise />

      {/* 04. Selected Work (Featured Design Projects) */}
      <SelectedWork />

      {/* 05. Digital Interface Designs (Interactive Mobile UI Showcase) */}
      <FlutterProjects />

      {/* 06. Experience (Vertical Timeline) */}
      <Experience />

      {/* 07. Education (Visually Dominant B.E.) */}
      <Education />

      {/* 08. Certifications & Subtle Languages */}
      <Certifications />

      {/* 09. Dramatic Contact CTA */}
      <Contact />

      {/* 10. Minimalist Footer */}
      <Footer />
    </div>
  );
}
