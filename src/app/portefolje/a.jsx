import Image from "next/image";
import Workout from "../../../public/workout.png";
import Ukraine from "../../../public/Ukraine.png";
import Callmar from "../../../public/Callmar.png";
import Horses from "../../../public/Horses.png";
import SmartBank from "../../../public/SmartBank.png";
import Pizzle from "../../../public/Pizzle.png";
import Hireon from "../../../public/Hireon.png";
import Link from "next/link";
import AnimatedInView from "../components/AnimatedInView";
AnimatedInView
import Logo from "../../../public/W.png";

export const metadata = {
  title: "Portefølje: Succesfulde Hjemmesider & Cases | WebHjerte",
  description:
    "Bliv inspireret af vores skræddersyede webløsninger. Se tidligere projekter indenfor webdesign, e-handel og SEO for små virksomheder i Danmark.",
  keywords:
    "webdesign portefølje, tidligere projekter, hjemmesidedesign, case studies, webbureau eksempler, hjemmeside inspiration, e-handel cases",
  robots: "index, follow",
  openGraph: {
    title: "Portefølje: Succesfulde Hjemmesider & Cases | WebHjerte",
    description:
      "Oplev vores tidligere projekter – skræddersyede hjemmesider og succesfulde webløsninger for danske virksomheder.",
    url: "https://webhjerte.dk/portefolje",
    image: Logo,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portefølje: Succesfulde Hjemmesider & Cases | WebHjerte",
    description:
      "Oplev vores tidligere projekter – skræddersyede hjemmesider og succesfulde webløsninger for danske virksomheder.",
    image: Logo,
  },
};



const Portefojle = () => {
  return (
    <>
 

      <section>
    
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
        Se vores arbejde        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg">
        Vi har hjulpet danske virksomheder med at skabe en stærk online
        tilstedeværelse.        </AnimatedInView>
      </section>
      <section class="flex flex-col md:flex-row justify-between items-start gap-10 py-10 border-b border-gray-200">
  <div class="flex-1">
    <img 
      src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHorses.4501a05e.png&amp;w=1200&amp;q=75" 
      srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHorses.4501a05e.png&amp;w=640&amp;q=75 1x, 
              /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHorses.4501a05e.png&amp;w=1200&amp;q=75 2x" 
      width="600" height="600" alt="Privat rideskole website" 
      loading="lazy" decoding="async" 
      class="rounded-2xl shadow-xl"
    />
  </div>

  <div class="flex-1 max-w-xl">
    <h3 class="text-3xl font-semibold mb-4">Privat Rideskole – Digital galop fremad</h3>
    
    <div class="mb-4">
      <h4 class="text-xl font-semibold mb-2 text-gray-800">🎯 Udfordringen</h4>
      <p class="text-gray-600">
        Kunden ønskede en digital platform, der kunne afspejle rideskolens eksklusive atmosfære og samtidig være praktisk for besøgende. Den tidligere side var langsom og ikke mobilvenlig.
      </p>
    </div>

    <div class="mb-4">
      <h4 class="text-xl font-semibold mb-2 text-gray-800">🛠️ Vores løsning</h4>
      <ul class="list-disc pl-5 text-gray-600 space-y-1">
        <li>Responsivt webdesign med fokus på æstetik og performance.</li>
        <li>Intuitiv navigation og interaktive elementer for bedre brugerflow.</li>
        <li>SEO-optimering for bedre synlighed i Google.</li>
        <li>Hurtig indlæsning via Next.js og optimeret billedhåndtering.</li>
      </ul>
    </div>

    <div class="mb-4">
      <h4 class="text-xl font-semibold mb-2 text-gray-800">🚀 Resultater</h4>
      <ul class="list-disc pl-5 text-gray-600 space-y-1">
        <li>+65% stigning i besøg på mobilenheder.</li>
        <li>+40% længere sessionsvarighed.</li>
        <li>Ny tilmelding til rideundervisning steg med 25% i første måned.</li>
      </ul>
    </div>

    <div class="mb-4">
      <h4 class="text-xl font-semibold mb-2 text-gray-800">⚙️ Teknologier brugt</h4>
      <p class="text-gray-600">Next.js, React, Tailwind CSS, Vercel, SEO best practices</p>
    </div>

    <div>
      <a href="/kontakt" class="inline-block bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 transition">
        Skal vi galoppere sammen? Kontakt os →
      </a>
    </div>
  </div>
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
