"use client";

import { useState } from "react";
import AnimatedInView from "../../utils/AnimatedInView";
const services = [
  {
    name: "Hjemmeside",
    color: "#00a8e8",
    desc: "En hjemmeside er ofte det første møde en potentiel kunde har med din virksomhed - og du har kun få sekunder til at gøre indtryk. Jeg bygger sider, der ikke bare ser professionelle ud, men er strategisk opbygget til at guide besøgende mod handling. Fra struktur og tekst til farver og billeder - alt er tilpasset din branche og målgruppe, så siden føles som en naturlig forlængelse af din virksomhed, ikke en skabelon fra internettet.",
    items: ["Skræddersyet design", "Mobilvenlig", "Hurtig indlæsningstid", "Klar call-to-action", "Kontaktformular", "Optimeret struktur"],
  },
  {
    name: "Webshop",
    color: "#3ddc97",
    desc: "En webshop skal kunne sælge, selv når du sover, er på ferie, eller har travlt med andre ting. Jeg sætter hele salgsflowet op fra bunden - produktvisning, kurv, betaling, ordrebekræftelse og kvittering - så det hele føles gnidningsfrit for kunden og overskueligt for dig. Du får et system, hvor du selv nemt kan tilføje produkter, opdatere priser og følge med i ordrer, uden at skulle kontakte en udvikler for hver lille ændring.",
    items: ["Simpel administration", "Sikker betaling", "Lager & ordrestyring", "Automatiske kvitteringer", "Rabatkoder", "Fragtberegning"],
  },
  {
    name: "AI-integration",
    color: "#f0a63a",
    desc: "AI kan overtage de opgaver, der stjæler din tid hver eneste dag - besvare de samme spørgsmål igen og igen, booke tider, eller guide kunder til det rigtige produkt eller den rigtige service. Det bygges direkte ind på din side, trænes på information om din virksomhed, og føles naturligt for dine kunder at bruge. Resultatet er færre timer brugt på gentagne opgaver, og kunder der får svar med det samme - også uden for åbningstid.",
    items: ["Automatiske svar", "AI-booking", "Kundeservice 24/7", "Skræddersyet til dit brand", "Chatfunktion", "Lead-kvalificering"],
  },
  {
    name: "SEO-optimering",
    color: "#8a8ff0",
    desc: "En hjemmeside gør ingen nytte, hvis ingen finder den. Jeg sørger for, at din side er teknisk optimeret helt fra bunden - hurtig indlæsning, korrekt struktur og mobilvenlighed - kombineret med indhold bygget op omkring de søgeord, dine kunder faktisk skriver på Google. Målet er, at du dukker op, når nogen i dit lokalområde søger efter det, du tilbyder - uden at du skal betale for annoncer hver måned.",
    items: ["Teknisk SEO", "Lokal søgning", "Google Business", "Indholdsoptimering", "Nøgleordsanalyse", "Løbende rapportering"],
  },
  {
    name: "Vedligeholdelse & support",
    color: "#e0678a",
    desc: "En hjemmeside er ikke 'færdig', bare fordi den er lanceret - software skal opdateres, sikkerhed skal overvåges, og fejl kan opstå uden varsel. Jeg holder løbende øje med din side, så du slipper for at bekymre dig om nedbrud, forældede systemer eller sikkerhedshuller. Får du brug for en ændring, en ny side eller bare et spørgsmål - så er jeg let at få fat i, ikke en anonym supportkø.",
    items: ["Løbende opdateringer", "Sikkerhedstjek", "Backup", "Hurtig fejlretning", "Direkte kontakt", "Månedlig statusrapport"],
  },
  {
    name: "Design & branding",
    color: "#00c2a8",
    desc: "Dit visuelle udtryk er det, kunderne husker dig på - længe efter de har forladt din side. Jeg skaber en sammenhængende identitet med farver, typografi og stil, der matcher din virksomheds personlighed og målgruppe. Uanset om en kunde møder dig online, på et visitkort eller i en annonce, skal det føles genkendeligt og professionelt - det skaber tillid, før kunden overhovedet har talt med dig.",
    items: ["Logo & farvepalette", "Visuel identitet", "Konsistent branding", "Print & digitalt materiale", "Ikonografi", "Brand-guidelines"],
  },
];

export default function WhatWeOfferBlock() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvad tilbyder jeg?
        </p>
        <h2 className="title text-[#1a1a1a] !leading-tight !mb-14 max-w-[24ch]">
          Alt din virksomhed behøver — samlet et sted
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-4">
          {/* Left: clickable service list */}
          <div className="flex flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`group rounded-2xl flex items-center justify-between gap-4 px-5 py-5 border-2 text-left transition-colors ${
                  active === i
                    ? "bg-[#f0f0f0] border-[#e0e0e0]"
                    : "bg-[#f7f6f6] border-[#f7f6f6] hover:bg-[#f0f0f0]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-opacity"
                    style={{
                      backgroundColor: s.color,
                      opacity: active === i ? 1 : 0.35,
                    }}
                  />
                  <span className="text-[14px] font-medium text-[#5a5a5a] transition-colors">
                    {s.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: expanded detail panel */}
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6 bg-[#f7f6f6] border-2 border-[#e8e8e8] min-h-[280px]">
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: current.color, boxShadow: `0 0 14px 2px ${current.color}66` }}
              />
              <p className="text-[18px] font-medium text-[#5a5a5a]">{current.name}</p>
            </div>

            <p className="text-[13.5px] text-[#7a7a7a] leading-[1.85] max-w-[46ch]">
              {current.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {current.items.map((item) => (
                <span
                  key={item}
                  className="text-[11.5px] text-[#7a7a7a] border border-[#dcdcdc] rounded-full px-3.5 py-1.5 bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}