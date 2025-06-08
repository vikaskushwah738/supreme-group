import Contact from "@/components/Contact";
import Degree360 from "@/components/Degree360";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Degree360 />
      <Contact />
    </main>
  );
}
