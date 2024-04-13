import ContactForm from "@/components/ContactForm";
import Hero2 from "@/components/Hero2";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero2
        title={"Contact Us"}
        img={"/images/13.jpg"}
        className="object-enter blur-[3px]"
      />
      <ContactForm />
    </div>
  );
};

export default page;
