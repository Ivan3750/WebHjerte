const InfoBlock = () => {
  return (
    <section className="relative py-28 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7f6f6] to-white" />

      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
        {/* Left */}
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center rounded-full bg-[#0af]/15 px-4 py-1 text-sm font-semibold tracking-wide text-[#0af]">
            Webbureau Horsens
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-[#1c1e1e]">
            Webbureau i Horsens
            <br />
            <span className="text-gray-500 font-normal">
              – professionelt webdesign til lokale virksomheder
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            Som <strong>webbureau i Horsens</strong> hjælper WebHjerte små, mellemstore
            virksomheder i Midtjylland med at få flere kunder gennem moderne,
            SEO-optimerede hjemmesider. Vi forstår de lokale virksomheders behov
            og leverer webdesign, der konverterer besøgende til kunder.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            Vores <strong>webbureau i Horsens</strong> arbejder jordnært og gennemsigtigt – 
            uden buzzwords eller lange bindinger. Vi tilbyder alt fra webdesign, SEO 
            til løbende support, så din virksomhed kan vokse online.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Lokal viden om Horsens",
              text: "Vi kender det lokale marked i Horsens Midtjylland og ved, hvordan din virksomhed skiller sig ud.",
            },
            {
              title: "Webdesign der konverterer",
              text: "Brugervenlige hjemmesider designet til at få flere henvendelser og salg til din virksomhed.",
            },
            {
              title: "SEO fra dag ét",
              text: "Alle vores websites er optimeret til Google, så du bliver fundet af kunder i Horsens",
            },
            {
              title: "Lokal support når du har brug",
              text: "Hurtig support fra et webbureau i Horsens – vi er her også efter lancering.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white p-7 shadow-sm border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#1c1e1e]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
              <div className="mt-4 h-[2px] w-10 bg-[#0af] transition-all group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;