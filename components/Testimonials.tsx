"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LuQuote } from "react-icons/lu";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Testimonial 1",
      text: [
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
      ],
    },
    {
      name: "Testimonial 2",
      text: [
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
      ],
    },
    {
      name: "Testimonial 3",
      text: [
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
      ],
    },
    {
      name: "Testimonial 4",
      text: [
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
        "Lorem ipsum dolor sit amet, consectetu incididunt ut dolore magna aliqua. Ut enim ad minim veniam",
      ],
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === testimonials.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, testimonials.length]);

  const translateX = (index: number) => {
    return {
      transform: `translateX(-${index * 100}%)`,
      transition: "transform 0.5s ease-in-out",
    };
  };
  return (
    <section
      className="w-full bg-fixed flex justify-center items-center flex-col py-[8rem] relative"
      //   style={{
      //     background: "url('/images/2.jpg')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backdropFilter: "blur(20px)",
      //     backgroundRepeat: "no-repeat",
      //     backgroundAttachment: "fixed",
      //   }}
    >
      <Image
        src="/images/2.jpg"
        alt="testimonial"
        layout="fill"
        objectFit="cover"
        className="absolute w-full h-full -z-10"
      />
      <div className="w-[80%] h-full flex justify-center items-start bg-gray-800 bg-opacity-50 flex-col py-10  pl-10">
        <h1
          className="section-heading mb-10"
          style={{
            color: "rgb(243 244 246)",
          }}
        >
          What Our Clients Say
        </h1>
        <LuQuote
          className="text-5xl text-[var(--theme-color)] mb-10"
          style={{
            transform: "rotate(180deg)",
          }}
        />
        <div className="w-full flex justify-start items-center gap-5 overflow-hidden text-gray-100 duration-500 cursor-grab">
          <div
            style={{
              width: `${testimonials.length * 100}%`,
              ...translateX(currentSlide),
            }}
            className="flex justify-start items-center transition-all"
          >
            {testimonials.map((testimonial, key) => (
              <div
                className="min-w-full flex flex-col justify-center items-start gap-5 text-gray-100"
                key={key}
              >
                <div className="flex flex-col justify-center items-start gap-5 w-[60%]">
                  {
                    <div className="flex flex-col justify-center items-start gap-5 font-medium tracking-wide">
                      {testimonial.text.map((text, tkey) => (
                        <p className="text-xl" key={tkey}>
                          {text}
                        </p>
                      ))}
                    </div>
                  }
                  <p className="text-sm font-medium uppercase">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* indicator */}
        <div className="flex gap-5 mt-5">
          {testimonials.map((_, akey) => (
            <div
              className="w-3 h-3 rounded-full bg-gray-100 cursor-pointer"
              style={{
                background:
                  akey === currentSlide
                    ? "var(--theme-color)"
                    : "rgb(243 244 246)",
              }}
              key={akey}
              onClick={() => setCurrentSlide(akey)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
