import { BorderBeam } from "@/components/magicui/border-beam";

export function Playback() {
  return (
    <div className="relative flex h-[700px] w-5/6 m-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mt-[-100px]">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/If02uBA-KGE?si=VL9mCO1iL385Wdqb"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
