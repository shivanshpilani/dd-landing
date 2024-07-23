"use client";

import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import GradualSpacing from "../magicui/gradual-spacing";

const Ticket = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[200px] bg-[#111213] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className="text-8xl">GET YOUR TICKET</p>
      <ChevronRightIcon
        className={`ml-1 h-24 w-24 transition-transform duration-300 ${
          hovered ? "translate-x-4" : ""
        }`}
      />
    </div>
  );
};

export default Ticket;
