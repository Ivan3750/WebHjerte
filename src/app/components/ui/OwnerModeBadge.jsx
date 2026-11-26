"use client";

import { useEffect, useState } from "react";

// Lille mærke, så du kan se, at "ejer-tilstand" er slået til (analytics er slukket i denne browser).
// Tilstanden gemmes i localStorage ("wh_owner") og styres via ?owner=on / ?owner=off.
export default function OwnerModeBadge() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    try {
      setOn(localStorage.getItem("wh_owner") === "1");
      // Fjern ?owner=… fra adressen, så linket ikke deles ved en fejl
      const url = new URL(window.location.href);
      if (url.searchParams.has("owner")) {
        url.searchParams.delete("owner");
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      }
    } catch {}
  }, []);

  if (!on) return null;

  const turnOff = () => {
    try {
      localStorage.removeItem("wh_owner");
    } catch {}
    window.location.reload();
  };

  return (
    <div
      role="status"
      className="fixed bottom-3 left-3 z-[90] flex items-center gap-2 rounded-full bg-[#1c1e1e]/95 border border-[#00a8e8]/50 px-3 py-1.5 text-[11px] text-white shadow-lg"
    >
      <span className="w-2 h-2 rounded-full bg-[#3ddc97]" aria-hidden="true" />
      Ejer-tilstand: analytics er slukket
      <button type="button" onClick={turnOff} className="underline text-[#00a8e8] hover:text-white">
        Slå fra
      </button>
    </div>
  );
}
