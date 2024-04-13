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
      <Description
        title={"How we Operate"}
        description={[
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto soluta voluptatem qui, quis rem tenetur fuga sapiente, quos quo alias beatae iusto facilis quam consequatur ducimus non doloremque, sit eius quod dolorum blanditiis voluptas libero.",
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto soluta voluptatem qui, quis rem tenetur fuga sapiente, quos quo alias beatae iusto facilis quam consequatur ducimus non doloremque, sit eius quod dolorum blanditiis voluptas libero.",
        ]}
        img="/images/4.jpg"
      />
      <Team />
      <Expertise />
      <Testimonials />
      <ContactForm />
      <Map />
    </main>
  );
}
