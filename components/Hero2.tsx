import React from "react";
import Image from "next/image";

const Hero2 = ({
  title,
  img,
  className,
}: {
  title: string;
  img: string;
  className?: string;
}) => {
  return (
    <header className="h-[400px] w-full flex items-center justify-center relative bg-[#ddd4dc] -z-20 overflow-hidden">
      <h1 className="text-[55px] tracking-wideer font-medium text-slate-200 p-5 bg-[#0000003f] rounded-[10px] shadow-lg mt-16">
        {title}
      </h1>
      <Image
        src={img}
        alt="About Hero Background"
        className={`absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-[65%] blur-[1px] ${className}`}
        width={1920}
        height={500}
      />
    </header>
  );
};

export default Hero2;
