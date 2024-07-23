import AnimatedShinyText from "../magicui/animated-shiny-text";
import cn from "classnames";
import NumberTicker from "../magicui/number-ticker";
import { MarqueeDemo } from "../Marquee";

const Attendees = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center pt-20">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in  dark:border-white/5 dark:bg-neutral-900"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
          <span className="text-xs md:text-base">MEET THE BEST MINDS</span>
        </AnimatedShinyText>
      </div>
      <p className="inline-block font-medium text-2xl mt-8 text-[#111213] md:text-5xl">
        Who's Attending?
      </p>
      <div className="flex flex-col w-5/6 gap-10 justify-center items-center md:flex-row mt-10 mb-10">
        <div className="flex flex-col items-center py-10 w-5/6 md:w-[400px] gap-4 border-2 border-[#FFF6EF] rounded-xl">
          <p className="text-[#FB723D] font-medium text-4xl md:text-6xl"><NumberTicker className="text-[#FB723D] tracking-tighter" value={10} />+</p>
          <p className="text-black text-base md:text-lg uppercase">Media Houses</p>
        </div>
        <div className="flex flex-col items-center py-10 w-5/6 md:w-[400px] gap-4 border-2 border-[#FFF6EF] rounded-xl">
          <p className="text-[#FB723D] font-medium text-4xl md:text-6xl"><NumberTicker className="text-[#FB723D] tracking-tighter" value={15} />+</p>
          <p className="text-black text-base md:text-lg uppercase">Unicorn Founders</p>
        </div>
        <div className="flex flex-col items-center py-10 w-5/6 md:w-[400px] gap-4 border-2 border-[#FFF6EF] rounded-xl">
          <p className="text-[#FB723D] font-medium text-4xl md:text-6xl"><NumberTicker className="text-[#FB723D] tracking-tighter" value={30} />+</p>
          <p className="text-black text-base md:text-lg uppercase">VC Firms</p>
        </div>
      </div>
      {/* <MarqueeDemo /> */}
    </div>
  );
};

export default Attendees;