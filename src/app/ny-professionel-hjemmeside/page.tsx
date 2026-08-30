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

const GratisSeoTjekHorsens = () => {
  return (
    <>
      <section className="mt-[75px]">
        <AnimatedInView as="h1" className="maintitle text-center">
Få en ny, professionel hjemmeside        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg max-w-2xl mx-auto mt-4">
          Få en professionel gennemgang af din hjemmeside og se, hvordan du kan
          få flere kunder fra Google – helt gratis og uden binding.
        </AnimatedInView>
      </section>
<ProblemLoesning/>
<SocialProof/>
<PackagesBlock/>
      <CasesCarousel />

<HvadGoerProfessionel/>
<FormToLead/>
    

    
    </>
  );
};

export default GratisSeoTjekHorsens;
