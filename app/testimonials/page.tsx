import Article from "@/components/Article";
import Hero2 from "@/components/Hero2";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero2
        title={"Testimonials"}
        img={"/images/11.jpg"}
        className="objectTopCenter blur-[3px]"
      />
      <Article />
      <div className="mb-16"></div>
      <Testimonials />
    </div>
  );
};

export default page;
