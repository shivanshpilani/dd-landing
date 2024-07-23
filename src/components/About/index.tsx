import Image from "next/image";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import cn from "classnames";
import BlurFade from "../magicui/blur-fade";

import ddcollage from "../../../public/images/ddcollage3.png";
import ddcollagemobile from "../../../public/images/ddcollage2.png";

export function About() {
  return (
    <div className="w-full flex flex-col gap-20 bg-white">
      <div className="mt-10 w-5/6 m-auto flex flex-col items-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in  dark:border-white/5 dark:bg-neutral-900"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
            <span className="text-xs md:text-base">ABOUT THE EVENT</span>
          </AnimatedShinyText>
        </div>
        <p className="inline-block font-medium text-2xl mt-8 text-[#111213] md:text-5xl">
          What is The Demo Day?
        </p>
        <p className="font-regular text-gray-400 text-xl text-center mt-6">
          A mini Shark Tank episode, only better!
        </p>
        <div className="w-full mt-10 hidden md:block">
          <BlurFade delay={0.5} inView>
            <Image src={ddcollage} alt="Demo Day Collage" />
          </BlurFade>
        </div>
        <div className="w-full mt-10 block md:hidden">
          <BlurFade delay={0.5} inView>
            <Image src={ddcollagemobile} alt="Demo Day Collage" />
          </BlurFade>
        </div>
        {/* <div className="w-full flex flex-col mt-12 justify-between items-center md:flex-row">
          <div className="w-full md:w-1/2">
            <BlurFade delay={0.25} inView>
              <Image src={ddcollage} alt="Demo Day Collage" />
            </BlurFade>
          </div>
          <div className="w-full flex flex-col gap-6 mt-6 md:w-2/5 md:mt-0">
            <p className="font-regular text-xl">
              The Demo Day will be a{" "}
              <span className="text-[#FB723D]">
                Shark Tank-style pitching event:
              </span>{" "}
              the top 14 startups of the Conquest ‘24 cohort, selected through a
              rigorous process from a pool of 2200+ applicants pan-India, will
              showcase their innovative ideas to a jury comprising leading
              investors and compete for an{" "}
              <span className="text-[#FB723D]">
                equity-less cash grant of over ₹30 lakhs.
              </span>
            </p>
            <p className="font-regular text-xl">
              ​The startups pitching at the Demo Day get a chance to join the
              likes of prominent startups such as{" "}
              <span className="text-[#FB723D]">Trell</span>,{" "}
              <span className="text-[#FB723D]">BiteSpeed</span>,{" "}
              <span className="text-[#FB723D]">Thinkerbell Labs</span> (featured
              in Shark Tank), <span className="text-[#FB723D]">SocialCops</span>{" "}
              (now Atlan), and other Conquest alumni.
            </p>
            <p className="font-regular text-xl">
              ​​Alongside the pitching competition, Conquest: Demo Day '23 will
              feature enlightening panel discussions featuring unicorn founders
              and partners from top VC firms.
            </p>
          </div>
        </div> */}
      </div>
      <VelocityScroll
        text="DEMO DAY '24"
        default_velocity={5}
        className="font-display text-center text-8xl font-medium tracking-[-0.02em] text-neutral-100 bg-[#111213] drop-shadow-sm dark:text-white md:leading-[5rem] p-10 mt-6"
      />
    </div>
  );
}
