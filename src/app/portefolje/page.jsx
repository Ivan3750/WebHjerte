import Image from "next/image";
import Workout from "../../../public/workout.png";
import Ukraine from "../../../public/Ukraine.png";
import Callmar from "../../../public/Callmar.png";
import Horses from "../../../public/Horses.png";
import SmartBank from "../../../public/SmartBank.png";
import Pizzle from "../../../public/Pizzle.png";
import Hireon from "../../../public/Hireon.png";
import Link from "next/link";


export const metadata = {
  title: "Vores Portefølje | WebHjerte",
  description: "Se vores tidligere webudviklingsprojekter og bliv inspireret til din næste hjemmeside.",
  keywords: "webdesign portefølje, tidligere projekter, hjemmesidedesign, case studies",
  openGraph: {
    title: "Vores Portefølje | WebHjerte",
    description: "Se vores arbejde og tidligere succesfulde projekter.",
    url: "https://webhjerte.dk/portefolje",
    image: "/og-portfolio.jpg",
  },
};




const Portefojle = () => {
  return (
    <>
 

      <section>
        <h1 className="maintitle text-center mt-[75px]">Se vores arbejde</h1>
        <h2 className="text-center">
          Vi har hjulpet danske virksomheder med at skabe en stærk online
          tilstedeværelse.
        </h2>
      </section>
      <section className="bg-[#F7F6F6] flex flex-col gap-14">
        <div className="flex justify-between items-center  gap-7 flex-wrap md:flex-nowrap">
          <div>
            <Image
              src={Horses}
              width={600}
              height={600}
              alt="workout"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="title mb-5">Privat rideskole</h3>
            <p className="max-w-[600px] text">
              WebHjerte har udviklet en moderne og funktionel hjemmeside for en
              privat rideskole. Hjemmesiden giver besøgende en dybdegående
              oplevelse af hesteverdenen og tilbyder information om
              rideundervisning, fotosessioner og eksklusive arrangementer i
              klubben. Vi har udviklet et responsivt design, der sikrer en
              optimal brugeroplevelse på alle enheder. Navigationen er intuitiv,
              og indlæsningstiden er optimeret for at forbedre
              brugerengagementet. Med strategisk SEO-optimering har vi øget
              sidens synlighed og tiltrukket en bredere målgruppe.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  gap-7 flex-wrap md:flex-nowrap">
          <div>
            <Image
              src={Workout}
              width={600}
              height={600}
              alt="workout"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="title mb-5">Workout With Me</h3>
            <p className="max-w-[600px] text">
              WebHjerte har udviklet en moderne og brugervenlig hjemmeside for
              Workout With Me – en platform, der hjælper folk med at opretholde
              en sund livsstil. Hjemmesiden indeholder hundredevis af gratis
              træningsvideoer, personlig tilpassede træningsprogrammer, sunde
              opskrifter og motiverende transformationshistorier. Vi har skabt
              et responsivt design, en brugervenlig navigation og optimeret
              indlæsningstiden for at sikre en behagelig brugeroplevelse. Med
              SEO-optimering er hjemmesiden blevet mere synlig for en bredere
              målgruppe. WebHjerte hjælper virksomheder med at skabe effektive
              og attraktive web-løsninger, der arbejder for resultater.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  gap-7 flex-wrap md:flex-nowrap">
          <div>
            <Image
              src={Ukraine}
              width={600}
              height={600}
              alt="workout"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="title mb-5">Krig i Ukraine</h3>
            <p className="max-w-[600px] text">
              WebHjerte har udviklet en informationshjemmeside om krigen i
              Ukraine – et projekt skabt GRATIS for at støtte det ukrainske
              folk. Hjemmesiden formidler pålidelig information om krigens
              forløb, vigtige nyheder og måder, hvorpå man kan hjælpe Ukraine.
              Den indeholder interaktive kort, vidnesbyrd fra berørte borgere og
              ressourcer til dem, der ønsker at bidrage med donationer eller
              frivilligt arbejde. Vi har fokuseret på et overskueligt og
              responsivt design, der gør informationen let tilgængelig for alle
              brugere, uanset enhed. Hjemmesiden er optimeret for hurtig
              indlæsning og stærk SEO, så den når ud til flest mulige mennesker.
              Слава Україні
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  gap-7 flex-wrap md:flex-nowrap">
          <div>
            <Image
              src={Hireon}
              width={600}
              height={600}
              alt="workout"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="title mb-5">Hireon</h3>
            <p className="max-w-[600px] text">
              WebHjerte har udviklet Hireon – en innovativ jobportal, der
              forbinder jobsøgende med arbejdsgivere i hele EU. Hireon gør det
              nemt for brugere at finde jobmuligheder i forskellige brancher og
              lande. Platformen tilbyder avancerede filtre, en brugervenlig
              grænseflade og en hurtig ansøgningsproces, der effektiviserer
              rekrutteringsforløbet. Vi har skabt et responsivt design, der
              sikrer en problemfri oplevelse på både desktop og mobile enheder.
              Med SEO-optimering og høj ydeevne har vi øget platformens
              synlighed og tiltrukket flere brugere.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  gap-7 flex-wrap md:flex-nowrap">
          <div>
            <Image
              src={Pizzle}
              width={600}
              height={600}
              alt="workout"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="title mb-5">Pizzle</h3>
            <p className="max-w-[600px] text">
              WebHjerte har udviklet en moderne og indbydende hjemmeside for en
              pizzeria, der bringer den autentiske smag tættere på kunderne.
              Hjemmesiden giver besøgende mulighed for at udforske menuen,
              bestille deres yndlingspizzaer online og finde information om
              restaurantens beliggenhed og åbningstider. Med et stilrent design
              og en intuitiv brugergrænseflade sikrer vi en problemfri oplevelse
              for både nye og tilbagevendende kunder. Vi har implementeret et
              responsivt layout, hurtig indlæsningstid og SEO-optimering,
              hvilket gør det lettere for kunderne at finde pizzeriaet online.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portefojle;
