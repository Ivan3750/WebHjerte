import AnimatedInView from "../components/AnimatedInView";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Kontakt WebHjerte – Gratis Første Samtale | Horsens",
  description:
    "Tag fat i mig – svar inden for 24 timer. Gratis og uforpligtende samtale om din nye hjemmeside. Lokal webudvikler i Horsens, arbejder i hele Danmark.",
  keywords:
    "kontakt webbureau horsens, gratis webdesign samtale, bestil hjemmeside horsens, webudvikler kontakt midtjylland",
  openGraph: {
    title: "Kontakt WebHjerte – Kom i gang med din nye hjemmeside",
    description:
      "Skriv til mig – jeg svarer inden for 24 timer. Første samtale er gratis og uforpligtende. Baseret i Horsens, arbejder online i hele Danmark.",
    url: "https://www.webhjerte.dk/kontakt",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt WebHjerte – Gratis samtale | Horsens",
    description:
      "Svar inden for 24 timer. Gratis og uforpligtende. Lokal webudvikler i Horsens.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/kontakt",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Kontakt WebHjerte",
      url: "https://www.webhjerte.dk/kontakt",
      description: "Kontaktside for WebHjerte – lokal webudvikler i Horsens",
    }),
  },
};

const facts = [
  { label: "Svartid", value: "Inden for 24 timer" },
  { label: "Første samtale", value: "Gratis & uforpligtende" },
  { label: "Arbejdsområde", value: "Hele Danmark" },
  { label: "Baseret i", value: "Horsens, Midtjylland" },
];

const Kontakt = () => {
  return (
    <>
      <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-20 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
              Kontakt
            </AnimatedInView>
            <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-4">
              Lad os tage en<br />
              <span className="text-[#00a8e8]">snak</span>
            </AnimatedInView>
            <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] leading-[1.75] max-w-sm mb-10">
              Fortæl mig hvad du har brug for — jeg vender tilbage inden for 24
              timer med et konkret svar. Ingen forpligtelse.
            </AnimatedInView>

            <AnimatedInView as="div" className="flex flex-col gap-px border border-[#2a2d2d] rounded-2xl overflow-hidden">
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-[#1c1e1e] px-5 py-4"
                >
                  <span className="text-[12px] text-[#5a5a5a]">{label}</span>
                  <span className="text-[12px] font-medium text-[#e0e0e0]">{value}</span>
                </div>
              ))}
            </AnimatedInView>
          </div>

          <AnimatedInView as="div" className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-7">
            <ContactForm />
          </AnimatedInView>
        </div>
      </section>
    </>
  );
};

export default Kontakt;