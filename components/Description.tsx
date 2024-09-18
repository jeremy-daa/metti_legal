import Image from "next/image";
import React from "react";

const Description = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string[];
  img: string;
}) => {
  return (
    <article className="w-full relative flex justify-end items-center">
      <Image
        src={img}
        alt="description"
        width={1280}
        height={720}
        className="absolute object-cover brightness-50 -z-10 top-0 left-0 h-full w-full"
      />
      <div className="flex w-[90%]] lg:w-[60%] flex-col gap-5 mx-4 lg:mx-10 my-[5rem] bg-gray-400 bg-opacity-30 p-5">
        <h1
          className="section-heading underline-short"
          style={{ color: "var(--theme-color)" }}
        >
          {title}
        </h1>
        <div className="text-l text-gray-100 flex flex-col gap-4">
          {description.map((desc, index) => (
            <p key={index} className="">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Description;
