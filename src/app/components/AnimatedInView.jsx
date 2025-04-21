'use client';
import { motion } from 'framer-motion';
import { createElement } from 'react';

const AnimatedInView = ({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  offsetY = 30,
}) => {
  const MotionTag = motion(as);

  return createElement(MotionTag, {
    initial: { opacity: 0, y: offsetY },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay },
    viewport: { once: true },
    className,
    children,
  });
};

export default AnimatedInView;
