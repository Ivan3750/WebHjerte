/**
 * Hero-illustration: Googles lokale resultat (kort + tre virksomheder), hvor "Din virksomhed" står øverst.
 * Ren markup – ingen JS. Alle navne er eksempler.
 */
const rows = [
  { n: 1, name: "Din virksomhed", meta: "Elektriker · Horsens", stars: "4,9", count: 87, open: "Åbent · lukker 17", you: true },
  { n: 2, name: "Konkurrent A", meta: "Elektriker · Horsens", stars: "4,6", count: 31, open: "Åbent · lukker 16" },
  { n: 3, name: "Konkurrent B", meta: "Elektriker · Brædstrup", stars: "4,3", count: 12, open: "Lukket · åbner i morgen" },
];

export default function LocalPack() {
  return (
    <div className="rounded-3xl bg-white border border-[#e8e6e6] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="px-5 py-3.5 border-b border-[#ececec] flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <div className="ml-3 flex-1 rounded-full bg-[#f1f0f0] px-4 py-2 text-[14px] text-[#1c1e1e] truncate">elektriker horsens</div>
      </div>

      {/* Kort */}
      <div className="relative h-[170px] bg-[#e6eef0] overflow-hidden" aria-hidden>
        <svg viewBox="0 0 400 170" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="170" fill="#e6eef0" />
          <path d="M-10 120 C 80 100, 140 150, 230 118 S 360 70, 420 90" stroke="#fff" strokeWidth="14" fill="none" />
          <path d="M60 -10 C 90 50, 70 100, 120 180" stroke="#fff" strokeWidth="10" fill="none" />
          <path d="M290 -10 C 280 40, 320 90, 300 180" stroke="#fff" strokeWidth="8" fill="none" />
          <path d="M-10 40 L 420 24" stroke="#f4f7f7" strokeWidth="6" fill="none" />
          <path d="M150 -10 C 170 60, 200 70, 260 62" stroke="#f4f7f7" strokeWidth="5" fill="none" />
          <ellipse cx="338" cy="140" rx="48" ry="26" fill="#cfe2d4" />
          <ellipse cx="46" cy="40" rx="34" ry="18" fill="#cfe2d4" />
        </svg>
        {[
          { x: "52%", y: "46%", you: true, n: 1 },
          { x: "27%", y: "64%", n: 2 },
          { x: "74%", y: "34%", n: 3 },
        ].map((p) => (
          <span
            key={p.n}
            style={{ left: p.x, top: p.y }}
            className={`absolute -translate-x-1/2 -translate-y-full flex items-center justify-center rounded-full text-[12px] font-bold text-white ${
              p.you ? "w-9 h-9 bg-[#00a8e8] ring-4 ring-[#00a8e8]/25" : "w-7 h-7 bg-[#8a9696]"
            }`}
          >
            {p.n}
            {p.you && <span className="absolute inset-0 rounded-full bg-[#00a8e8] animate-ping opacity-30" />}
          </span>
        ))}
      </div>

      {/* Virksomheder */}
      <ul className="divide-y divide-[#ececec]">
        {rows.map((r) => (
          <li key={r.n} className={`px-5 py-4 flex items-start gap-4 ${r.you ? "bg-[#00a8e8]/[0.07]" : ""}`}>
            <span className={`mt-0.5 w-6 shrink-0 text-[14px] font-bold tabular-nums ${r.you ? "text-[#00a8e8]" : "text-[#9a9a9a]"}`}>{r.n}</span>
            <div className="min-w-0">
              <p className={`text-[16px] leading-snug ${r.you ? "font-semibold text-[#1c1e1e]" : "text-[#1a5fb4]"}`}>{r.name}</p>
              <p className="text-[13px] text-[#5f5f5f] mt-0.5">
                <span className="text-[#e0a000]">★</span> {r.stars} ({r.count}) · {r.meta}
              </p>
              <p className="text-[12.5px] text-[#7a7a7a] mt-0.5">{r.open}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="px-5 py-3 text-[12px] text-[#7a7a7a] border-t border-[#ececec]">Illustration – navne og tal er eksempler.</p>
    </div>
  );
}
