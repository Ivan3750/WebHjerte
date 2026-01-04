const InfoBlock = () => {
  return (
    <section className="relative py-28 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f7f6f6] to-white" />

      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
        {/* Left */}
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center rounded-full bg-[#0af]/15 px-4 py-1 text-sm font-semibold tracking-wide text-[#0af]">
            Webbureau i Horsens
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-[#1c1e1e]">
            Et lokalt webbureau
            <br />
            <span className="text-gray-500 font-normal">
              med fokus på kvalitet og tillid
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            WebHjerte er et webbureau i Horsens, der hjælper små og mellemstore
            virksomheder i Midtjylland med at opbygge en professionel digital
            tilstedeværelse. Vi udvikler moderne hjemmesider, der er nemme at
            bruge og tilpasset din forretning.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            Vi arbejder jordnært og gennemsigtigt — uden buzzwords og lange
            bindinger. Vores løsninger er skabt til at holde og understøtte din
            forretning, både lokalt og på landsplan.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Forståelse før løsning",
              text: "Vi sætter os ind i din forretning og dine kunder, før vi designer dit website.",
            },
            {
              title: "Design med omtanke",
              text: "Brugervenligt webdesign, der gør det nemt for besøgende at tage kontakt.",
            },
            {
              title: "Teknisk kvalitet",
              text: "Stabile og sikre websites bygget med moderne teknologier.",
            },
            {
              title: "Langsigtet samarbejde",
              text: "Et webbureau du kan regne med — også efter lancering.",
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
