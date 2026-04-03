import NavbarSection from "@/components/NavbarSection";
import HeroSection from "@/components/HeroSection";
import EbooksSection from "@/components/EbooksSection";
import CoursesSection from "@/components/CoursesSection";
import WebinarSection from "@/components/WebinarSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col"> 
        <NavbarSection/>
        <div className="flex flex-col items-center ">
          <HeroSection/>
          <EbooksSection/>
          <CoursesSection/>
          <WebinarSection/>
          <AboutSection/>
          <TestimonialsSection/>
        </div>
        <FooterSection/>
    </div>
  );
}
