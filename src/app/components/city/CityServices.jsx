import Link from "next/link";
import SectionHead from "../ui/SectionHead";
import { PrimaryLink, GhostLink } from "../ui/PageHero";
import { FadeUp } from "../home/fx/Reveal";
import { ArrowIcon } from "../ui/ArrowIcon";
import { visibleLinks } from "../../data/hidden";

/**
 * "Det kan jeg lave til dig" – sælger ydelserne på by-/områdesiderne.
 * Hvert kort fortæller, hvad kunden får ud af det, og linker videre til ydelsessiden.
 * Ingen kronebeløb (priser står kun under Services, se docs/design-regler.md).
 */
const SERVICES = [
  {
    href: "/skraeddersyede-hjemmesider",
    tag: "Mest valgt",
    title: "Ny hjemmeside, der giver henvendelser",
    text: "Hurtig, mobilvenlig og bygget op om én ting: at den besøgende ringer, booker eller skriver til dig.",
    cta: "Se hjemmesider",
  },
  {
    href: "/wordpress-hjemmeside",
    title: "WordPress – du retter selv",
    text: "Samme design og hastighed, men du kan selv skifte tekster, billeder og priser, når det passer dig.",
    cta: "Se WordPress",
  },
  {
    href: "/webshop-hjemmeside",
    title: "Webshop, der sælger døgnet rundt",
    text: "Produkter, kurv, betaling og fragt sat op fra start – så du kan sælge, også når butikken er lukket.",
    cta: "Se webshops",
  },
  {
    href: "/seo-horsens",
    title: "Lokal SEO og Google-profil",
    text: "Bliv fundet, når kunder i dit område søger på det, du laver – uden at betale for annoncer hver måned.",
    cta: "Se lokal SEO",
  },
  {
    href: "/ai-chatbot-til-hjemmeside",
    title: "AI-chatbot, der svarer for dig",
    text: "Svarer på de faste spørgsmål og booker tider med det samme – også om aftenen og i weekenden.",
    cta: "Se AI-chatbot",
  },
  {
    href: "/ai-seo",
    title: "AI SEO",
    text: "Bliv nævnt, når kunder spørger ChatGPT og Google AI efter en virksomhed som din.",
    cta: "Se AI SEO",
  },
];

export default function CityServices({ city, skip = [], dark = false }) {
  const items = visibleLinks(SERVICES.filter((s) => !skip.includes(s.href)));
  if (!items.length) return null;

  return (
    <section className={`scene ${dark ? "bg-[#1c1e1e]" : "bg-[#f7f6f6]"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          dark={dark}
          lines={[`Det kan jeg lave til`, `din virksomhed i ${city}`]}
          lead="Vælg det, du mangler – eller få det hele samlet hos én person. Du får en fast pris på skrift, før vi går i gang, og et første designudkast efter 48 timer."
          maxW="max-w-[26ch]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((s, i) => (
            <FadeUp key={s.href} delay={(i % 3) * 0.06} className="h-full">
              <Link
                href={s.href}
                className={`group h-full rounded-3xl p-6 sm:p-7 flex flex-col gap-3 border transition-colors ${
                  dark
                    ? "bg-white/[0.03] border-white/10 hover:border-[#00a8e8]/60"
                    : "bg-white border-[#e8e6e6] hover:border-[#00a8e8]/50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`text-[18px] font-semibold leading-snug tracking-tight ${dark ? "text-white" : "text-[#1c1e1e]"}`}>{s.title}</h3>
                  {s.tag && (
                    <span className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00a8e8] text-white">{s.tag}</span>
                  )}
                </div>
                <p className={`text-[15px] leading-relaxed flex-1 ${dark ? "text-[#b4bdbd]" : "text-[#5a5a5a]"}`}>{s.text}</p>
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#00a8e8]">
                  {s.cta}
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-10 flex flex-wrap items-center gap-3">
          <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
          <GhostLink href="/services#priser" light={!dark}>Se faste priser</GhostLink>
        </FadeUp>
      </div>
    </section>
  );
}
