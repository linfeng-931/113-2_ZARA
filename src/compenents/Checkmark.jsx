import { motion } from 'framer-motion';

export default function Checkmark() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      width="23"
      height="23"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="26"
        cy="26"
        r="25"
        fill="none"
        stroke="#FA347F"
        strokeWidth="2"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1 },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        fill="none"
        stroke="#FA347F"
        strokeWidth="4"
        d="M14 27 L22 35 L38 19"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </motion.svg>
  );
}