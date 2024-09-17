"use client";
import Link from "next/link";
import React, { useState } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState("");

  const validateName = (e: string) => {
    const name = e;
    setIsNameValid(name.length > 2);
    if (name.length > 2 && isEmailValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const validateEmail = (e: string) => {
    const email = e;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(regex.test(email));
    if (regex.test(email) && isNameValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <section className="w-full py-12 lg:py-[7rem] px-5 xs:px-10 md:px-24 flex justify-between lg:flex-row flex-col items-stretch gap-5">
      <div className="w-full h-full flex flex-col justify-center items- gap-5">
        <h1 className="section-heading">
          Get in touch with us for a free consultation
        </h1>
        <p className="text-gray-500">
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p>
        {info && (
          <p className="w-[100%] min-w-[300px] mx-auto text-center text-[var(--theme-color)] bg-[#e6e6e6e5] py-3 px-4 mb-2">
            {info}
          </p>
        )}
        <form
          className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            const res: any = fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify({
                name: name,
                email: email,
                message: message,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => {
                res.json();
                if (res.status === 200) {
                  (e.target as HTMLFormElement).reset();
                  setName("");
                  setEmail("");
                  setMessage("");
                  setInfo("Email sent successfully!");
                } else {
                  setInfo("Something went wrong. Please try again later.");
                }
                console.log(res);
              })
              .catch((err) => {
                setInfo("Something went wrong. Please try again later.");
                console.log(err);
              });
          }}
        >
          <div className="w-full flex flex-col justify-center items-start gap-5">
            <div className="w-full flex justify-between items-center gap-5 flex-col md:flex-row">
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border-2 border-gray-800 p-3 focus duration-300"
                  onChange={(e) => {
                    validateName(e.target.value);
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-2 border-gray-800 p-3 focus duration-300"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full border-2 border-gray-800 p-3 resize-none focus duration-300"
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full enquire h-12 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-200 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:border-gray-200 disabled:hover:text-[#4a4a4a] disabled:hover:cursor-not-allowed disabled:hover:opacity-50"
              disabled={isDisabled}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-between gap-1">
        <h1 className="section-heading mb-8">Contact Us</h1>
        <Link
          className="w-full mb-3 border-2 border-[var(--theme-color)] flex justify-start items-center p-4 gap-7 hoverFlip"
          href={"/"}
        >
          <div className="flex justify-center items-center border-gray-800 border-2 p-3 rounded-[50%]">
            <FaPhoneAlt className="w-7 h-7 text-[var(--theme-color)]" />
          </div>
          <div className="flex justify-between items-start flex-col">
            <h1 className="tracking-wide uppercase text-[var(--theme-color)]">
              Call Us Today
            </h1>
            <p>+251 911 22 22 22</p>
          </div>
        </Link>
        <Link
          className="w-full mb-3 border-2 border-[var(--theme-color)] flex justify-start items-center p-4 gap-7 hoverFlip  "
          href={"/"}
        >
          <div className="flex justify-center items-center border-gray-800 border-2 p-3 rounded-[50%]">
            <FaEnvelope className="w-7 h-7 text-[var(--theme-color)]" />
          </div>
          <div className="flex justify-between items-start flex-col">
            <h1 className="tracking-wide uppercase text-[var(--theme-color)]">
              Email Us
            </h1>
            <p>example@example.com</p>
          </div>
        </Link>
        <Link
          className="w-full mb-3 border-2 border-[var(--theme-color)] flex justify-start items-center p-4 gap-7 hoverFlip"
          href={"/"}
        >
          <div className="flex justify-center items-center border-gray-800 border-2 p-3 rounded-[50%]">
            <FaMapMarkerAlt className="w-7 h-7 text-[var(--theme-color)]" />
          </div>
          <div className="flex justify-between items-start flex-col gap-[10px]">
            <h1 className="tracking-wide uppercase text-[var(--theme-color)]">
              Visit Us
            </h1>
            <p>Bole Japan Road, Addis Ababa, Ethiopia</p>
            <p>Genete Linat Bldg.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactForm;
