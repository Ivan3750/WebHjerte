import FeedBackPeople from "../components/FeedBackPeople";
import SEO from "../components/SEO";
import { FaCircleCheck, FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button";
import Questions from "../components/Questions";
import AnimatedInView from "../components/AnimatedInView";
import Logo from "../../../public/W.png";

export const metadata = {
  title: "Gratis SEO- og web-tjek i Horsens | WebHjerte",
  description:
    "Få et gratis SEO- og web-tjek i Horsens. Vi analyserer din hjemmeside for synlighed, hastighed og konvertering – uden binding.",
  keywords:
    "gratis seo tjek horsens, web tjek horsens, seo analyse horsens, hjemmeside analyse horsens, seo horsens, seo midtjylland",
  robots: "index, follow",
  openGraph: {
    title: "Gratis SEO- og web-tjek i Horsens | WebHjerte",
    description:
      "Professionelt og gratis SEO- og web-tjek for virksomheder i Horsens.",
    url: "https://webhjerte.dk/gratis-seo-tjek-horsens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis SEO- og web-tjek i Horsens",
    description:
      "Få et gratis SEO- og web-tjek af din hjemmeside i Horsens.",
  },
};

const GratisSeoTjekHorsens = () => {
  return (
    <>
      <section className="mt-[75px]">
        <AnimatedInView as="h1" className="maintitle text-center">
          Gratis SEO- og web-tjek i Horsens
        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg max-w-2xl mx-auto mt-4">
          Få en professionel gennemgang af din hjemmeside og se, hvordan du kan
          få flere kunder fra Google – helt gratis og uden binding.
        </AnimatedInView>
      </section>


      <SEO />
      <FeedBackPeople />
      <Questions />
    </>
  );
};

export default GratisSeoTjekHorsens;
