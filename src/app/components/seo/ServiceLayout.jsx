import Image from "next/image";
import Link from "next/link";
import { PrimaryLink, GhostLink } from "../ui/PageHero";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import { FaqSplit } from "../landing/shared";
import CasesCarousel from "../home/CasesCarousel";
import FormToLead from "../ui/FormToLead";
import { slugify } from "./ContentBlocks";
import { withoutPrices } from "../../lib/prices";

/**
 * Enkel ydelsesside (se docs/design-regler.md):
 *  hero med foto → "Det får du" → foto + løfter → få, store tekstafsnit → cases → FAQ → formular.
 * Ingen gradienter, tabeller, trin, nummerering, små kort eller priser (priser står kun på /services,
 * /ai-seo og /hosting-og-vedligeholdelse). Al tekst står i HTML'en.
 */
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";
const MAX_SECTIONS = 4;

export function Photo({ photo, className = "", priority = false }) {
  if (!photo) return null;
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[#2a2e2e] ${photo.portrait ? "aspect-[4/5]" : "aspect-[4/3]"} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 560px, 92vw"
        className={`object-cover ${photo.portrait ? "object-top" : ""}`}
      />
    </div>
  );
}

const Check = () => (
  <span aria-hidden className="mt-[7px] w-2 h-2 rounded-full bg-[#00a8e8] shrink-0" />
);

