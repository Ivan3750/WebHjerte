

import Image from "next/image";
import Questions from "../components/Questions";
import Eko from "../../../public/eko.png";
import Kvalitet from "../../../public/kvalitet.png";
import Trasparens from "../../../public/transparens.png";
 





const OmOs = () => {
  return (
    <>
      <section>
        <h2 className="maintitle text-center mt-[75px]">
          Hvem er WebHjerte Studio?
        </h2>
        <p className="text-center">
          Vi er en passioneret webdesign-studio fra København.
        </p>
      </section>
      <section className="bg-[#F7F6F6] flex">
        <div>
          <h2 className="title">Vores historie</h2>
          <p className="text">
            WebHjerte blev grundlagt i 2024 i Horsens, Danmark, med en vision om
            at hjælpe små virksomheder med at skabe moderne, funktionelle og
            brugervenlige hjemmesider. Vi begyndte som et lille, passioneret
            team med ét mål: at levere skræddersyede web-løsninger, der virkelig
            gør en forskel for vores kunder. Vores team har en stor kærlighed
            til teknologi, design og innovation, og vi er stolte af at kunne
            tilbyde bæredygtige løsninger, der både ser godt ud og virker
            optimalt. Vi er drevet af ideen om, at teknologi kan ændre verden,
            og vi har forpligtet os til at arbejde med både kvalitet og
            bæredygtighed i tankerne. For os handler det ikke kun om at skabe
            fantastiske hjemmesider, men også om at sikre, at vores arbejde
            bidrager til en bedre fremtid for både vores kunder og vores planet.
            WebHjerte er ikke bare en virksomhed – det er en passion for at
            skabe noget meningsfuldt, som hjælper både lokale og globale samfund
            med at vokse og trives i en digital verden
          </p>
        </div>
        <div className="w-[500px]"></div>
      </section>
      <section className="bg-[#F7F6F6]">
        <h3 className="title text-center">Vores værdier</h3>
        <div className="flex flex-col gap-[75px] md:justify-center items-center">
          <div className="flex justify-between items-center flex-wrap w-[1200px] border rounded-3xl border-[#ededed] bg-[#ededed] p-4 m-auto">
            <div>
              <Image
                src={Kvalitet}
                width={500}
                height={400}
                alt="kvalitet"
                className="rounded-3xl"
              ></Image>
            </div>
            <div>
              <h3 className="title !text-[#1C1E1E]">Kvalitet</h3>
              <h4 className="text-[30px] font-bold !text-[#5E5F5F]">
                vi leverer kun det bedste
              </h4>
              <p className="text max-w-[500px]">
                Hos WebHjerte Studio er vi dedikerede til at levere kun det
                bedste. Vi stræber efter at skabe skræddersyede løsninger, der
                ikke kun opfylder, men overgår dine forventninger. Vores fokus
                er på kvalitet, funktionalitet og design, og vi sikrer, at hver
                eneste detalje er på plads, så dit projekt skiller sig ud. Vi
                leverer moderne, brugervenlige websites, der er optimeret til
                både performance og æstetik. Når du vælger WebHjerte, vælger du
                kvalitet og professionalisme.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap w-[1200px] border rounded-3xl border-[#ededed] bg-[#ededed] p-4 m-auto">
            <div>
              <h3 className="title !text-[#1C1E1E]">Transparens</h3>
              <h4 className="text-[30px] font-bold !text-[#5E5F5F]">
                ingen skjulte gebyrer.
              </h4>
              <p className="text max-w-[500px]">
                Hos WebHjerte Studio tror vi på ærlig og åben kommunikation. Der
                er ingen skjulte gebyrer eller uforudsete omkostninger, når du
                arbejder med os. Vi giver dig en klar og gennemskuelig
                prisstruktur fra starten, så du kan være sikker på, hvad du
                betaler for. Vores mål er at skabe tillid og et langtvarigt
                samarbejde, og det gør vi ved altid at være ærlige og
                transparente omkring vores processer og priser.
              </p>
            </div>
            <div>
              <Image
                src={Trasparens}
                width={500}
                height={400}
                alt="kvalitet"
                className="rounded-3xl"
              ></Image>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap w-[1200px] border rounded-3xl border-[#ededed] bg-[#ededed] p-4 m-auto">
            <div>
              <Image
                src={Eko}
                width={500}
                height={400}
                alt="kvalitet"
                className="rounded-3xl"
              ></Image>
            </div>
            <div>
              <h3 className="title !text-[#1C1E1E]">Bæredygtighed </h3>
              <h4 className="text-[30px] font-bold !text-[#5E5F5F]">
                {" "}
                5% går til miljøprojekter.
              </h4>
              <p className="text max-w-[500px]">
                Hos WebHjerte Studio er vi stolte af at bidrage til en mere
                bæredygtig fremtid. Derfor afsætter vi 5% af vores indtjening
                til miljøprojekter, der arbejder for at beskytte vores planet.
                Vi tror på, at hver lille handling tæller, og ved at støtte
                disse projekter håber vi at gøre en positiv forskel. Når du
                vælger at arbejde med os, er du med til at støtte en grønnere
                verden – en investering i både din virksomhed og i fremtiden for
                vores miljø.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Questions></Questions>
    </>
  );
};

export default OmOs;
