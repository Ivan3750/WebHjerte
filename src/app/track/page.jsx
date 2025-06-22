import Track from "../components/Track";
import Logo from "../../../public/W.png";


export const metadata = {
  title: "Følg Dit Projekt – Webudviklingsproces i Realtid | WebHjerte",
  description:
    "Følg udviklingen af din hjemmeside trin-for-trin. WebHjerte giver dig fuld indsigt i dit projekt – fra idé til færdig hjemmeside.",
  keywords:
    "projekt tracking, hjemmeside status, webudviklingsproces, følg projekt, kundeportal, hjemmeside udvikling, webprojekt status, WebHjerte",
  robots: "index, follow",
  openGraph: {
    title: "Følg Dit Projekt – Webudviklingsproces i Realtid | WebHjerte",
    description:
      "Hold øje med dit webprojekt hos WebHjerte. Se status, milepæle og næste skridt – vi arbejder transparent og effektivt.",
    url: "https://webhjerte.dk/track",
    image: Logo, 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Følg Dit Projekt – Webudviklingsproces i Realtid | WebHjerte",
    description:
      "Se hvordan dit projekt skrider frem – WebHjerte tilbyder fuld projektgennemsigtighed og realtidsopdateringer.",
    image: Logo,
  },
};




const TrackPage = () => {
  return ( <>
  <Track></Track></> );
}
 
export default TrackPage;