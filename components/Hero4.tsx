"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import SignOut from "./SignOut";

const Hero4 = () => {
  const { data: session, status } = useSession();

  return (
    <header className="h-[400px] w-full flex items-center justify-center relative bg-[#ddd4dc] overflow-hidden ">
      <h1 className="text-[55px] tracking-wideer font-medium text-slate-200 p-5 bg-[#0000003f] rounded-[10px] shadow-lg mt-16 capitalize z-[2]">
        {session && `Welcome, ${session.user?.name || session.user?.email}`}
      </h1>
      <Image
        src={"/images/8.jpg"}
        alt="About Hero Background"
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[65%] blur-[1px]`}
        width={1920}
        height={500}
      />
      <SignOut />
    </header>
  );
};

export default Hero4;

// const { data: session, status } = useSession()

//   if (status === "authenticated") {
//     return <p>Signed in as {session.user.email}</p>
//   }

//   return <a href="/api/auth/signin">Sign in</a>
