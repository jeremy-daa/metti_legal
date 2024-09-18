import Link from "next/link";
import React from "react";
import Image from "next/image";

const TeamDescription = () => {
  const features = [
    {
      title: "Diverse Expertise",
      description:
        "Our team brings together a variety of legal skills, covering areas like business law, patents, disputes, and global regulations.",
    },
    {
      title: "Industry Experience",
      description:
        "Meet our team of lawyers who understand your industry, whether it's tech, finance, healthcare, or any other sector. We provide tailored legal advice that fits your business perfectly.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "At Meti Legal Services, we're all about you. Our team listens carefully to your needs and goals, crafting legal solutions just for you.",
    },
  ];
  return (
    <div className="min-h-[400px] py-5 w-full relative flex justify-start items-center mt-[100px]">
      <div className="w-full p-4 flex flex-wrap gap-8 min-h-[150px] justify-evenly items-center px-10 md:px-24">
        {features.map((feature, key) => (
          <div
            className="w-[300px] h-full flex flex-col items-center justify-center pt-2 text-[var(--light-color)] text-center"
            key={key}
          >
            {/* <Image
              src={feature.image}
              alt={feature.title}
              width={80}
              height={80}
              className="w-40 h-40 pb-2"
            /> */}
            <h1 className="text-[var(--theme-color)] text-2xl font-medium mb-4">
              {feature.title}
            </h1>
            <p className="text-[15px] tracking-wider leading-6">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full stickyBG"></div>
    </div>
  );
};

export default TeamDescription;
