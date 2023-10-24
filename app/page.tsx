import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <PracticeAreas />
    </main>
  );
}
