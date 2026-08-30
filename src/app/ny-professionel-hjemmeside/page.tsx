import AnimatedInView from "../utils/AnimatedInView.jsx";
import PackagesBlock from "../components/service/PackagesBlock";
import HvadGoerProfessionel from "../components/wordpress/HvadGoerProfessionel";
import FormToLead from "../components/FormToLead";
import SocialProof from "../components/home/SocialProof";
import ProblemLoesning from "../components/ProblemLoesning.jsx";
import CasesCarousel from "../components/home/CasesCarousel.jsx";

export const metadata = {
  title: "Ny Professionel Hjemmeside | WebHjerte",
  description:
    "Få en ny, professionel hjemmeside, der ser godt ud og virker. Hurtig levering, fast pris og fuld hjælp fra start til slut – uden binding.",
  keywords:
    "professionel hjemmeside, ny hjemmeside, ny hjemmeside pris, professionel hjemmeside design, webbureau horsens",
  robots: "index, follow",
  openGraph: {
    title: "Ny Professionel Hjemmeside | WebHjerte",
    description:
      "Få en ny, professionel hjemmeside, der ser godt ud og virker. Hurtig levering, fast pris.",
    url: "https://webhjerte.dk/ny-professionel-hjemmeside",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ny Professionel Hjemmeside – WebHjerte",
    description:
      "Få en ny, professionel hjemmeside, der ser godt ud og virker. Hurtig levering, fast pris.",
  },
};

const NyProfessionelHjemmeside = () => {
  return (
    <>
      <section className="mt-[75px]">
        <AnimatedInView as="h1" className="maintitle text-center">
          Få en ny, professionel hjemmeside{" "}
        </AnimatedInView>
        <AnimatedInView
          as="h2"
          className="subtitle text-center mt-5 text-balance"
        >
          En hurtig, moderne og mobilvenlig hjemmeside, der er klar til at
          tage imod nye kunder – til en fast pris og uden binding.
        </AnimatedInView>
      </section>
      <ProblemLoesning />
      <SocialProof />
      <PackagesBlock />
      <CasesCarousel />
      <HvadGoerProfessionel />
      <FormToLead
        titleLine="Klar til din nye hjemmeside?"
        description="Fortæl os lidt om dit projekt, så vender vi tilbage med et konkret tilbud inden for 24 timer – helt uforpligtende."
      />
    </>
  );
};

export default NyProfessionelHjemmeside;