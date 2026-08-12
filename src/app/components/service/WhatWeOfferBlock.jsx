import AnimatedInView from "../AnimatedInView";

const services = [
  {
    name: "Webdesign",
    desc: "Skræddersyet design, der matcher din virksomhed — ikke en genkendelig skabelon.",
    items: ["Unikt design", "Mobil først", "Brand-tilpasset"],
  },
  {
    name: "Udvikling",
    desc: "Bygget med moderne teknologi for hastighed, stabilitet og lang holdbarhed.",
    items: ["Next.js / React", "Hurtig indlæsning", "Sikker hosting"],
  },
  {
    name: "SEO",
    desc: "Struktur og indhold, der giver dig bedre forudsætninger for at ranke på Google.",
    items: ["Teknisk SEO", "Lokal søgning", "Google Business"],
  },
  {
    name: "Integrationer",
    desc: "Værktøjer du allerede bruger, koblet direkte på din nye hjemmeside.",
    items: ["CRM & booking", "Betaling", "Formularer & mail"],
  },
];

export default function WhatWeOfferBlock() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvad tilbyder vi?
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-14 max-w-[24ch]">
          Alt din virksomhed behøver — samlet ét sted
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <AnimatedInView
              key={s.name}
              as="div"
              className="rounded-2xl p-6 flex flex-col gap-4 bg-[#1c1e1e] border border-[#2a2d2d]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <p className="text-[15px] font-medium text-[#e0e0e0]">{s.name}</p>
                <p className="text-[12.5px] text-[#7a7a7a] leading-[1.7]">{s.desc}</p>
              </div>
              <hr className="border-[#2a2d2d]" />
              <div className="flex flex-col gap-1.5">
                {s.items.map((item) => (
                  <span key={item} className="text-[11px] text-[#5a5a5a]">
                    {item}
                  </span>
                ))}
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
