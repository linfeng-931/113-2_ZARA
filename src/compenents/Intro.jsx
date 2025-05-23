import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 100);
    window.addEventListener("resize", handleResize);
    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <img
          src={`${
            size.width > 768
              ? "/image/cover/computer/1.svg"
              : "/image/cover/mobile/1.svg"
          }`}
          alt="background"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
