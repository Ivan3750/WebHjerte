"use client";

import { ArrowIcon } from "../ui/ArrowIcon";
import { isHiddenHref } from "../../data/hidden";
import Link from "next/link";
import { FadeUp, RevealLines } from "./fx/Reveal";
import SpotlightCard from "./fx/SpotlightCard";
import { Panel, VisualSite, VisualShop, VisualChat, VisualSeo, VisualUptime, VisualDesign } from "../illustrations/Visuals";


const services = [
  {
    name: "Hjemmeside",
    href: "/skraeddersyede-hjemmesider",
    cta: "Se hjemmesider",
    span: "md:col-span-4",
    visual: <VisualSite />,
    desc: "Taber du kunder, fordi din hjemmeside ser gammeldags ud eller slet ikke findes? Jeg bygger en hjemmeside, der får dig til at se professionel ud fra sekund et - og konverterer besøgende til kunder.",
  },
  {
    name: "AI-integration",
    href: "/ai-loesninger",
    cta: "Se AI-løsninger",
    span: "md:col-span-2",
    visual: <VisualChat />,
    desc: "Forestil dig at aldrig gå glip af en kunde igen. Med AI der svarer, booker og hjælper automatisk, sparer du timer hver uge - og dine kunder får svar med det samme, 24/7.",
  },
  {
    name: "Webshop",
    href: "/webshop-hjemmeside",
    cta: "Se webshops",
    span: "md:col-span-2",
    visual: <VisualShop />,
    desc: "Klar til at sælge døgnet rundt - også mens du sover? Jeg bygger en webshop, der er nem at bruge for dine kunder og nem at administrere for dig. Ingen tekniske hovedpiner.",
  },
  {
    name: "SEO-optimering",
    href: "/seo-horsens",
    cta: "Se SEO",
    span: "md:col-span-2",
    visual: <VisualSeo />,
    desc: "Den flotteste hjemmeside er værdiløs, hvis ingen finder den. Jeg optimerer din side, så du rangerer højere på Google og får flere kunder - helt organisk, uden dyre annoncer.",
  },
  {
    name: "Vedligeholdelse & support",
    href: "/hosting-og-vedligeholdelse",
    cta: "Se vedligeholdelse",
    span: "md:col-span-2",
    visual: <VisualUptime />,
    desc: "Ingen stress, hvis noget går ned. Jeg holder øje med din side hver dag - sikkerhed, opdateringer og drift - så du altid kan fokusere 100% på din forretning.",
  },
  {
    name: "Design & branding",
    href: "/webdesign-horsens",
    cta: "Se webdesign",
    span: "md:col-span-6",
    wide: true,
    visual: <VisualDesign />,
    desc: "Første indtryk tæller. Jeg skaber et design, der får din virksomhed til at se seriøs, troværdig og unik ud - så kunderne vælger dig frem for konkurrenten.",
  },
];

const TilbydeSection = () => {
  return (
    <section className="scene bg-[#f7f6f6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <RevealLines
              lines={["Hvad kan jeg", "hjælpe med?"]}
              className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.08] text-[clamp(24px,2.6vw,34px)]"
            />
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="btn-ghost btn-ghost-light"
            >
              Se alle priser
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map(({ name, desc, visual, span, wide, href, cta }, idx) => (
            <FadeUp key={name} delay={(idx % 3) * 0.08} className={span}>
              <SpotlightCard
                dark={false}
                className="h-full rounded-3xl bg-white border border-[#e8e6e6]"
              >
                <div className={`flex flex-col h-full ${wide ? "md:flex-row md:items-center" : ""}`}>
                  <div className={`m-2.5 ${wide ? "md:w-[44%] md:shrink-0" : ""}`}>
                    <Panel>{visual}</Panel>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
                    <p className="text-[16px] font-semibold text-[#1c1e1e]">{name}</p>
                    <p className="text-[15px] text-[#6a6a6a] leading-[1.75]">{desc}</p>
                    <div className="mt-auto pt-3">
                      {!isHiddenHref(href) && (
                        <Link
                        href={href}
                        className="btn-primary"
                      >
                        {cta}
                      </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TilbydeSection;
