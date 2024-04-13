import Blogs from "@/components/Blogs";
import Hero2 from "@/components/Hero2";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero2 title={"Recent Laws and Blogs"} img={"/images/8.jpg"} />
      <Blogs />
    </div>
  );
};

export default page;
