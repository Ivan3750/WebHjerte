import { FadeUp } from "../../../components/home/fx/Reveal";

/** Typiske fejl som før/efter i Googles søgeresultat – konkrete eksempler i stedet for en punktliste. */
const rows = [
  {
    mistake: "Titlen er bare “Forside”",
    before: { url: "dinvirksomhed.dk", title: "Forside", text: "Velkommen til vores hjemmeside. Læs mere om os og vores ydelser." },
    after: { url: "dinvirksomhed.dk › akut-vvs", title: "Akut VVS i Horsens – ring og få hjælp i dag", text: "Vi kommer typisk samme dag. Fast pris på udrykning. Ring direkte, eller skriv til os." },
  },
  {
    mistake: "Én side forsøger at rangere på alt",
    before: { url: "dinvirksomhed.dk", title: "Firma | VVS, varme, bad, gas, el", text: "Vi laver alt inden for VVS, varme, bad, gas og meget mere." },
    after: { url: "dinvirksomhed.dk › badevaerelse", title: "Nyt badeværelse i Horsens – fra tilbud til færdig", text: "Se priser, tidsplan og eksempler på færdige badeværelser. Få et fast tilbud." },
  },
];

function Snippet({ s, good }) {
  return (
    <div className={`rounded-2xl p-5 border ${good ? "bg-white border-[#00a8e8]/40 shadow-[0_0_0_4px_rgba(0,168,232,0.08)]" : "bg-[#f1f0f0] border-[#e2e0e0]"}`}>
      <p className="text-[12px] text-[#6a6a6a] truncate">{s.url}</p>
      <p className={`text-[17px] leading-snug mt-1 ${good ? "text-[#1a5fb4] font-semibold" : "text-[#7a7a7a]"}`}>{s.title}</p>
      <p className="text-[13.5px] text-[#4a4a4a] mt-1.5 leading-[1.55]">{s.text}</p>
    </div>
  );
}

export default function SnippetDiff() {
  return (
    <div className="flex flex-col gap-10">
      {rows.map((r, i) => (
        <FadeUp key={r.mistake} delay={i * 0.08}>
          <p className="text-[15px] font-semibold text-[#1c1e1e] mb-4 flex items-center gap-3">
            <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-[#ffe3e0] text-[#b3261e]">Fejl</span>
            {r.mistake}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
            <div>
              <p className="text-[12px] font-semibold text-[#8a8a8a] mb-2">Før</p>
              <Snippet s={r.before} />
            </div>
            <span aria-hidden className="hidden md:block text-[#00a8e8] text-[26px]">→</span>
            <div>
              <p className="text-[12px] font-semibold text-[#007aab] mb-2">Efter</p>
              <Snippet s={r.after} good />
            </div>
          </div>
        </FadeUp>
      ))}
      <FadeUp>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 pt-6 border-t border-[#dcdada] text-[15px] text-[#4a4a4a]">
          {[
            "Langsom mobilside med tunge billeder",
            "Manglende eller forkert Google Virksomhedsprofil",
            "Ingen interne links mellem siderne",
            "Ingen måling – man ved ikke, hvad der virker",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span aria-hidden className="text-[#b3261e]">✕</span>
              {t}
            </li>
          ))}
        </ul>
      </FadeUp>
    </div>
  );
}
