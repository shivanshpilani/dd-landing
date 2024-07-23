import { About } from "@/components/About";
import Attendees from "@/components/Attendees";
import Hero from "@/components/Hero";
import { Playback } from "@/components/Playback";
import Ticket from "@/components/Ticket";

export default function Home() {
  return (
    <>
    <Hero />
    <Playback />
    <About />
    <Attendees />
    <Ticket />
    </>
  );
}
