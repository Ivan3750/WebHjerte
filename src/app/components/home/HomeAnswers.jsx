import Link from "next/link";
import { FadeUp, RevealLines } from "./fx/Reveal";
import { visibleLinks } from "../../data/hidden";

/**
 * Svar på det, kunderne faktisk søger på (Search Console, position 10–30):
 * hjemmeside Horsens, hjemmeside pris / billig hjemmeside, professionel WordPress, hjemmeside med webshop,
 * hjemmeside til virksomhed og webtjek. Hver blok svarer kort og linker videre til den side, der har hele svaret.
 *
 * Ingen kronebeløb her (priser står kun på /services, /ai-seo og /hosting-og-vedligeholdelse).
 * Teksten bruges også som FAQPage-data på forsiden, så den skal stå uændret i både HTML og schema.
 */
export const homeFaqs = [
  {
    q: "Hvem laver hjemmesider i Horsens til fast pris?",
    a: [
      "Det gør jeg. WebHjerte er mit webbureau i Horsens, og jeg både designer og bygger hjemmesiden selv – du taler med den samme person fra første samtale til lancering. Som webdesigner i Horsens kender jeg byen og oplandet, fra midtbyen til Hedensted, Brædstrup og Gedved, og jeg ved, hvordan lokale kunder søger efter dig på Google.",
      "Du får første designudkast inden for 48 timer, og er du ikke tilfreds med det, betaler du 0 kr for designet. Domæne og kode tilhører dig, og de fleste hjemmesider er klar på 2–10 dage.",
    ],
    links: [
      { href: "/webdesign-horsens", label: "Webdesign i Horsens" },
      { href: "/seo-horsens", label: "SEO i Horsens" },
      { href: "/webbureau-midtjylland", label: "Webbureau i Midtjylland" },
      { href: "/webbureau-vejle", label: "Webbureau i Vejle" },
    ],
  },
  {
    q: "Hvad koster en professionel hjemmeside?",
    a: [
      "Det afhænger af, hvor mange sider du har brug for, og hvilke funktioner siden skal have – fx booking, kontaktformular eller en webshop. En enkelt landingside er hurtigt lavet, mens en hjemmeside med flere sider, SEO og booking kræver mere arbejde. Hos mig aftaler vi en fast pris skriftligt, før jeg går i gang, så der ikke kommer overraskelser bagefter.",
      "Leder du efter en billig hjemmeside, så kig på, hvad der er med. En skabelon uden SEO og support ender ofte med at blive bygget om, og så bliver den billigste løsning den dyreste. Se pakkerne og prisberegneren, eller læs guiden til, hvad en hjemmeside koster i 2026 – med de løbende udgifter til domæne og hosting.",
    ],
    links: [
      { href: "/services#priser", label: "Priser og prisberegner" },
      { href: "/blog/hvad-koster-en-hjemmeside-2026", label: "Hvad koster en hjemmeside i 2026?" },
      { href: "/blog/hvad-koster-en-hjemmeside-om-aaret", label: "Hvad koster den om året?" },
      { href: "/blog/hvor-lang-tid-tager-det-at-lave-en-hjemmeside", label: "Hvor lang tid tager det?" },
    ],
  },
  {
    q: "Kan I lave en professionel WordPress-hjemmeside til min virksomhed?",
    a: [
      "Ja. En WordPress-hjemmeside er en god løsning, hvis du selv vil kunne rette tekster, billeder og priser uden at ringe til en udvikler. Jeg bygger den med et unikt design i stedet for en færdig skabelon, så den bliver hurtig, mobilvenlig og klar til Google fra første dag. Jeg arbejder med virksomheder i hele Midtjylland, og samarbejdet foregår online eller ved et møde, hvis du foretrækker det.",
      "Er du i tvivl om, om WordPress er det rigtige, har jeg skrevet en ærlig sammenligning med en hjemmeside, der er kodet specielt til dig. Jeg bygger begge dele og anbefaler det, der passer til din virksomhed.",
    ],
    links: [
      { href: "/wordpress-hjemmeside", label: "WordPress-hjemmeside" },
      { href: "/blog/wordpress-eller-skraeddersyet", label: "WordPress eller skræddersyet?" },
      { href: "/skraeddersyede-hjemmesider", label: "Skræddersyede hjemmesider" },
      { href: "/alle-typer-hjemmesider", label: "Vælg platform" },
    ],
  },
  {
    q: "Hvad skal jeg vide, før jeg får lavet en hjemmeside med webshop?",
    a: [
      "En webshop er mere end en hjemmeside med en indkøbskurv. Produkter, betaling med MobilePay og kort, fragt og handelsbetingelser skal passe sammen, og prisen afhænger af, hvor mange produkter du har, og hvilke fragt- og betalingsløsninger du vil tilbyde. Jeg bygger webshops i WooCommerce, Shopify eller som kodet løsning og siger ærligt, hvilken der passer til dine varer.",
      "Sælger du kun få produkter ved siden af din ydelse, er en fuld webshop ofte for meget. Så kan en enkel betalingsløsning på en almindelig hjemmeside være nok – og billigere at drive.",
    ],
    links: [
      { href: "/webshop-hjemmeside", label: "Hjemmeside med webshop" },
      { href: "/shopify-hjemmeside", label: "Shopify webshop" },
    ],
  },
  {
    q: "Hvilke sider skal en hjemmeside til virksomhed have?",
    a: [
      "De fleste virksomheder har brug for en forside, en side til hver vigtig ydelse, en side om, hvem I er, referencer eller anmeldelser og en tydelig kontaktside. Det vigtigste er, at en ny besøgende på få sekunder kan se, hvad I tilbyder, hvor I arbejder, og hvordan de kommer i kontakt med jer. Kunderne søger lokalt, så skriv de byer, du dækker.",
      "Skal det være en erhvervshjemmeside til en håndværker, en klinik eller en butik, tilpasser jeg opbygningen til branchen i stedet for at bruge den samme skabelon til alle. Se eksempler på færdige hjemmesider i porteføljen.",
    ],
    links: [
      { href: "/portefolje", label: "Se portefølje" },
      { href: "/services", label: "Alle services" },
    ],
  },
  {
    q: "Er min nuværende hjemmeside god nok?",
    a: [
      "Det kan et gratis webtjek hurtigt give et billede af. Jeg gennemgår hastighed, mobilvisning, SEO og synlighed i Google og siger, hvad der bør rettes først – uden binding og uden at du skal købe noget bagefter.",
      "Vil du have flere kunder til at finde dig, kan en AI-chatbot på siden svare på spørgsmål døgnet rundt, og AI SEO gør, at du også bliver nævnt, når kunderne spørger ChatGPT eller Google AI.",
    ],
    links: [
      { href: "/gratis-seo-tjek-horsens", label: "Gratis SEO-tjek" },
      { href: "/ai-chatbot-til-hjemmeside", label: "AI-chatbot til hjemmeside" },
      { href: "/ai-seo", label: "AI SEO" },
    ],
  },
];

export default function HomeAnswers() {
  return (
    <section className="scene bg-[#eceeee] border-t border-[#e8e6e6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <RevealLines
          lines={["Svar på det, kunderne", "oftest spørger om"]}
          className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.12] text-[clamp(24px,2.6vw,34px)] mb-10 sm:mb-14"
        />
        <div className="flex flex-col">
          {homeFaqs.map((item) => (
            <FadeUp key={item.q} delay={0.05} className="border-t border-[#d6dada] first:border-t-0 py-9 sm:py-11">
              <article className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-5 lg:gap-16">
                <h3 className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.3] text-[clamp(19px,1.7vw,23px)] max-w-[28ch]">{item.q}</h3>
                <div>
                  {item.a.map((p) => (
                    <p key={p.slice(0, 40)} className="text-[17px] text-[#4a4a4a] leading-[1.75] max-w-[64ch] mb-4">
                      {p}
                    </p>
                  ))}
                  <p className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                    {visibleLinks(item.links).map((l) => (
                      <Link key={l.href} href={l.href} className="text-[16px] font-medium text-[#007aab] hover:text-[#00a8e8] underline underline-offset-4 decoration-[#00a8e8]/50 transition-colors">
                        {l.label} →
                      </Link>
                    ))}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
