import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BlurIn({ text, className = "" }) {
  const splittedText = text.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="flex justify-center" ref={ref}>
      {splittedText.map((char, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={i}
          className={`text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] ${className} text-white`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
