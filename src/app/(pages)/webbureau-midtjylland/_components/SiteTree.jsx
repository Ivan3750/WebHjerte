import { FadeUp } from "../../../components/home/fx/Reveal";

/** Tegning af forskellen på én forside og en struktur med ydelses- og områdesider. */
function Node({ children, strong, dim }) {
  return (
    <span
      className={`inline-block rounded-xl px-3.5 py-2 text-[13px] font-semibold border ${
        strong ? "bg-[#00a8e8] text-white border-[#00a8e8]" : dim ? "bg-transparent text-[#8a9696] border-dashed border-[#c9c7c7]" : "bg-white text-[#1c1e1e] border-[#d9d7d7]"
      }`}
    >
      {children}
    </span>
  );
}

export default function SiteTree() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <FadeUp className="rounded-3xl bg-[#eceeee] p-7 sm:p-9">
        <p className="text-[13px] font-semibold text-[#7a7a7a] mb-6">Én generel forside</p>
        <div className="flex flex-col items-start gap-3">
          <Node strong>Forside – alt på én side</Node>
          <div className="flex flex-wrap gap-2 pl-6 border-l-2 border-dashed border-[#c9c7c7]">
            <Node dim>Hele Midtjylland?</Node>
            <Node dim>Alle ydelser?</Node>
          </div>
        </div>
        <p className="mt-6 text-[14.5px] text-[#4a4a4a] leading-[1.7] max-w-[40ch]">Google kan ikke se, hvad siden helt præcist er det bedste svar på.</p>
      </FadeUp>
      <FadeUp delay={0.1} className="rounded-3xl bg-[#1c1e1e] p-7 sm:p-9">
        <p className="text-[13px] font-semibold text-[#00a8e8] mb-6">Ydelser og områder</p>
        <div className="flex flex-col items-start gap-3">
          <Node strong>Forside</Node>
          <div className="flex flex-col gap-3 pl-6 border-l-2 border-[#00a8e8]/50">
            {[["Ydelse A", ["Aarhus", "Silkeborg", "Vejle"]], ["Ydelse B", ["Randers", "Viborg"]]].map(([y, a]) => (
              <div key={y} className="flex flex-col gap-2">
                <Node>{y}</Node>
                <div className="flex flex-wrap gap-2 pl-4">
                  {a.map((c) => (
                    <span key={c} className="rounded-lg bg-white/10 text-white text-[12.5px] px-3 py-1.5">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[14.5px] text-[#b4bdbd] leading-[1.7] max-w-[40ch]">Hver søgning får en side, der svarer præcis på den – og kunden i Silkeborg ser, at du dækker Silkeborg.</p>
      </FadeUp>
    </div>
  );
}
