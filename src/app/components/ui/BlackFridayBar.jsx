"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BLACK_FRIDAY, isBlackFridayLive } from "../../data/campaign";

// Smal bjælke øverst på alle sider. Skjules af sig selv, når kampagnen udløber.
export default function BlackFridayBar() {
  const [live, setLive] = useState(isBlackFridayLive());
  useEffect(() => setLive(isBlackFridayLive()), []);
  if (!live) return null;

  return (
    <div className="bg-[#00a8e8] text-[#0b1213] text-center text-[13px] sm:text-[14px] font-semibold px-4 py-2.5">
      <Link href={BLACK_FRIDAY.pageHref} className="hover:underline underline-offset-2">
        Black Friday: {BLACK_FRIDAY.discount}% rabat på alle ydelser til og med {BLACK_FRIDAY.endLabel}
        <span aria-hidden> →</span>
      </Link>
    </div>
  );
}
