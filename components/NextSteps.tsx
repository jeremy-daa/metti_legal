import Image from "next/image";
import Link from "next/link";
import { relative } from "path";
const NextSteps = () => {
  return (
    <div className="h-[400px] w-full relative flex justify-start items-center mt-[100px]">
      <div className="text-[16px] tracking-wider font-medium px-5 sm:px-10  md:px-[100px]">
        <h1 className="text-[var(--theme-color)] border-double double-dash">
          Next Steps
        </h1>
        <h1 className="text-[34px] text-slate-100 mt-5 mb-12">
          Contact our team to get started
        </h1>
        <Link className="button text-sm sm:text-base" href={"/contact"}>
          Schedule a Consultation
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full stickyBG"></div>
    </div>
  );
};

export default NextSteps;
