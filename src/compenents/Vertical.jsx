import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BlurIn } from "./BlurIn";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Vertical({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, 300);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  console.log("id.text =>", id?.text);

  return (
    <section
      className={`relative h-screen flex flex-col-reverse gap-2 lg:gap-0 items-center justify-center overflow-hidden ${
        id.text === "SS25" ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="relative w-full md:max-w-xl rounded-2xl overflow-hidden px-8"
      >
        <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
          <img src={id["img"]} className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>
      <BlurIn text={id["text"]} />
    </section>
  );
}
