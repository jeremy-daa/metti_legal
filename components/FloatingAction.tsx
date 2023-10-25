import Link from "next/link";
import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const FloatingAction = () => {
  return (
    <div className="fixed bottom-[3rem] right-[2rem] z-50 flex flex-col justify-center items-center gap-6 duration-300">
      <Link
        className="w-[3.5rem] h-[3.5rem] rounded-[50%] cursor-pointer bg-gray-800 flex justify-center items-center p-3 text-[var(--theme-color)] hover:text-gray-800 hover:bg-[var(--theme-color)] border-2 border-[var(--theme-color)] hover:border-gray-800 duration-300 shake"
        href="/"
      >
        <BsTelephone className={"w-full h-full"} />
      </Link>
      <Link
        className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-gray-100 flex justify-center items-center p-2 border-2 border-[var(--theme-color)] text-[var(--theme-color)] hover:text-gray-100 hover:bg-[var(--theme-color)] hover:border-gray-100 duration-300 shake"
        href="/"
      >
        <BiLogoWhatsapp className={"w-full h-full"} />
      </Link>
    </div>
  );
};

export default FloatingAction;
