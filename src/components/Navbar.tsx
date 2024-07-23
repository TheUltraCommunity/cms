"use client";
import ThemeSwitch from "@/app/ThemeSwitch";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Toggle Nav Clicked");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={`px-8 md:px-20 lg:px-20 
      flex justify-between items-center border-b-[1px] backdrop-blur-xl dark:border-neutral-800 border-neutral-300 uppercase fixed top-0 w-full z-50 ${plus.className}`}
    >
      <a href="/" className="flex gap-4 items-center py-6">
        <p className="font-bold text-outline text-2xl border-[1.5px] border-black dark:border-white px-[0.6rem] py-[2px] rounded-md hover:bg-black hover:text-outline-white hover:scale-[110%] transition-all duration-300">
          U
        </p>
        <p className="font-bold text-2xl leading-4 mt-1">
          Ultra
          <br />
          <span className="text-[0.72rem] font-medium lowercase">
            the ananta initiative
          </span>
        </p>
      </a>
      <div className="hidden lg:flex nav font-light text-sm tracking-wider">
        <a
          className={`hover:underline underline-offset-[6px] decoration-[1px]`}
          href="/"
        >
          Home
        </a>
        <a
          className="hover:underline underline-offset-[6px] decoration-[1px]"
          href="/blogs"
        >
          Blogs
        </a>
        <a
          className="hover:underline underline-offset-[6px] decoration-[1px]"
          href="/learn"
        >
          Learn
        </a>
        <a
          className="hover:underline underline-offset-[6px] decoration-[1px]"
          href="/roadmap"
        >
          Road Maps
        </a>
        <div className="flex flex-col items-center justify-center">
          <ThemeSwitch />
        </div>
      </div>
      <RiMenuLine
        onClick={toggleNav}
        className="flex lg:hidden w-5 h-5 cursor-pointer"
      />
    </div>
  );
}
