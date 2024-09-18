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
      <Article
        title={"What our clients say about us"}
        description={[
          "At Metti Tadele Legal Services, we are committed to providing our clients with world-class legal services tailored to their unique needs. Our clients have placed their trust in us for over 20 years, and we are proud to have helped them achieve their goals and protect their interests. Here's what some of our clients have to say about their experience with us:",
        ]}
      />
      <div className="mb-16"></div>
      <Testimonials />
    </div>
  );
};

export default page;
