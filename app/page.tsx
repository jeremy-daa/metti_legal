import Description from "@/components/Description";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <PracticeAreas />
      <Description />
      <Team />
      <Expertise />
      <Testimonials />
      <ContactForm />
      <Map />
    </main>
  );
}
