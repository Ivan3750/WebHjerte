"use client";

import { ArrowIcon } from "../../../components/ui/ArrowIcon";
import { useState } from "react";
import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { Panel, VisualSite, VisualShop, VisualChat, VisualSeo, VisualTickets, VisualDesign } from "../../../components/illustrations/Visuals";

const services = [
  {
    name: "Hjemmeside",
    Visual: VisualSite,
    color: "#00a8e8",
    desc: "En hjemmeside er ofte det første møde en potentiel kunde har med din virksomhed - og du har kun få sekunder til at gøre indtryk. Som webudvikler i Horsens bygger jeg sider, der ikke bare ser professionelle ud, men er strategisk opbygget til at guide besøgende mod handling. Fra struktur og tekst til farver og billeder - alt er tilpasset din branche og målgruppe, så siden føles som en naturlig forlængelse af din virksomhed, ikke en skabelon fra internettet.",
    items: ["Skræddersyet design", "Mobilvenlig", "Hurtig indlæsningstid", "Klar call-to-action", "Kontaktformular", "Optimeret struktur"],
  },
  {
    name: "Webshop",
    Visual: VisualShop,
    color: "#3ddc97",
    desc: "En webshop skal kunne sælge, selv når du sover, er på ferie, eller har travlt med andre ting. Jeg sætter hele salgsflowet op fra bunden - produktvisning, kurv, betaling, ordrebekræftelse og kvittering - så det hele føles gnidningsfrit for kunden og overskueligt for dig. Du får et system, hvor du selv nemt kan tilføje produkter, opdatere priser og følge med i ordrer, uden at skulle kontakte en udvikler for hver lille ændring.",
    items: ["Simpel administration", "Sikker betaling", "Lager & ordrestyring", "Automatiske kvitteringer", "Rabatkoder", "Fragtberegning"],
  },
  {
    name: "AI-integration",
    Visual: VisualChat,
    color: "#f0a63a",
    desc: "AI kan overtage de opgaver, der stjæler din tid hver eneste dag - besvare de samme spørgsmål igen og igen, booke tider, eller guide kunder til det rigtige produkt eller den rigtige service. Det bygges direkte ind på din side, trænes på information om din virksomhed, og føles naturligt for dine kunder at bruge. Resultatet er færre timer brugt på gentagne opgaver, og kunder der får svar med det samme - også uden for åbningstid.",
    items: ["Automatiske svar", "AI-booking", "Kundeservice 24/7", "Skræddersyet til dit brand", "Chatfunktion", "Lead-kvalificering"],
  },
  {
    name: "SEO-optimering",
    Visual: VisualSeo,
    color: "#8a8ff0",
    desc: "En hjemmeside gør ingen nytte, hvis ingen finder den. Jeg sørger for, at din side er teknisk optimeret helt fra bunden - hurtig indlæsning, korrekt struktur og mobilvenlighed - kombineret med indhold bygget op omkring de søgeord, dine kunder faktisk skriver på Google. Målet er, at du dukker op, når nogen i Horsens og omegn søger efter det, du tilbyder - uden at du skal betale for annoncer hver måned.",
    items: ["Teknisk SEO", "Lokal søgning", "Google Business", "Indholdsoptimering", "Nøgleordsanalyse", "Løbende rapportering"],
  },
  {
    name: "Vedligeholdelse & support",
    Visual: VisualTickets,
    color: "#e0678a",
    desc: "En hjemmeside er ikke 'færdig', bare fordi den er lanceret - software skal opdateres, sikkerhed skal overvåges, og fejl kan opstå uden varsel. Jeg holder løbende øje med din side, så du slipper for at bekymre dig om nedbrud, forældede systemer eller sikkerhedshuller. Får du brug for en ændring, en ny side eller bare et spørgsmål - så er jeg let at få fat i, ikke en anonym supportkø.",
    items: ["Løbende opdateringer", "Sikkerhedstjek", "Backup", "Hurtig fejlretning", "Direkte kontakt", "Månedlig statusrapport"],
  },
  {
    name: "Design & branding",
    Visual: VisualDesign,
    color: "#00c2a8",
    desc: "Dit visuelle udtryk er det, kunderne husker dig på - længe efter de har forladt din side. Jeg skaber en sammenhængende identitet med farver, typografi og stil, der matcher din virksomheds personlighed og målgruppe. Uanset om en kunde møder dig online, på et visitkort eller i en annonce, skal det føles genkendeligt og professionelt - det skaber tillid, før kunden overhovedet har talt med dig.",
    items: ["Logo & farvepalette", "Visuel identitet", "Konsistent branding", "Print & digitalt materiale", "Ikonografi", "Brand-guidelines"],
  },
];

export default function WhatWeOfferBlock() {
  const [active, setActive] = useState(0);

  return (
    <section className="scene bg-[#eceeee]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Hvad tilbyder jeg?"
          lines={["Alt din virksomhed behøver", "— samlet et sted"]}
          lead="Jeg hjælper små og mellemstore virksomheder i Horsens og Midtjylland med hjemmesider, webshops, SEO, AI-integration og løbende support — til en fast pris og med én kontaktperson hele vejen."
          maxW="max-w-[26ch]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-4 lg:gap-6">
          {/* Liste: vandret scroll på mobil, lodret på desktop */}
          <div
            role="tablist"
            aria-label="Services"
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-1 snap-x"
          >
            {services.map((s, i) => {
              const on = active === i;
              return (
                <button
                  key={s.name}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls={`service-panel-${i}`}
                  id={`service-tab-${i}`}
                  onClick={() => setActive(i)}
                  className={`snap-start shrink-0 lg:shrink lg:w-full flex items-center gap-3 rounded-2xl px-5 py-4 text-left border transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a8e8] ${
                    on
                      ? "bg-[#1c1e1e] border-[#1c1e1e] text-white"
                      : "bg-[#f7f6f6] border-[#eeecec] text-[#4a4a4a] hover:border-[#d4d2d2]"
                  }`}
                >
                  <span className="text-[11px] tabular-nums opacity-60">0{i + 1}</span>
                  <span className="text-[14px] font-medium whitespace-nowrap lg:whitespace-normal">{s.name}</span>
                  <span
                    className="ml-auto hidden lg:block w-2 h-2 rounded-full transition-opacity"
                    style={{ backgroundColor: s.color, opacity: on ? 1 : 0.35 }}
                  />
                </button>
              );
            })}
          </div>

          {/* Alle paneler ligger i HTML — kun det aktive er synligt (SEO: Google ser alle services). */}
          <div>
            {services.map((s, i) => (
              <div
                key={s.name}
                role="tabpanel"
                id={`service-panel-${i}`}
                aria-labelledby={`service-tab-${i}`}
                className={`${active === i ? "flex panel-in" : "hidden"} rounded-3xl p-7 sm:p-10 flex-col gap-6 bg-[#f7f6f6] border border-[#eeecec] min-h-[320px]`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                  <h3 className="text-[20px] font-semibold text-[#1c1e1e] tracking-tight">{s.name}</h3>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1.25fr_1fr] gap-6 xl:gap-8 items-start">
                  <div className="flex flex-col gap-6">
                <p className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-[62ch]">{s.desc}</p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {s.items.map((item) => (
                        <span key={item} className="text-[12px] text-[#4a4a4a] border border-[#e0dede] rounded-full px-3.5 py-1.5 bg-white">
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>
                  <Panel className="xl:order-2 order-first xl:order-none"><s.Visual /></Panel>
                </div>

                <Link
                  href="#priser"
                  className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#1c1e1e] hover:text-[#00a8e8] w-fit"
                >
                  Se priser
                  <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
