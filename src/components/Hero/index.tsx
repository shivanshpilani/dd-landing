"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import Particles from "@/components/magicui/particles";
import ShimmerButton from "../magicui/shimmer-button";

import ilu from "../../../public/images/ILU.svg";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Image src={ilu} alt="" className="mb-6"></Image>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b to-gray-950 from-white bg-clip-text text-center text-8xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        DEMO DAY
      </span>
      <h2 className="mt-4 text-neutral-400 font-medium text-xl">11th Augutst 2024 | Banglore</h2>
      {/* <BlurIn
        word="DEMO DAY"
        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      /> */}
      <ShimmerButton className="shadow-2xl w-[200px] mt-16">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-neutral-300 dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get Tickets
        </span>
      </ShimmerButton>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#FFFFFF"
        refresh
      />
    </div>
  );
};

export default Hero;