/** Tekst fra indholdsdata, uden tabeller og trin: afsnit, punkter og korte lister. */
function Body({ s, clean = (t) => t }) {
  const list0 = [
    ...(s.bullets || []),
    ...(s.cards || []).map((c) => `${c.title}: ${c.desc || c.text || ""}`),
    ...(s.compare ? [...(s.compare.good?.items || []), ...(s.compare.bad?.items || []).map((x) => `Undgå: ${x}`)] : []),
  ];
  const list = list0.map(clean).filter(Boolean);
  const paragraphs = [...(s.paragraphs || []), ...(s.after || [])].map(clean).filter(Boolean);
  return (
    <div className="readable flex flex-col gap-6">
      {paragraphs.map((t) => (
        <p key={t.slice(0, 40)} className="text-[17px] leading-[1.8] text-[#2f3436]">{t}</p>
      ))}
      {s.callout?.text && (
        <p className="text-[18px] leading-[1.7] text-[#1c1e1e] font-medium border-l-2 border-[#00a8e8] pl-5">{s.callout.text}</p>
      )}
      {list.length > 0 && (
        <ul className="flex flex-col gap-4">
          {list.map((t) => (
            <li key={t.slice(0, 50)} className="flex gap-4 text-[17px] leading-[1.7] text-[#2f3436]">
              <Check />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
      {s.cta && (
        <Link href={s.cta.href} className="self-start text-[15px] font-semibold text-[#007aab] border-b border-[#007aab]/40 hover:text-[#00a8e8]">
          {s.cta.label} →
        </Link>
      )}
    </div>
  );
}

// Afsnit, der kun består af trin, tabeller, tal eller billeder, vises ikke – heller ikke prisafsnit
// (priser står kun på /services, /ai-seo og /hosting-og-vedligeholdelse)
const PRICE_H2 = /^(pris|priser|hvad koster|pris og)/i;
const useful = (s, allowPrices) =>
  s.h2 && (allowPrices || !PRICE_H2.test(s.h2)) && (s.paragraphs?.length || s.bullets?.length || s.cards?.length || s.compare);



/** "Det får du" – store, læsbare punkter i to kolonner. */
export function OfferBlock({ offer, dark = false }) {
  if (!offer) return null;
  return (
    <section className={`scene ${dark ? "bg-[#1c1e1e]" : "bg-[#f7f6f6]"}`}>
      <div className={wrap}>
        <RevealLines lines={[offer.title]} className={`font-semibold tracking-tight leading-[1.1] text-[clamp(26px,3vw,40px)] max-w-[24ch] mb-12 sm:mb-16 ${dark ? "text-white" : "text-[#1c1e1e]"}`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {offer.items.map((it, i) => (
            <FadeUp key={it.title} delay={(i % 2) * 0.06} className={`py-8 border-t ${dark ? "border-white/15" : "border-[#1c1e1e]/15"}`}>
              <h3 className={`text-[clamp(20px,1.9vw,24px)] font-semibold leading-snug mb-3 ${dark ? "text-white" : "text-[#1c1e1e]"}`}>{it.title}</h3>
              <p className={`readable text-[17px] leading-[1.75] max-w-[52ch] ${dark ? "text-[#c4cccc]" : "text-[#3f4446]"}`}>{it.text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Foto + de faste løfter (direkte kontakt, 48 timer, du ejer det hele). */
export function PromiseBlock({ photo, summary, promise }) {
  return (
    <section className="scene bg-[#eceeee]">
      <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center`}>
        <FadeUp>
          <Photo photo={photo} className="max-w-[460px]" />
        </FadeUp>
        <div>
          <RevealLines lines={["Sådan arbejder jeg"]} className="font-semibold tracking-tight leading-[1.1] text-[clamp(26px,3vw,40px)] text-[#1c1e1e] mb-8" />
          {summary && (
            <FadeUp as="p" data-speakable className="readable text-[19px] leading-[1.7] text-[#1c1e1e] font-medium mb-6 max-w-[58ch]">
              {summary}
            </FadeUp>
          )}
          <div className="flex flex-col gap-4">
            {promise.map((t, i) => (
              <FadeUp as="p" key={t.slice(0, 30)} delay={i * 0.05} className="readable text-[17px] leading-[1.75] text-[#3f4446] max-w-[58ch]">
                {t}
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceLayout({ jsonLd, h1, intro, summary, sections = [], faqs = [], related = [], offer, promise, photos, extra, formTitle, allowPrices = false }) {
  const shown = sections.filter((s) => useful(s, allowPrices)).slice(0, MAX_SECTIONS);
  const text = allowPrices ? summary : withoutPrices(summary);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero med foto */}
      <section className="scene bg-[#1c1e1e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <RevealLines as="h1" lines={[h1]} className="maintitle !text-left !leading-[1.15] !text-[clamp(30px,3.6vw,48px)] mb-6 max-w-[22ch]" />
            <FadeUp as="p" delay={0.12} className="readable text-[17px] sm:text-[18px] text-[#c4cccc] leading-[1.75] max-w-[56ch] mb-9">
              {allowPrices ? intro : withoutPrices(intro)}
            </FadeUp>
            <FadeUp delay={0.2} className="flex flex-wrap gap-3">
              <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
              <GhostLink href="/portefolje">Se eksempler</GhostLink>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <Photo photo={photos?.hero} priority />
          </FadeUp>
        </div>
      </section>

      <OfferBlock offer={offer} />
      <PromiseBlock photo={photos?.work} summary={text} promise={promise} />

      {/* Få, store tekstafsnit */}
      {shown.map((s, i) => (
        <section key={s.h2} id={s.id || slugify(s.h2)} className={`scene ${i % 2 ? "bg-[#eceeee]" : "bg-[#f7f6f6]"} scroll-mt-20`}>
          <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20`}>
            <RevealLines lines={[s.h2]} className="font-semibold tracking-tight leading-[1.15] text-[clamp(24px,2.6vw,34px)] text-[#1c1e1e] max-w-[20ch] [hyphens:auto] lg:sticky lg:top-28 self-start" />
            <FadeUp className="min-w-0 max-w-[720px]">
              <Body s={s} clean={allowPrices ? undefined : withoutPrices} />
            </FadeUp>
          </div>
        </section>
      ))}

      {extra}

      <CasesCarousel />

      {faqs.length > 0 && <FaqSplit title={["Spørgsmål og svar"]} faqs={faqs} />}

      {related.length > 0 && (
        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-12">
            <p className="text-[16px] text-[#3f4446] leading-[1.9]">
              <span className="font-semibold text-[#1c1e1e] mr-2">Læs også:</span>
              {related.map((r, i) => (
                <span key={r.href}>
                  {i > 0 && <span aria-hidden className="mx-2 text-[#9a9a9a]">·</span>}
                  <Link href={r.href} className="text-[#007aab] underline underline-offset-4 decoration-[#007aab]/40 hover:text-[#00a8e8]">{r.title}</Link>
                </span>
              ))}
            </p>
          </div>
        </section>
      )}

      <FormToLead
        titleLine={formTitle || "Klar til en hjemmeside, der giver kunder?"}
        description="Skriv kort, hvad du har brug for. Du får et svar inden for 24 timer og et første designudkast efter 48 timer."
      />
    </>
  );
}
