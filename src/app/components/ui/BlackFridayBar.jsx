"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BLACK_FRIDAY, isBlackFridayLive } from "../../data/campaign";
import { useCountdown } from "./Countdown";

// Smal bjælke øverst på alle sider med nedtælling. Skjules af sig selv, når kampagnen udløber.
export default function BlackFridayBar() {
  const [live, setLive] = useState(isBlackFridayLive());
  useEffect(() => setLive(isBlackFridayLive()), []);
  const t = useCountdown();
  if (!live || t?.done) return null;

  return (
    <div className="bg-[#00a8e8] text-[#0b1213] text-center text-[13px] sm:text-[14px] font-semibold px-4 py-2.5">
      <Link href={BLACK_FRIDAY.pageHref} className="hover:underline underline-offset-2">
        Black Friday −{BLACK_FRIDAY.discount}%
        {t && (
          <span className="tabular-nums">
            {" "}· slutter om {t.days}d {String(t.hours).padStart(2, "0")}t {String(t.minutes).padStart(2, "0")}m<span className="hidden sm:inline"> {String(t.seconds).padStart(2, "0")}s</span>
          </span>
        )}
        <span aria-hidden> →</span>
      </Link>
    </div>
  );
}
