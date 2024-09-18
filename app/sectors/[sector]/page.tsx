import Article from "@/components/Article";
import ContactForm from "@/components/ContactForm";
import Expertise from "@/components/Expertise";
import Hero3 from "@/components/Hero3";
import TeamDescription from "@/components/TeamDescription";
import { practiceAreas } from "@/data/practiceAreas";
import { notFound } from "next/navigation";
import React from "react";
interface Params {
  params: {
    sector: string;
  };
}
const page = ({ params: { sector } }: Params) => {
  const service = practiceAreas.find(
    (area) => area.link.split("/").filter(Boolean).pop() === sector
  );
  if (!service) return notFound();
  return (
    <div>
      <Hero3
        title={service.title}
        img={"/images/4.jpg"}
        features={service.bullets}
      />
      <Article title={service.title} description={[service.description]} />
      <TeamDescription />
      <Expertise />
      <ContactForm />
    </div>
  );
};

export default page;
