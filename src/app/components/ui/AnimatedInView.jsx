'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createElement } from 'react';

// Motion-komponenter oprettes én gang pr. tag (ikke ved hvert render),
// ellers genmonteres elementet og animationen nulstilles.
const motionTags = {};
const getMotionTag = (tag) => {
  if (!motionTags[tag]) motionTags[tag] = motion.create(tag);
  return motionTags[tag];
};

const AnimatedInView = ({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  offsetY = 30,
}) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = getMotionTag(as);

  return createElement(
    MotionTag,
    {
      initial: { opacity: 0, y: reduceMotion ? 0 : offsetY },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: reduceMotion ? 0 : duration, delay },
      viewport: { once: true },
      className,
    },
    children
  );
};

export default AnimatedInView;
