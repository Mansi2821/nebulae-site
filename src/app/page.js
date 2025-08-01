import StarsBackground from "../components/StarsBackground";
import HeroSection from "../components/HeroSection";
import WhatWeDo from"../components/WhatWeDo";
import LearnMore from "@/components/LearnMore";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <HeroSection />
      <WhatWeDo/>
      <LearnMore/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}


