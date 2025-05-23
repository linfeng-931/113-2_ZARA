import Phrase from "./Phrase";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Slide({ src, left, direction = 1 }) {
  const slideRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ["start end", "end start"],
  });

  // 根據方向決定滾動範圍，direction 為 1 向右，-1 向左
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 1 ? ["-100%", "0%"] : ["0%", "-100%"]
  );

  return (
    <div ref={slideRef} className="relative">
      <motion.div
        style={{ x, left: left }}
        className="relative flex whitespace-nowrap"
      >
        <Phrase src={src} />
        <Phrase src={src} />
        <Phrase src={src} />
        <Phrase src={src} />
      </motion.div>
    </div>
  );
}
