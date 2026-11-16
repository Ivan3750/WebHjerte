/**
 * Pladser til rigtige fotos på ydelsessiderne.
 *
 * Sådan skifter du et foto:
 *  1. Læg billedet i src/app/assets/photos/ (fx "shopify-hero.jpg", gerne 1600 px bredt og under 400 KB).
 *  2. Importér det herunder og sæt det ind på den rigtige plads (hero eller work).
 *
 * Indtil der ligger et rigtigt foto, bruges billeder fra porteføljen. Portrættet bruges kun på Om mig og forsiden.
 * Alt-teksten beskriver billedet for Google og skærmlæsere – ret den, når du skifter foto.
 */
import Improve from "../assets/cases/Improve.png";
import Pizzle from "../assets/cases/PizzleM.png";
import Veka from "../assets/cases/VEKA.png";
import Workout from "../assets/cases/WorkOutM.png";
import Hesteklub from "../assets/cases/ClubHorseM.png";
import Hireon from "../assets/cases/HireonM.png";
import Monolit from "../assets/cases/Vzlom.png";

export const photos = {
  "webshop-hjemmeside": {
    hero: { src: Pizzle, alt: "Restauranthjemmeside med egen onlinebestilling, bygget af WebHjerte" },
  },
  "shopify-hjemmeside": {
    hero: { src: Veka, alt: "Webshop og produktkatalog bygget af WebHjerte, vist på computer" },
  },
  "skraeddersyede-hjemmesider": {
    hero: { src: Improve, alt: "Skræddersyet hjemmeside med online booking, bygget af WebHjerte" },
  },
  "alle-typer-hjemmesider": {
    hero: { src: Workout, alt: "Hjemmeside til et fitnesscenter, vist på computer og mobil" },
  },
  "hosting-og-vedligeholdelse": {
    hero: { src: Hireon, alt: "En af de hjemmesider, WebHjerte holder kørende" },
  },
  "webbureau-vejle": {
    hero: { src: Hesteklub, alt: "Hjemmeside til en hesteklub, bygget af WebHjerte" },
  },
  "webbureau-aarhus": {
    hero: { src: Monolit, alt: "B2B-hjemmeside bygget af WebHjerte" },
  },
};

export const photoFor = (slug, slot) => photos[slug]?.[slot] || null;
