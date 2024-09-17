import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

const Lawyers = () => {
  return (
    <div className="flex w-full lg:items-start items-center justify-center gap-20 xl:px-28 md:px-20 px-4 lg:mt-20 sm:mt-16 mt-10 lg:flex-row flex-col ">
      <div className="border-2 border-[var(--theme-yellow)]">
        <Image
          src="/images/random.png"
          alt="Tesfaye Derese"
          width={500}
          height={500}
          className="max-w-[300px] h-full translate-x-6 translate-y-6"
        />
      </div>
      <div className="lg:max-w-[60%] w-[95%] flex flex-col gap-4 lg:items-start items-center">
        <h2 className="text-5xl font-bold capitalize">
          Tesfaye{" "}
          <span className="text-[var(--theme-yellow)] italic">Derese</span>
        </h2>
        <h3
          className={`text-2xl font-semibold text-[var(--theme-yellow)] mt-1 tracking-widest`}
        >
          <span className="text-[var(--theme-blue)]">Senior Lawyer</span>
        </h3>
        <p
          className={`text-lg mt-5 tracking-wider leading-8 lg:text-start text-center`}
        >
          Tesfaye Derese is a seasoned lawyer with over 20 years of experience
          in the legal industry. He specializes in corporate and commercial law,
          banking and finance, real estate, intellectual property, employment
          and labor law, as well as litigation and dispute resolution.
          <br />
          <br />
          Tesfaye Derese is an active member of both the Ethiopian Bar
          Association and the International Bar Association.
        </p>
        <div className="w-fit flex justify-center items-center gap-5 border-b-[2px] border-b-[var(--theme-yellow)] pb-4">
          <Link href="mailto:abc@gmail.com">
            <MdEmail className="text-xl text-[var(--theme-yellow)] hoverScale" />
          </Link>
          <Link href="facebook.com">
            <FaFacebook className="text-xl text-[var(--theme-yellow)] hoverScale" />
          </Link>
          <Link href={"linkedin.com"}>
            <FaLinkedin className="text-xl text-[var(--theme-yellow)] hoverScale" />
          </Link>
          <Link href="x.com">
            <FaSquareXTwitter className="text-xl text-[var(--theme-yellow)] hoverScale" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
