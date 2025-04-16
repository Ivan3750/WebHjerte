const Questions = () => {
  return (
    <section className="bg-[#F7F6F6]">
      <h3 className="title">Sprøgsmål og svar</h3>
      <div className=" mb-5 flex gap-5 flex-col">
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Hvilken type virksomheder arbejder WebHjerte Studio med?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Vi arbejder primært med små og mellemstore virksomheder, der ønsker
            moderne, funktionelle og økonomisk overkommelige webdesignløsninger.
            Uanset om du er en startup eller en etableret virksomhed, kan vi
            hjælpe dig med at skabe en stærk online tilstedeværelse.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Hvordan kan jeg få et tilbud på et webdesignprojekt?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Du kan kontakte os via vores hjemmeside eller sende os en e-mail, og
            vi vil aftale et møde for at forstå dine behov og mål. Baseret på
            dette vil vi give dig et skræddersyet tilbud, der passer til dit
            budget og dine ønsker.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Er mine data sikre hos WebHjerte Studio?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Ja, vi tager datasikkerhed meget alvorligt. Alle vores løsninger er
            GDPR-kompatible, og vi arbejder med de nyeste teknologier og best
            practices for at sikre, at dine data er beskyttede.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Kan jeg få support efter mit websted er lanceret?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Ja, vi tilbyder løbende support og vedligeholdelse for at sikre, at
            dit websted fortsat fungerer optimalt. Vi tilbyder både opdateringer
            og teknisk support, så du kan fokusere på at drive din virksomhed.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Hvad gør WebHjerte Studio for at sikre høj kvalitet på deres
            tjenester?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Vi sikrer høj kvalitet ved at bruge den nyeste teknologi og følger
            branchens bedste praksis. Vores team består af erfarne udviklere,
            der arbejder tæt sammen med kunderne for at forstå deres behov og
            levere skræddersyede løsninger.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Hvordan kan WebHjerte Studio hjælpe med SEO?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Vi tilbyder professionelle SEO-tjenester, der hjælper med at
            forbedre din synlighed i søgemaskiner. Dette inkluderer
            søgeordsanalyse, on-page optimering og linkbuilding for at sikre, at
            din hjemmeside rangerer højere i søgeresultaterne.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[12px] rounded-t-3xl sm:text-[14px] md:text-[16px] xl:text-[20px] cursor-pointer">
            Hvordan kan jeg holde styr på fremdriften af mit projekt?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl text-[10px] md:text-[14px]">
            Vi tilbyder en dedikeret side til projektopfølgning, hvor du kan
            følge alle faser af dit projekt i realtid. Du vil få adgang til
            detaljerede opdateringer, rapporter og fremdriftsstatusser direkte
            på denne side. Derudover får du regelmæssige opdateringer fra din
            projektleder, så du altid er informeret om, hvad der sker. -
            <a href="/track" className="text-[#0af]">
              Følg mit projekt
            </a>
          </p>
        </details>
      </div>
    </section>
  );
};

export default Questions;
