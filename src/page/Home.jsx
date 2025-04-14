import React, { useState, useEffect } from "react";
import Slide from "../compenents/Slide";
import SlidesNav from "../compenents/SlidesNav";
import cover from "../../json/coverImg.json";

export default function Slides() {
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideTrigger, setSlideTrigger] = useState(0);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrent((prev) => (prev + 1) % cover.length);
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrent((prev) => (prev - 1 + cover.length) % cover.length);
    //setSlideTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isSliding) return;
      if (e.deltaY > 0) nextSlide();
      else prevSlide();
    };
    const handleKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [isSliding]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsSliding(false), 1000);
    return () => clearTimeout(timeout);
  }, [current]);

  useEffect(() => {
    const intervalTime = isSliding == true ? 5000 : 10000;
    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slideTrigger]);

  return (
    <main className="h-screen overflow-hidden relative bg-white">
      <section className="relative h-full w-full">
        {cover.map((data, i) => (
          <Slide
            key={i}
            id={data.id}
            active={i === current}
            bg={screen.width > 375 ? data.computerCover : data.mobileCover}
          />
        ))}
      </section>
      <SlidesNav onNext={nextSlide} onPrev={prevSlide} isSliding={isSliding} />
    </main>
  );
}
