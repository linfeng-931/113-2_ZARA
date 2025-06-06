import Intro from "../compenents/Intro";
import Description from "../compenents/Description";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Vertical from "../compenents/Vertical";
import Header from "../compenents/Header";
import { Link } from "react-router";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main>
      <Header />
      <Link to={`/products/category/NEW`}>
        <Intro />
      </Link>

      <Description />
      <div className="bg-black min-h-screen">
        {/* 標題區域 */}
        <section className="h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white z-10"
          >
            <div className="text-2xl md:text-4xl font-bold mb-8 tracking-wider">
              2025 DOTS COLLECTION
              <br />
              <span className="text-lg opacity-50 font-normal">
                CLICK THE PICTURE TO LEARN MORE
              </span>
            </div>
          </motion.div>

          {/* 背景動畫 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-black" />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </section>

        {/* 圖片區域 */}
        {[
          { img: "image/cover/computer/new-stuff-1.jpg", text: "THE NEW" },
          { img: "image/cover/computer/new-stuff-2.jpg", text: "SS2025" },
          { img: "image/cover/computer/new-stuff-3.jpg", text: "COLLECTION" },
        ].map((src, idx) => (
          <Link to={`/products/category/NEW`}>
            <Vertical key={idx} id={src} />
          </Link>
        ))}

        {/* 結尾區域 */}
        <section className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <div className="flex flex-col  items-center">
              <img
                src="/image/dots_logo.png"
                className="max-w-[560px] lg:max-w-5xl"
              />
              <Link
                to={`/products/category/NEW`}
                className="bg-white w-[40%] max-w-[480px] px-8 py-4 cursor-pointer text-xl font-semibold rounded-4xl relative top-[-3rem] hover:bg-black hover:text-white hover:border-2 hover:border-white"
              >
                <div>Learn More</div>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 滾動進度條 */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-gray-600 to-black transform-origin-left z-50"
          style={{ scaleX }}
        />
      </div>
    </main>
  );
}
