import StarsBackground from "../components/StarsBackground";
import HeroSection from "../components/HeroSection";
// import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      {/* <Navbar/> */}
      <HeroSection />
    </main>
  );
}

