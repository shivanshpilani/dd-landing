"use client";

import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const Ticket = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="https://lu.ma/qrthpr4l" target="_blank">
     <div
      className="h-full bg-[#111213] flex items-center justify-center md:h-[200px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
             <p className="text-6xl md:text-8xl">REGISTER NOW</p>
      <ChevronRightIcon
        className={`ml-1 h-24 w-24 transition-transform duration-300 ${
          hovered ? "translate-x-4" : ""
        }`}
      />
    </div>
    </Link>
  );
};

export default Ticket;
