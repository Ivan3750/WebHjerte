import AnimatedInView from "../AnimatedInView";

const values = [
  {
    num: "01",
    name: "Ærlighed",
    desc: "Jeg siger hvad tingene koster, hvad der er realistisk og hvornår noget ikke er en god ide - også selvom det ikke er det du vil høre.",
  },
  {
    num: "02",
    name: "Punktlighed",
    desc: "Deadlines er ikke forslag. Hvis vi aftaler at du har et udkast inden torsdag, har du et udkast inden torsdag.",
  },
  {
    num: "03",
    name: "Enkelhed",
    desc: "Jeg bygger det du har brug for - ikke det der ser imponerende ud i en præsentation. En enkel løsning der virker er altid bedre end en kompliceret der ikke gør.",
  },
];

const ValuesBlock = () => {
  return (
    <section className="bg-[#f7f6f6] border-t border-[#e8e8e8] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-3">
          Sådan arbejder jeg
        </AnimatedInView>
        -<AnimatedInView as="h2" className="title text-[#1c1e1e] !leading-tight mb-12">
          Tre principper -<br />ikke mere, ikke mindre
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#ebebeb] rounded-2xl overflow-hidden">
          {values.map(({ num, name, desc }) => (
            <AnimatedInView
              key={num}
              as="div"
              className="bg-white px-8 py-9 flex flex-col gap-4"
            >
              <span className="text-[11px] text-[#ccc] font-medium tracking-[0.08em]">
                {num}
              </span>
              <p className="text-[20px] font-medium text-[#1c1e1e]">{name}</p>
              <div className="w-6 h-[1.5px] bg-[#00a8e8] rounded-sm" />
              <p className="text-[13px] text-[#888] leading-[1.75]">{desc}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesBlock;
