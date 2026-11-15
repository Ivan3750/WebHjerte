"use client";

import { ArrowIcon } from "../ui/ArrowIcon";
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
              className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.08] text-[clamp(26px,3.6vw,46px)]"
            />
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-[#1c1e1e] border border-[#dcdada] bg-white rounded-full px-5 py-2.5 hover:border-[#00a8e8] hover:text-[#00a8e8]"
            >
              Se alle priser
              <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map(({ name, desc, visual, span, wide, href, cta }, idx) => (
            <FadeUp key={name} delay={(idx % 3) * 0.08} className={span}>
              <SpotlightCard
                dark={false}
                className="h-full rounded-3xl bg-white border border-[#e8e6e6] hover:border-[#cfe9f5] transition-colors duration-500"
              >
                <div className={`flex flex-col h-full ${wide ? "md:flex-row md:items-center" : ""}`}>
                  <div className={`m-2.5 ${wide ? "md:w-[44%] md:shrink-0" : ""}`}>
                    <Panel>{visual}</Panel>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
                    <p className="text-[16px] font-semibold text-[#1c1e1e]">{name}</p>
                    <p className="text-[13px] text-[#6a6a6a] leading-[1.75]">{desc}</p>
                    <div className="mt-auto pt-3">
                      <Link
                        href={href}
                        className="group/btn inline-flex w-fit items-center gap-2 rounded-full bg-[#00a8e8] pl-5 pr-1.5 py-1.5 text-[12.5px] font-medium text-white hover:bg-[#1c1e1e] transition-colors"
                      >
                        {cta}
                        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <ArrowIcon className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                        </span>
                      </Link>
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
