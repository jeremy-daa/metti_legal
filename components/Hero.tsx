"use client";

import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const slides = [
    {
      title: "Welcome to Metti Tadele Legal Services",
      description: "Your World-Class Legal Partner in Ethiopia",
      image: "/images/addis_ababa_1.jpg",
    },
    {
      title: "We are a full-service law firm based in Addis Ababa, Ethiopia",
      description:
        "We provide a wide range of legal services to both local and international clients.",
      image: "/images/addis_ababa_2.jpg",
    },
    {
      title: " How can we help you?",
      description:
        "We can provide a wide range of legal services to both local and international clients.",
      image: "/images/addis_ababa_3.jpg",
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === slides.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index, slides.length]);

  return (
    <header className="w-full h-[100vh] relative -mt-[94px] overflow-hidden">
      <div className="w-full h-full ease-in duration-500 transition-all">
        <div
          style={{
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-full absolute top-0 left-0 duration-500"
        >
          {/* <Image
            src={slides[index].image}
            alt={slides[index].title}
            width={1280}
            height={720}
            className="w-full h-full object-cover duration-500"
          /> */}
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40"></div>
        <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center translate-y-[10%]">
          <div className="max-w-5xl flex items-center justify-center flex-col">
            <h1 className="text-6xl text-white font-bold text-cente  text-center mb-7 tracking-wide main-heading">
              {slides[index].title}
            </h1>
            <p className="text-white text-center text-2xl drop-shadow mb-3 sub-heading">
              {slides[index].description}
            </p>
            <Link className="button" href={"/contact-us"}>
              Schedule a Consultation
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer"
          style={{
            backgroundColor: "rgba(215, 215, 215, 0.3)",
          }}
          onClick={() => {
            if (index === 0) {
              setIndex(slides.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <GrFormPrevious size={30} />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer bg-slate-300 bg-opacity-60"
          onClick={() => {
            if (index === slides.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <GrFormNext size={30} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
