import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="relative w-full max-w-4xl mx-auto px-8"
      >
        <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://fakeimg.pl/800x600/"
            alt={`Image ${id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <motion.h2
          style={{ y }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl md:text-9xl font-bold z-10 pointer-events-none"
        >
          #{id.toString().padStart(3, "0")}
        </motion.h2>
      </motion.div>
    </section>
  );
}
