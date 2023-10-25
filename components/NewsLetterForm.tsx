"use client";

import { useState } from "react";

const NewsLetterForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter");
        // clear input
        (e.target as HTMLFormElement).reset();
      }}
      className="my-3"
    >
      <label
        htmlFor="email"
        className="text-gray-200 text-lg font-medium newsletter-label relative my-2"
      >
        Subscribe to our newsletter
      </label>
      <div className="w-full flex justify-center-item center flex-col gap-2">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="mt-4 h-10 w-full px-2 text-gray-200 bg-transparent border border-gray-200 focus:outline-none focus:border-gray-400"
          onChange={(e) => validateName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          className=" h-10 w-full px-2 text-gray-200 bg-transparent border border-gray-200 focus:outline-none focus:border-gray-400"
          onChange={(e) => validateEmail(e.target.value)}
        />
        <button
          type="submit"
          className="enquire-reverse disabled:text-[#4a4a4a] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-200 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:border-gray-200 disabled:hover:text-[#4a4a4a] disabled:hover:cursor-not-allowed disabled:hover:opacity-50 bg-[#4a4a4a] border-[#4a4a4a] text-white font-medium text-lg py-2 px-4"
          disabled={disabled}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsLetterForm;
