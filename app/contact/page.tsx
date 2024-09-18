import ContactForm from "@/components/ContactForm";
import Hero2 from "@/components/Hero2";
import React from "react";
import Map from "@/components/Map";
const page = () => {
  return (
    <div>
      <Hero2
        title={"Contact Us"}
        img={"/images/13.jpg"}
        className="object-enter blur-[3px]"
      />
      <ContactForm />
      <Map />
    </div>
  );
};

export default page;
