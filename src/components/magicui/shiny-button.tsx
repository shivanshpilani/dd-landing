"use client";

import { motion, type AnimationProps } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

const ShinyButton = ({ text = "shiny-button", color = "#FB723D" }) => {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-xl px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${color}20 0%, transparent 60%)`,
        boxShadow: `0 0 20px ${color}20`,
      }}
    >
      <span
        className="relative block h-full w-full text-md uppercase tracking-wide"
        style={{
          color: color,
          maskImage:
            `linear-gradient(-75deg,${color} calc(var(--x) + 20%),transparent calc(var(--x) + 30%),${color} calc(var(--x) + 100%))`,
        }}
      >
        {text}
      </span>
      <span
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
          background: `linear-gradient(-75deg,${color}20 calc(var(--x)+20%),${color}50 calc(var(--x)+25%),${color}20 calc(var(--x)+100%))`,
        }}
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
