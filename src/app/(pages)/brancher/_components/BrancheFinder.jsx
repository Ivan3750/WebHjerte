"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BRANCHES, BRANCH_GROUPS, branchHref } from "../../../data/branches";
import { ArrowBadge } from "../../../components/ui/ArrowIcon";

const ease = [0.16, 1, 0.3, 1];
const norm = (t) => t.toLowerCase().trim();

const Ico = ({ d, className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/**
 * Find din branche: skriv fx "frisør" eller "maler", eller vælg en gruppe.
 * Alle kort ligger i HTML'en (også de filtrerede) via kortlisten under – så Google kan læse dem.
 */
export default function BrancheFinder() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("alle");

  const list = useMemo(() => {
    const t = norm(q);
    return BRANCHES.filter((b) => {
      if (group !== "alle" && b.group !== group) return false;
      if (!t) return true;
      return [b.name, b.hook, ...b.words].some((w) => norm(w).includes(t));
    });
  }, [q, group]);

  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="flex flex-col gap-5 mb-10">
          <label htmlFor="branche-soeg" className="text-[clamp(22px,2.4vw,30px)] font-semibold tracking-tight text-[#1c1e1e] leading-tight">
            Hvad laver din virksomhed?
          </label>
          <div className="relative max-w-xl">
            <svg viewBox="0 0 24 24" className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#8a8a8a]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" />
            </svg>
            <input
              id="branche-soeg"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Fx frisør, maler, fysioterapeut, bilværksted …"
              className="w-full rounded-full bg-white border border-[#e4e2e2] pl-12 pr-5 py-4 text-[15.5px] text-[#1c1e1e] placeholder:text-[#9a9a9a] outline-none focus:border-[#00a8e8] transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Vælg gruppe">
            {[{ id: "alle", label: "Alle" }, ...BRANCH_GROUPS].map((g) => (
              <button
                key={g.id}
                type="button"
                aria-pressed={group === g.id}
                onClick={() => setGroup(g.id)}
                className={`rounded-full border px-4 py-2 text-[13.5px] transition-colors ${group === g.id ? "bg-[#1c1e1e] border-transparent text-white" : "bg-white border-[#e4e2e2] text-[#3a3a3a] hover:border-[#c9c9c9]"}`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {list.map((b) => (
              <motion.li
                key={b.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease }}
              >
                <Link
                  href={branchHref(b)}
                  className="group relative flex h-full flex-col rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#00a8e8]/50 focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
                >
                  <span aria-hidden className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#00a8e8]/0 group-hover:bg-[#00a8e8]/10 blur-2xl transition-colors duration-500" />
                  <span className="w-12 h-12 rounded-2xl bg-[#e4f0f7] text-[#007fb5] flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#00a8e8] group-hover:text-white group-hover:-rotate-6">
                    <Ico d={b.icon} />
                  </span>
                  <p className="text-[19px] font-semibold text-[#1c1e1e] leading-snug">{b.name}</p>
                  <p className="text-[14.5px] text-[#5f5f5f] leading-[1.65] mt-2">{b.hook}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {b.bullets.map((x) => (
                      <li key={x} className="flex gap-2.5 items-start text-[13.5px] text-[#3a3a3a]">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#00a8e8] shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 pt-5 border-t border-[#efeded] flex items-center justify-between">
                    <span className="text-[13px] font-medium text-[#3a3a3a]">Se siden til {b.short.toLowerCase() === "vvs" ? "VVS" : b.short.toLowerCase()}</span>
                    <ArrowBadge size="sm" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {list.length === 0 && (
          <div className="rounded-3xl bg-white border border-dashed border-[#d6d4d4] p-8 sm:p-10 text-center">
            <p className="text-[19px] font-semibold text-[#1c1e1e]">Ingen side til “{q}” – endnu</p>
            <p className="text-[15px] text-[#5f5f5f] leading-[1.7] max-w-[52ch] mx-auto mt-3">
              Principperne er de samme i alle brancher: fortæl hurtigt, hvad du laver, vis tillid og gør det let at kontakte dig. Skriv kort om din virksomhed, så tilpasser jeg en side til netop dit område.
            </p>
            <Link href="/kontakt" className="btn-primary mt-6">
              Fortæl om din virksomhed
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
