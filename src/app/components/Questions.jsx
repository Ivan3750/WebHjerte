const Questions = () => {
  return (
    <section className="bg-[#F7F6F6]">
      <h2 className="title">Sprøgsmål og svar</h2>
      <div className="px-14 flex gap-5 flex-col">
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[24px] rounded-t-3xl">
            Hvilken type virksomheder arbejder WebHjerte Studio med?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Vi arbejder primært med små og mellemstore virksomheder, der ønsker
            moderne, funktionelle og økonomisk overkommelige webdesignløsninger.
            Uanset om du er en startup eller en etableret virksomhed, kan vi
            hjælpe dig med at skabe en stærk online tilstedeværelse.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[24px] rounded-t-3xl">
            Hvordan kan jeg få et tilbud på et webdesignprojekt?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Du kan kontakte os via vores hjemmeside eller sende os en e-mail, og
            vi vil aftale et møde for at forstå dine behov og mål. Baseret på
            dette vil vi give dig et skræddersyet tilbud, der passer til dit
            budget og dine ønsker.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[24px] rounded-t-3xl">
            Er mine data sikre hos WebHjerte Studio?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Ja, vi tager datasikkerhed meget alvorligt. Alle vores løsninger er
            GDPR-kompatible, og vi arbejder med de nyeste teknologier og best
            practices for at sikre, at dine data er beskyttede.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[24px] rounded-t-3xl">
            Kan jeg få support efter mit websted er lanceret?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Ja, vi tilbyder løbende support og vedligeholdelse for at sikre, at
            dit websted fortsat fungerer optimalt. Vi tilbyder både opdateringer
            og teknisk support, så du kan fokusere på at drive din virksomhed.
          </p>
        </details>
        <details>
          <summary className="bg-[#E9E9E9] p-5  text-[#5E5F5F] font-medium text-[24px] rounded-t-3xl">
            Hvordan kan jeg holde styr på fremdriften af mit projekt?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Vi tilbyder en dedikeret side til projektopfølgning, hvor du kan
            følge alle faser af dit projekt i realtid. Du vil få adgang til
            detaljerede opdateringer, rapporter og fremdriftsstatusser direkte
            på denne side. Derudover får du regelmæssige opdateringer fra din
            projektleder, så du altid er informeret om, hvad der sker.
            <a href="/track" className="text-[#0af]">Følg mit projekt</a>
          </p>
        </details>
      </div>
    </section>
  );
};

export default Questions;
