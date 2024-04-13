import Hero2 from "@/components/Hero2";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      {" "}
      <Hero2 title={"Page Not FOund"} img={"/images/14.jpg"} />
      <Link
        href={"/"}
        className="mx-auto z-[2] cursor-pointer enquire absolute bottom-8 right-[50%] translate-x-1/2"
        style={{ padding: "10px 35px", fontSize: "1.1rem" }}
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default page;
