import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { lawyers } from "@/data/lawyers";

const Lawyers = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      {lawyers.map((member, i) => (
        <div
          key={i}
          className="flex w-full lg:items-start items-center justify-center gap-20 xl:px-28 md:px-20 px-4 lg:mt-20 sm:mt-16 mt-10 lg:flex-row flex-col "
        >
          <div className="border-2 border-[var(--theme-color)]">
            <Image
              src={member.image}
              alt="Tesfaye Derese"
              width={500}
              height={500}
              className="max-w-[300px] h-full translate-x-6 translate-y-6"
            />
          </div>
          <div className="lg:max-w-[60%] w-[95%] flex flex-col gap-4 lg:items-start items-center">
            <h2 className="section-heading font-bold capitalize">
              {member.name.split(" ")[0]}{" "}
              <span className="text-[var(--theme-color)] italic">
                {member.name.split(" ")[1]}
              </span>
            </h2>
            <h3
              className={`text-2xl font-semibold text-[var(--theme-color)] mt-1 tracking-widest`}
            >
              <span className="text-[var(--theme-blue)]">
                {member.position}
              </span>
            </h3>
            <p
              className={`text-lg mt-5 tracking-wider leading-8 lg:text-start text-center`}
            >
              {member.decription}
            </p>
            <div className="w-fit flex justify-center items-center gap-5 border-b-[2px] border-b-[var(--theme-color)] pb-4">
              <Link href="mailto:abc@gmail.com">
                <MdEmail className="text-xl text-[var(--theme-color)] hoverScale" />
              </Link>
              <Link href="facebook.com">
                <FaFacebook className="text-xl text-[var(--theme-color)] hoverScale" />
              </Link>
              <Link href={"linkedin.com"}>
                <FaLinkedin className="text-xl text-[var(--theme-color)] hoverScale" />
              </Link>
              <Link href="x.com">
                <FaSquareXTwitter className="text-xl text-[var(--theme-color)] hoverScale" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lawyers;
