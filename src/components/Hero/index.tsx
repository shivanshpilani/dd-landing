"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import Particles from "@/components/magicui/particles";

import conquest from "../../../public/images/Conquest-ILU.png";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import ShinyButton from "../magicui/shiny-button";
import Link from "next/link";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#111213]">
      <Image src={conquest} alt="Conquest Logo" className="mb-6 w-48 md:w-[16rem]"></Image>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-500 bg-clip-text text-center text-8xl font-bold leading-none text-transparent" style={{ fontFamily: 'Geller, sans-serif' }}>
        DEMO DAY
      </span>
      <h2 className="mt-6 text-neutral-400 font-regular text-xl text-center px-4 break-words">
        10th August 2025 | Taj MG Road, Bangalore
      </h2>
      {/* <BlurIn
        word="DEMO DAY"
        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      /> */}
      {/* <ShimmerButton className="shadow-2xl w-[200px] mt-16">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-neutral-300 dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get Tickets
        </span>
      </ShimmerButton> */}
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
