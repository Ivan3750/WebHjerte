import Track from "../components/Track";
import Logo from "../../../public/W.png";

export const metadata = {
  title: "Spor Dit Projekt – Live Status | WebHjerte",
  description: "Følg din hjemmeside i realtid – se hvilken fase dit projekt er i, hvad der er afsluttet og hvad der kommer næst. Kun for aktive WebHjerte-kunder.",
   robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/track",
  },
};

const TrackPage = () => {
  return ( <>
  <Track></Track></> );
}
 
export default TrackPage;