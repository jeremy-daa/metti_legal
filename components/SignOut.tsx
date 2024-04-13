"use client";
import { signOut, signIn } from "next-auth/react";

const SignOut = () => {
  return (
    <>
      <h2
        onClick={() => signOut()}
        className="mx-auto z-[2] cursor-pointer enquire absolute bottom-8 right-[50%] translate-x-1/2"
        style={{ padding: "10px 35px", fontSize: "1.1rem" }}
      >
        Sign Out
      </h2>
    </>
  );
};

export default SignOut;
