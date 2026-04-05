import { MessageCircle, Layout, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Indledende dialog",
    text: "Vi starter med en uforpligtende samtale, hvor vi lærer din virksomhed og dine mål at kende i Horsens og Midtjylland.",
  },
  {
    icon: Layout,
    title: "Struktur & design",
    text: "Vi laver et klart overblik, wireframes og et design, der matcher din virksomheds identitet.",
  },
  {
    icon: Code2,
    title: "Udvikling",
    text: "Vi bygger dit website med moderne teknologier, der er stabile, hurtige og SEO-optimerede.",
  },
  {
    icon: Rocket,
    title: "Lancering & support",
    text: "Når websitet går live, sørger vi for support og optimering, så det performer lokalt og nationalt.",
  },
];

const ProcessBlock = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-16 text-[#1c1e1e]">
        Sådan arbejder vi
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-[#f7f6f6] shadow hover:shadow-lg transition">
              <Icon size={36} className="text-[#0af]" />
              <h3 className="text-xl font-semibold text-[#1c1e1e]">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessBlock;
