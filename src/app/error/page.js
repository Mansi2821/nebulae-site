import StarsBackground from "@/components/StarsBackground";
import Error from "@/components/error";
import Footer from "@/components/Footer";

export default function LetsTalkPage() {
  return (
    <main className="relative min-h-screen">
      <StarsBackground />
      <Error/>
      <Footer />
    </main>
  );
}