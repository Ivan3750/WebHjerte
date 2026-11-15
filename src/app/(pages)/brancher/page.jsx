import Link from "next/link";
import ThemedHero from "../../components/variants/ThemedHero";
import BrancheFinder from "./_components/BrancheFinder";
import SectionHead from "../../components/ui/SectionHead";
import PriceStrip from "../../components/ui/PriceStrip";
import CasesCarousel from "../../components/home/CasesCarousel";
import { FadeUp } from "../../components/home/fx/Reveal";
import { BRANCHES, branchHref } from "../../data/branches";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";

const title = "Hjemmesider til din branche – håndværkere, klinikker, restauranter m.fl. | WebHjerte";
const description =
  "Find hjemmesiden til din branche: håndværkere, VVS, elektrikere, tømrere, restauranter, saloner, klinikker, fitness, køreskoler, rengøring, værksteder og rådgivere. Fast pris.";

export const metadata = {
  title,
  description,
  keywords: ["hjemmeside til branche", "hjemmeside små virksomheder", "webdesign brancher", "hjemmeside håndværker", "hjemmeside klinik", "hjemmeside restaurant"],
  alternates: { canonical: `${SITE_URL}/brancher` },
  openGraph: {
    title: "Hjemmesider til din branche | WebHjerte",
    description,
    url: `${SITE_URL}/brancher`,
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
  },
  twitter: { card: "summary_large_image", title: "Hjemmesider til din branche | WebHjerte", description, images: ["/opengraph-image"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/brancher#page`,
      url: `${SITE_URL}/brancher`,
      name: "Hjemmesider til din branche",
      description,
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: orgRef,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: BRANCHES.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Hjemmeside til ${b.name.toLowerCase()}`,
          url: `${SITE_URL}${branchHref(b)}`,
        })),
      },
    },
    breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Brancher", path: "/brancher" }]),
  ],
};

const principles = [
  { n: "01", t: "Svar på tre sekunder", d: "Hvad laver du, hvor, og hvordan får jeg fat i dig? Det står øverst – ikke gemt i en menu." },
  { n: "02", t: "Bevis i stedet for løfter", d: "Rigtige billeder, anmeldelser og forløb. Det overbeviser mere end ord som 'kvalitet' og 'service'." },
  { n: "03", t: "Én handling pr. side", d: "Ring, book eller bed om et tilbud. Siden vælger det, din kunde oftest vil, og gør det nemt." },
  { n: "04", t: "Fundet lokalt", d: "Google Virksomhedsprofil, sider med by og ydelse, og anmeldelser, der kommer fast." },
];

export default function BrancherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ThemedHero
        theme={{ accent: "#00a8e8", ink: "#10181a", bg: "#1c1e1e", light: false, pattern: "grid" }}
        layout="center"
        h1="Én hjemmeside pr. branche – bygget til netop dine kunder"
        lead="En frisørs kunder leder efter noget andet end en VVS-installatørs. Derfor er hver side bygget ud fra, hvad din branches kunder spørger om – og hvad der får dem til at booke, ringe eller bestille."
        facts={[
          { num: `${BRANCHES.length} brancher`, label: "Med egne sider og eksempler" },
          { num: "48 timer", label: "Til første designudkast" },
          { num: "Fast pris", label: "Ingen skjulte gebyrer" },
        ]}
        ghost={{ href: "/hjemmeside-pris", label: "Se priserne" }}
      />

      <BrancheFinder />

      <section className="scene relative overflow-hidden bg-[#1c1e1e]">
        <div aria-hidden className="grid-fade absolute inset-0 opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead dark eyebrow="Det samme i alle brancher" lines={["Det, der virker,", "gælder alle steder"]} lead="Uanset branche bygger jeg siderne på de samme fire principper. Resten tilpasses dine kunder." className="mb-10 sm:mb-14" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-3xl bg-white/[0.04] border border-white/10 p-6">
                  <p className="text-[12px] tabular-nums text-[#00a8e8] mb-5">{p.n}</p>
                  <p className="text-[17px] font-semibold text-white mb-2.5">{p.t}</p>
                  <p className="text-[14.5px] text-[#b4bdbd] leading-[1.7]">{p.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CasesCarousel />
      <PriceStrip />

      <section className="scene bg-[#f7f6f6]">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 py-16 sm:py-24 text-center">
          <h2 className="text-[clamp(24px,2.6vw,34px)] font-semibold tracking-tight leading-[1.15] text-[#1c1e1e]">Din branche er ikke på listen?</h2>
          <p className="text-[16px] text-[#5f5f5f] leading-[1.75] mt-5 max-w-[52ch] mx-auto">
            Det er ikke et problem. Jeg bygger også til andre lokale virksomheder – maler, frisør, bager, dyrlæge og mange flere. Skriv kort, hvad du laver, så får du et fast tilbud inden for 24 timer.
          </p>
          <Link href="/kontakt" className="btn-primary mt-8">
            Få et gratis tilbud
          </Link>
        </div>
      </section>
    </>
  );
}
