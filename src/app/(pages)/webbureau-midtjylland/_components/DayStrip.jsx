import { FadeUp } from "../../../components/home/fx/Reveal";

/**
 * Forløbet som en dagsstribe (gantt). Pakkernes leveringstid kommer fra de samme tal som på prissiden:
 * Landingside 2 dage, Basis 5 dage, Standard 10 dage.
 */
const DAYS = 10;
const rows = [
  { name: "Landingside", days: 2, price: "2.500 kr" },
  { name: "Basis", days: 5, price: "4.500 kr" },
  { name: "Standard", days: 10, price: "8.500 kr" },
];

export default function DayStrip() {
  return (
    <FadeUp className="rounded-3xl bg-[#242828] border border-white/10 p-5 sm:p-9 overflow-x-auto">
      <div className="min-w-[640px]">
        {/* dagsakse */}
        <div className="grid items-end gap-0 pl-[150px] mb-3" style={{ gridTemplateColumns: `repeat(${DAYS}, minmax(0, 1fr))` }}>
          {Array.from({ length: DAYS }, (_, i) => (
            <span key={i} className="text-[12px] text-[#8a9696] tabular-nums border-l border-white/10 pl-2">
              {i + 1}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {rows.map((r) => (
            <div key={r.name} className="grid items-center" style={{ gridTemplateColumns: `150px 1fr` }}>
              <div>
                <p className="text-[14px] font-semibold text-white">{r.name}</p>
                <p className="text-[12px] text-[#8a9696]">{r.price}</p>
              </div>
              <div className="relative h-11 rounded-xl bg-white/[0.04] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-xl bg-[#00a8e8] flex items-center justify-end pr-3"
                  style={{ width: `${(r.days / DAYS) * 100}%` }}
                >
                  <span className="text-[13px] font-semibold text-white">{r.days} dage</span>
                </div>
                {/* designudkast efter 48 timer */}
                <span
                  aria-hidden
                  className="absolute top-1 bottom-1 w-[3px] rounded-full bg-white/80"
                  style={{ left: `${(2 / DAYS) * 100}%`, display: r.days > 2 ? "block" : "none" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pl-[150px] flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-[#b4bdbd]">
          <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#00a8e8]" /> Fra aftale til live</span>
          <span className="inline-flex items-center gap-2"><span className="w-[3px] h-3.5 rounded-full bg-white/80" /> Første designudkast (48 timer)</span>
        </div>
      </div>
      <p className="mt-6 text-[13px] text-[#8a9696] leading-snug">Den samlede tid afhænger også af, hvor hurtigt du leverer tekster og billeder.</p>
    </FadeUp>
  );
}
