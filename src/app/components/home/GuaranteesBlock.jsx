const guarantees = [
  {
    title: "Udkast inden for 48 timer",
    text: "Du ser det første design allerede 48 timer efter vores samtale. Intet bygges, før du har godkendt det.",
  },
  {
    title: "0 kr, hvis det ikke passer",
    text: "Er du ikke tilfreds med designet, betaler du 0 kr for det. Justeringer undervejs er en del af prisen.",
  },
  {
    title: "Live på ca. 14 dage",
    text: "Typisk klar på 10–18 dage, afhængigt af pakke og hvor hurtigt du leverer tekster og billeder.",
  },
  {
    title: "Domæne og kode er dine",
    text: "Domænet og koden tilhører dig fra start. Du er ikke bundet til os eller en bestemt platform.",
  },
];

const GuaranteesBlock = () => {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Dine garantier
        </p>
        <h2 className="title text-white !leading-tight !mb-10 max-w-[24ch]">
          Du løber ingen risiko, før du har sagt ja
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl p-6 flex flex-col gap-3 bg-[#1c1e1e] border border-[#2a2d2d]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <p className="text-[15px] font-medium text-[#e0e0e0]">{g.title}</p>
              <p className="text-[13px] text-[#777] leading-[1.75]">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesBlock;
