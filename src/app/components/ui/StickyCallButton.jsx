"use client";

import { useState, useEffect } from "react";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="tel:+4542760577"
      className="btn-primary btn-sm fixed bottom-5 left-5 z-[998] md:hidden"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 1.5h2.5l1.5 3.5-2 1.5a10 10 0 004 4l1.5-2 3.5 1.5v2.5a1.5 1.5 0 01-1.5 1.5C7 15 1 9 1 3.5A1.5 1.5 0 012.5 1.5z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Ring nu
    </a>
  );
}
