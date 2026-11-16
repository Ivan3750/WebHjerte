import { FadeUp } from "../../../components/home/fx/Reveal";

/** "Din ordre" som en kvittering – prisen og betingelserne på ét blik, med prikker mellem tekst og tal. */
const lines = [
  ["Landingside", "fra 2.500 kr"],
  ["Basis (3–5 sider)", "4.500 kr"],
  ["Standard", "8.500 kr"],
  ["Første designudkast", "48 timer"],
  ["Levering", "2–10 dage"],
  ["Support efter lancering", "30 dage"],
  ["SEO og mobiloptimering", "med fra start"],
  ["Kontakt", "direkte med udvikleren"],
];

export default function Receipt() {
  return (
    <FadeUp className="relative max-w-[460px] mx-auto lg:mx-0">
      <div className="bg-[#fbfaf6] text-[#1c1e1e] px-7 sm:px-9 pt-9 pb-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)] [font-variant-numeric:tabular-nums] -rotate-[1.2deg]">
        <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#7a7a7a]">WebHjerte · Horsens</p>
        <p className="text-[24px] font-semibold tracking-tight mt-1 mb-6">Din ordre</p>
        <ul className="flex flex-col gap-3.5">
          {lines.map(([a, b]) => (
            <li key={a} className="flex items-baseline gap-2 text-[15px]">
              <span className="shrink-0">{a}</span>
              <span aria-hidden className="flex-1 border-b-2 border-dotted border-[#1c1e1e]/25 translate-y-[-3px]" />
              <span className="shrink-0 font-semibold text-right">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 pt-5 border-t-2 border-[#1c1e1e]">
          <p className="flex justify-between items-baseline text-[15px] font-semibold">
            <span>Moms</span>
            <span>inkluderet</span>
          </p>
          <p className="mt-5 text-[14px] text-[#5f5f5f] leading-snug">Du kender prisen, før vi går i gang. Passer designet ikke, betaler du 0 kr for det.</p>
        </div>
      </div>
      {/* takket kant */}
      <div
        aria-hidden
        className="h-3 -mt-px -rotate-[1.2deg]"
        style={{ background: "linear-gradient(135deg, #fbfaf6 50%, transparent 50%) 0 0/16px 12px, linear-gradient(225deg, #fbfaf6 50%, transparent 50%) 0 0/16px 12px" }}
      />
    </FadeUp>
  );
}
