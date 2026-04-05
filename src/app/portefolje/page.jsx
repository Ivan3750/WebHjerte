import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../components/AnimatedInView";
import { projects } from "../../app/data/projects";

export const metadata = {
  title: "Portefølje – Webdesign Cases fra Horsens og Danmark | WebHjerte",
  description:
    "Se vores webdesignprojekter – køreskole, platforme og lokale virksomheder. Enkelt design, hurtig levering, mobilvenlige løsninger til danske virksomheder.",
  keywords:
    "webdesign cases horsens, portefølje webbureau horsens, hjemmeside eksempler, webdesign referencer midtjylland",
  openGraph: {
    title: "Portefølje – Webdesign til lokale virksomheder | WebHjerte",
    description:
      "Se eksempler på vores arbejde – hjemmesider til køreskole, fitnesscenter, rideklub og mere. Alle projekter leveret til aftalt tid og pris.",
    url: "https://www.webhjerte.dk/portefolje",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portefølje – Webdesign cases | WebHjerte Horsens",
    description:
      "Se eksempler på hjemmesider bygget til lokale virksomheder i Danmark.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/portefolje",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "WebHjerte Portefølje",
      description: "Webdesignprojekter til lokale virksomheder i Danmark",
      url: "https://www.webhjerte.dk/portefolje",
      provider: {
        "@type": "LocalBusiness",
        name: "WebHjerte",
      },
    }),
  },
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 7h10M7 2l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Portefolje = () => {
  return (
    <>
      <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Udvalgte projekter
          </AnimatedInView>
          <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-4">
            Portefølje
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] max-w-lg leading-[1.75]">
            Hjemmesider leveret til lokale virksomheder i Horsens og resten af
            Danmark — til aftalt tid og pris.
          </AnimatedInView>
        </div>
      </section>

      <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {projects.map((project, index) => (
            <AnimatedInView
              key={index}
              as="div"
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                index % 2 !== 0 ? "md:[direction:rtl]" : ""
              }`}
            >
              <Link
                href={`/portefolje/${project.slug}`}
                className="group overflow-hidden rounded-2xl block [direction:ltr]"
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="flex flex-col gap-4 [direction:ltr]">
                <div className="flex flex-wrap gap-2">
                  {project.services.map((cat, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-[0.08em] text-[#5a5a5a] border border-[#e0e0e0] rounded-full px-2.5 py-1 bg-white"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div>
                  <h2 className="text-[22px] font-medium text-[#1c1e1e] leading-tight">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="text-[22px] font-medium text-[#aaa] leading-tight">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="text-[12px] text-[#5a5a5a] border border-[#e0e0e0] bg-white rounded-lg px-3 py-1">
                    {project.client}
                  </span>
                  {project.location && (
                    <span className="text-[12px] text-[#5a5a5a] border border-[#e0e0e0] bg-white rounded-lg px-3 py-1">
                      {project.location}
                    </span>
                  )}
                  {project.concept && (
                    <span className="text-[12px] text-[#888] border border-[#e0e0e0] bg-white rounded-lg px-3 py-1">
                      Konceptprojekt
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-[#777] leading-[1.7]">
                  {project.description}
                </p>

                <Link
                  href={`/portefolje/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1c1e1e] border-b border-[#1c1e1e] pb-px w-fit hover:text-[#00a8e8] hover:border-[#00a8e8] transition-colors mt-2"
                >
                  Se projekt <ArrowIcon />
                </Link>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </section>

      <section className="bg-[#111313] border-t border-[#1e2020] px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[14px] text-[#5a5a5a] mb-1">Næste projekt?</p>
            <p className="text-[22px] font-medium text-white">Det kan være dit.</p>
          </div>
          <Link
            href="/kontakt"
            className="bg-[#00a8e8] hover:opacity-85 transition-opacity text-white text-[13px] font-medium px-6 py-3 rounded-xl whitespace-nowrap"
          >
            Book gratis samtale →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portefolje;