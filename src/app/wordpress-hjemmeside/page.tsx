import AnimatedInView from "../utils/AnimatedInView.jsx";
import WordpressSelvredigering from "../components/wordpress/WordpressSelvredigering.jsx";
import WordpressPrisTeaser from "../components/wordpress/WordpressPrisTeaser.jsx";
import FormToLead from "../components/FormToLead";
 

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
 

const GratisSeoTjekHorsens = () => {
  return (
    <>
      <section className="mt-[75px]">
        <AnimatedInView as="h1" className="maintitle text-center">
          WordPress Hjemmeside – Hurtig & Billig
        </AnimatedInView>
        <AnimatedInView
          as="h2"
          className="text-center text-lg max-w-4xl mx-auto mt-4"
        >
         Få en WordPress-hjemmeside, du selv kan opdatere. Professionelt setup fra WebHjerte.
        </AnimatedInView>
      </section>
      <WordpressSelvredigering />
      <WordpressPrisTeaser />
      <FormToLead />
    </>
  );
};

export default GratisSeoTjekHorsens;
