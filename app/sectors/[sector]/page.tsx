import Article from "@/components/Article";
import ContactForm from "@/components/ContactForm";
import Hero3 from "@/components/Hero3";
import TeamDescription from "@/components/TeamDescription";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero3
        title={"Construction and Infrastructure"}
        img={"/images/7.jpg"}
        features={[
          "Understand complex construction & infrastructure legal issues.",
          "Get straightforward legal advice you can trust.",
          "Benefit from a team specializing in construction law.",
          "Experience responsive and ethical legal representation.",
        ]}
      />
      <Article />
      <Article />
      <Article />
      <TeamDescription />
      <ContactForm />
    </div>
  );
};

export default page;
