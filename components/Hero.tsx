"use client";

import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Image from "next/image";

const Hero = () => {
  const slides = [
    {
      title: "Metti Legal Services Slide 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: "/images/addis_ababa_1.jpg",
    },
    {
      title: "Metti Legal Services Slide 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: "/images/addis_ababa_2.jpg",
    },
    {
      title: "Metti Legal Services Slide 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
      image: "/images/addis_ababa_3.jpg",
    },
  ];
  const [index, setIndex] = useState(1);
  return (
    <header className="w-full h-[100vh] relative -my-[94px]">
      <div className="w-full h-full ease-in duration-500 transition-all">
        <div className="w-full h-full absolute top-0 left-0 ease-in duration-500 transition-all">
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover duration-500"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40"></div>
        <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-bold text-center">
            {slides[index].title}
          </h1>
          <p className="text-white text-center">{slides[index].description}</p>
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer bg-slate-300"
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
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer bg-slate-300"
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
