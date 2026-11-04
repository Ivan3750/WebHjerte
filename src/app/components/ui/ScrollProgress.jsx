"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Tynd blå læsefremgang i toppen af siden. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-[#00a8e8] z-[1000]"
    />
  );
}
