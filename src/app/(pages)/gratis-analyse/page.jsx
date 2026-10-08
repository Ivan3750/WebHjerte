import AnalyseForm from "./_components/AnalyseForm";

export const metadata = {
  title: "Gratis analyse af din hjemmeside | WebHjerte",
  description:
    "Få en gratis og uforpligtende analyse af din hjemmeside. Skriv din adresse og e-mail – jeg vender tilbage inden for 24 timer.",
  alternates: { canonical: "https://www.webhjerte.dk/gratis-analyse" },
  // Landingsside til links (bio/annoncer) – holdes ude af Google, så den ikke konkurrerer med SEO-siderne
  robots: { index: false, follow: true },
};

const points = [
  "Hastighed og mobilvisning",
  "Synlighed på Google (SEO)",
  "Konkrete forslag til forbedringer",
];

export default function GratisAnalysePage() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-16 sm:py-24 min-h-[calc(100dvh-68px)] flex items-center">
      <div className="max-w-xl w-full mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-4">
          Gratis og uforpligtende
        </p>
        <h1 className="maintitle text-white !leading-tight mb-4 text-balance !text-left">
          Få en gratis analyse af din hjemmeside
        </h1>
        <p className="text-[14px] text-[#a0a0a0] leading-[1.8] mb-6">
          Skriv din hjemmesideadresse og din e-mail, så får du et konkret svar
          fra mig personligt inden for 24 timer.
        </p>

        <ul className="flex flex-col gap-2 mb-8">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-[13px] text-[#c0c0c0]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-6 sm:p-7">
          <AnalyseForm />
        </div>
      </div>
    </section>
  );
}
