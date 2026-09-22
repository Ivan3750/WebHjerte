import AnimatedInView from "../../components/ui/AnimatedInView";
import ProblemLoesning from "./_components/ProblemLoesning";
import FormToLead from "../../components/ui/FormToLead";
import CasesCarousel from "../../components/home/CasesCarousel";
import Questions from "../../components/Questions";
import PackagesBlock from "../services/_components/PackagesBlock";

export const metadata = {
  title: "WordPress Hjemmeside til Din Virksomhed | WebHjerte",
  description:
    "Få en WordPress-hjemmeside, du selv kan opdatere. Professionelt setup, hurtig levering og skræddersyet til din virksomhed – fra WebHjerte.",
  keywords:
    "wordpress hjemmeside, hjemmeside med wordpress, wordpress webbureau, wordpress horsens, wordpress midtjylland, wordpress pris",
  robots: "index, follow",
  openGraph: {
    title: "WordPress Hjemmeside til Din Virksomhed | WebHjerte",
    description:
      "Professionel WordPress-hjemmeside, du selv kan redigere. Hurtig og billig løsning fra WebHjerte.",
    url: "https://webhjerte.dk/wordpress-hjemmeside",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Hjemmeside – Hurtig & Billig",
    description:
      "Få en WordPress-hjemmeside, du selv kan opdatere. Professionelt setup fra WebHjerte.",
  },
};

const WordpressHjemmeside = () => {
  return (
    <>
      <section className="mt-[75px]">
        <AnimatedInView as="h1" className="maintitle text-center">
          WordPress Hjemmeside – Hurtig &amp; Billig
        </AnimatedInView>
        <AnimatedInView
          as="h2"
          className="subtitle text-center mt-5 text-balance"
        >
          Få en WordPress-hjemmeside, du selv kan opdatere. Professionelt
          setup fra WebHjerte.
        </AnimatedInView>
      </section>
      <ProblemLoesning />
{/*       <WordpressFordele />
 */}      <CasesCarousel />
      <PackagesBlock />
      <FormToLead
        titleLine="Klar til din WordPress-hjemmeside?"
        description="Skriv til os, og få et uforpligtende tilbud på din nye WordPress-side inden for 24 timer."
      />
      <Questions />
    </>
  );
};

export default WordpressHjemmeside;