import Contact from "../components/Contact";


export const metadata = {
    title: "Kontakt Os | WebHjerte",
    description: "Kontakt os i dag for at få en skræddersyet hjemmeside til din virksomhed. Vi er klar til at hjælpe dig!",
    keywords: "kontakt WebHjerte, hjemmeside bestilling, webudvikling kontakt, Horsens webstudio",
    openGraph: {
      title: "Kontakt Os | WebHjerte",
      description: "Har du spørgsmål? Kontakt os for en uforpligtende samtale om din hjemmeside.",
      url: "https://webhjerte.dk/kontakt",
      image: "/og-contact.jpg",
    },
  };
  

const Kontakt = () => {
    return ( <>
    <Contact/>
    </> );
}
 
export default Kontakt;