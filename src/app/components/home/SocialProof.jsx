import AnimatedInView from "../AnimatedInView";

const quote = {
  text: "De leverede præcis det vi bad om — til tiden og uden overraskelser på fakturaen",
  name: "Mads K.",
  company: "Køreskole Vejle",
  city: "Vejle",
};

const clients = [
  "Køreskole Vejle",
  "Tømrer Hansen",
  "Café Midt",
  "Rens & Stil",
];

const SocialProof = () => {
  return (
    <section className="bg-[#f7f6f6] py-[150px]">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <AnimatedInView
          as="p"
          className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-6"
        >
          Hvad vores kunder siger
        </AnimatedInView>

        <AnimatedInView as="blockquote" className="text-[17px] text-[#1c1e1e] leading-relaxed">
          <span className="text-[#00a8e8]">&ldquo;</span>
          {quote.text}
          <span className="text-[#00a8e8]">&rdquo;</span>
        </AnimatedInView>

        <AnimatedInView
          as="div"
          className="flex items-center gap-2 mt-4 text-xs text-[#888]"
        >
          <span>{quote.name}</span>
          <span className="w-1 h-1 rounded-full bg-[#ccc]" />
          <span>{quote.company}</span>
          <span className="w-1 h-1 rounded-full bg-[#ccc]" />
          <span>{quote.city}</span>
        </AnimatedInView>

        <div className="w-10 h-px bg-[#e0e0e0] my-7" />

        <AnimatedInView
          as="div"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {clients.map((name) => (
            <span key={name} className="text-[13px] text-[#bbb]">
              <span className="text-[#00a8e8] mr-1">→</span>
              {name}
            </span>
          ))}
        </AnimatedInView>
      </div>
    </section>
  );
};

export default SocialProof;
