import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CgEditBlackPoint } from "react-icons/cg";

const Hero2 = ({
  title,
  img,
  features,
}: {
  title: string;
  img: string;
  features: string[];
}) => {
  return (
    <header className="w-full flex flex-col items-start justify-center gap-5 relative bg-[#ddd4dc] -z-20 pt-24 pb-12 pl-36">
      <h1 className="text-[40px] tracking-wideer font-medium text-slate-200">
        {title}
      </h1>
      <div className="flex justify-center items-start flex-col gap-3 text-slate-100">
        {features.map((feature) => (
          <h1
            key={feature}
            className="text-[18px] tracking-wider font-medium  px-3 flex justify-start items-center gap-3"
          >
            <CgEditBlackPoint className="" />
            {feature}
          </h1>
        ))}
      </div>
      <Link className="button " href={"/enquire"}>
        Schedule a Consultation
      </Link>
      <Image
        src={img}
        alt="About Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10 brightness-[70%]"
        width={1920}
        height={500}
      />
    </header>
  );
};

export default Hero2;
