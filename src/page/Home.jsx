import Intro from "../compenents/Intro";
import Description from "../compenents/Description";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Vertical from "../compenents/Vertical";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="bg-white">
      <Intro />
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8">視差畫廊</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              滾動探索視差動畫效果
            </p>
          </motion.div>

          {/* 背景動畫 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
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
        {[1, 2, 3, 4, 5].map((imageId) => (
          <Vertical key={imageId} id={imageId} />
        ))}

        {/* 結尾區域 */}
        <section className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">感謝觀看</h2>
            <p className="text-lg text-gray-400">視差滾動動畫展示完成</p>
          </motion.div>
        </section>

        {/* 滾動進度條 */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-blue-500 transform-origin-left z-50"
          style={{ scaleX }}
        />
      </div>
    </main>
  );
}
