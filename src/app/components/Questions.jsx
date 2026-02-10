const Questions = () => {
  return (
    <section className="bg-[#F7F6F6] py-12 px-4">
      <h3 className="title text-center mb-8">Ofte stillede spørgsmål</h3> 
      <p className="text-center text-gray-600 mb-8">Hurtige svar på de mest almindelige spørgsmål.</p>
      <div className="mb-5 flex gap-5 flex-col max-w-6xl mx-auto">
        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Hvilken type virksomheder arbejder WebHjerte med?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            WebHjerte arbejder primært med små og mellemstore virksomheder, som ønsker moderne, funktionelle og prisvenlige webdesignløsninger. Uanset om du er en startup eller etableret virksomhed, hjælper WebHjerte med at skabe en stærk online tilstedeværelse.
          </p>
        </details>

        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Hvordan kan jeg få et tilbud på et webdesignprojekt?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Du kan kontakte WebHjerte via hjemmesiden eller e-mail. Herefter aftales et møde for at forstå dine behov og mål, og du modtager et skræddersyet tilbud, der passer til dit budget og dine ønsker.
          </p>
        </details>

        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Er mine data sikre hos WebHjerte?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Ja, datasikkerhed er en høj prioritet hos WebHjerte. Alle løsninger er GDPR-kompatible, og nyeste teknologier og best practices anvendes for at beskytte dine data.
          </p>
        </details>

        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Kan jeg få support efter mit websted er lanceret?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Ja, WebHjerte tilbyder løbende support og vedligeholdelse, så dit websted fortsat fungerer optimalt. Opdateringer og teknisk support sikrer, at du kan fokusere på at drive din virksomhed.
          </p>
        </details>

        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Hvordan sikrer WebHjerte høj kvalitet på tjenesterne?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            Høj kvalitet sikres gennem brug af nyeste teknologi og branchens bedste praksis. WebHjerte fokuserer på skræddersyede løsninger tilpasset kundens behov.
          </p>
        </details>

        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Hvordan kan WebHjerte hjælpe med SEO?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            WebHjerte tilbyder professionelle SEO-tjenester, inklusiv søgeordsanalyse, on-page optimering og linkbuilding, for at sikre, at din hjemmeside rangerer højere i søgeresultater.
          </p>
        </details>

        <details>
          <summary className="bg-[#E9E9E9] p-5 text-[#5E5F5F] rounded-t-3xl cursor-pointer !font-medium">
            Hvordan kan jeg følge fremdriften af mit projekt?
          </summary>
          <p className="bg-[#E9E9E9] text-[#5E5F5F] p-5 rounded-b-3xl">
            WebHjerte tilbyder en dedikeret side til projektopfølgning, hvor du kan følge alle faser af projektet i realtid. Du får detaljerede opdateringer, rapporter og statusser. Derudover modtager du regelmæssige opdateringer fra WebHjerte.
            - <a href="/track" className="text-[#0af]">Følg mit projekt</a>
          </p>
        </details>
      </div>
    </section>
  );
};

export default Questions;
