import Contact from "../components/Contact";


export const metadata = {
  title: "Kontakt WebHjerte – Få Din Hjemmeside i Gang i Dag!",
  description: "Skriv til os i dag og få en gratis vurdering af din nye hjemmeside. Vi hjælper små virksomheder i hele Danmark.",
  keywords: "kontakt WebHjerte, hjemmeside bestilling, webudvikling kontakt, Horsens webstudio",
  openGraph: {
    title: "Kontakt WebHjerte – Gratis Vurdering",
    description: "Kontakt os og få et uforpligtende tilbud på en ny hjemmeside til din virksomhed.",
    url: "https://webhjerte.dk/kontakt",
    image: "/og-kontakt.jpg",
  },
};


const Kontakt = () => {
    return ( <>
    <Contact/>
    </> );
}
 
export default Kontakt;