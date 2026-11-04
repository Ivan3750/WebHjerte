"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Tæller op til `to`, når elementet kommer til syne. */
export default function CountUp({ to, prefix = "", suffix = "", duration = 1.6, format }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  const rounded = Math.round(val);
  const text = format ? format(rounded) : rounded.toLocaleString("da-DK");
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
