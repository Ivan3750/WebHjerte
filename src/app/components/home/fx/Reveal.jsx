"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Blød "mask-reveal" – tekst glider op bag en maske, linje for linje.
 * Bruges til overskrifter, så de føles redaktionelle (Notion / Shopify-agtigt).
 */
export function RevealLines({ lines, className = "", delay = 0, as = "h2" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.h2;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.09, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 },
              show: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Fade + løft ind i viewport, med mulighed for forsinkelse. */
export function FadeUp({ children, className = "", delay = 0, y = 32, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
