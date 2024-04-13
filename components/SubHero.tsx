import React from "react";
import Image from "next/image";
const SubHero = () => {
  return (
    <div className="h-[300px] relative lg:-mt-[94px] flex items-center justify-center">
      <Image
        src="/images/3.jpg"
        alt="Our Team"


        quality={100}
      />
      <h1
        className="text-[var(--light-color)] text-4xl font-bold"
        style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
      >
        Our Team
      </h1>
    </div>
  );
};

export default SubHero;
