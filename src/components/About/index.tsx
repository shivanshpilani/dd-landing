import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import cn from "classnames";
import BlurFade from "../magicui/blur-fade";

export function About() {
  return (
    <div className="mt-20 w-5/6 m-auto flex flex-col items-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in  dark:border-white/5 dark:bg-neutral-900"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
          <span>ABOUT THE EVENT</span>
        </AnimatedShinyText>
      </div>
      <p className="inline-block font-medium text-5xl mt-8 text-neutral-200">
        What is The Demo Day?
      </p>
      <div className="w-full flex mt-12">
        <p className="w-3/5">
          the Demo Day will be a Shark Tank-style pitching event: the top 13
          startups of the Conquest ‘23 cohort, selected through a rigorous
          process from a pool of 2200+ applicants pan-India, will showcase their
          innovative ideas to a jury comprising leading investors and compete
          for an equity-less cash grant of over ₹10 lakhs. ​The startups
          pitching at the Demo Day get a chance to join the likes of prominent
          startups such as Trell, BiteSpeed, Thinkerbell Labs (featured in Shark
          Tank), SocialCops (now Atlan), and other Conquest alumni. ​​Alongside
          the pitching competition, Conquest: Demo Day '23 will feature
          enlightening panel discussions featuring unicorn founders and partners
          from top VC firms.
        </p>
      </div>
    </div>
  );
}
