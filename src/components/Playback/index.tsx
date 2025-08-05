import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import ShinyButton from "../magicui/shiny-button";

export function Playback() {
  return (
    <div className="flex flex-col w-full items-center mt-[-100px] pb-20 bg-[#111213]">
      <Link href="https://lu.ma/qrthpr4l" target="_blank">
        <div className="mt-[-50px] mb-20 md:mt-[-100px]">
          <ShinyButton text="Sign up now" />
        </div>
      </Link>
      <div className="relative flex h-[300px] w-5/6 m-auto flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl mb-10 md:h-[700px]">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/I8XqjTIJn_Q?si=VL9mCO1iL385Wdqb"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </div>
  );
}
