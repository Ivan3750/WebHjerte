import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Smartphone,
  Zap,
  TrendingUp,
  Clock,
  Layers,
  Code,
  Target,
} from "lucide-react";

import Button from "../../components/Button";
import AnimatedInView from "../../components/AnimatedInView";
import Pizzle from "../../assets/cases/PizzleM.png";

const cases = {
  pizzaria: {
    title: "Pizzaria Website",
    description:
      "Et helt nyt website udviklet fra bunden til en lokal pizzaria med fokus på mobil UX, performance og konvertering.",
    image: Pizzle,
    client: "Local Pizzaria",
    projectType: "New Website (from scratch)",
    services: "Strategy · Design · Development",
    stats: [
      { value: "+38 %", label: "Online orders", note: "first 30 days", icon: TrendingUp },
      { value: "92 %", label: "Mobile traffic", note: "primary user flow", icon: Smartphone },
      { value: "1.1 s", label: "Page load", note: "Lighthouse avg.", icon: Zap },
      { value: "14 days", label: "Time to launch", note: "brief → live", icon: Clock },
    ],
  },
};

export const generateMetadata = ({ params }) => {
  const data = cases[params.name];
  if (!data) return {};

  return {
    title: `${data.title} – Case Study | WebHjerte`,
    description: data.description,
  };
};

const CasePage = ({ params }) => {
  const data = cases[params.name];
  if (!data) notFound();

  return (
    <section className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 text-center px-4 md:px-12">
        <AnimatedInView
          as="h1"
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
        >
          {data.title}
        </AnimatedInView>
        <AnimatedInView delay={0.1} className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          {data.description}
        </AnimatedInView>
        <AnimatedInView delay={0.2} className="mt-12">
          <Image
            src={data.image}
            alt={`${data.title} case`}
            priority
            className="rounded-3xl mx-auto w-full max-w-4xl"
          />
        </AnimatedInView>
      </section>

      {/* PROJECT CONTEXT */}
      <section className="grid md:grid-cols-3 gap-4 my-16 px-4 md:px-12">
        <ContentBlockSimple label="Client" value={data.client} />
        <ContentBlockSimple label="Project Type" value={data.projectType} />
        <ContentBlockSimple label="Services" value={data.services} />
      </section>

      {/* IMPACT STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 px-4 md:px-12">
        {data.stats.map((item, i) => (
          <AnimatedInView key={i} delay={i * 0.1}>
            <StatCard {...item} />
          </AnimatedInView>
        ))}
      </section>

      {/* GOAL / STRATEGY / SOLUTION */}
      <section className="mt-16 grid gap-4 md:grid-cols-3 px-4 md:px-12">
        <ContentBlock
          icon={Target}
          title="Build a conversion-focused foundation"
          text="At skabe en ny digital platform, der fungerer som pizzariaets primære salgs- og informationskanal. Mobilbrugere og hastighed var førsteprioritet."
        />
        <ContentBlock
          icon={Layers}
          title="Reduce friction, increase intent"
          text="Projektet blev struktureret omkring en enkel brugerrejse med minimal friktion. Alle designbeslutninger blev taget ud fra forretningsmål – ikke trends."
        />
        <ContentBlock
          icon={Zap}
          title="Fast, focused one-page experience"
          text="En skræddersyet one-page løsning bygget fra bunden. Klar hierarki, hurtig adgang til menu og direkte handlinger som opkald og navigation."
        />
      </section>

      {/* FEATURES */}
      <section className="mb-28 px-4 md:px-12">
        <AnimatedInView className="flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
        </AnimatedInView>
        <AnimatedInView delay={0.1}>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
            <li>✔ Mobile-first architecture</li>
            <li>✔ Click-to-call & maps integration</li>
            <li>✔ SEO-ready content structure</li>
            <li>✔ Optimized assets for fast load</li>
          </ul>
        </AnimatedInView>
      </section>

      {/* TECH STACK */}
      <section className="mb-28 px-4 md:px-12">
        <ContentBlock
          icon={Code}
          title="Tech Stack"
          text="Next.js · React · Tailwind CSS · Vercel"
        />
      </section>

      {/* BUSINESS VALUE */}
      <section className="mb-28 px-4 md:px-12">
        <ContentBlock
          icon={TrendingUp}
          title="Business Value"
          text="Websitet fungerer som et aktivt salgsredskab. Hurtig mobiloplevelse og klare handlinger reducerer frafald og øger direkte bestillinger."
        />
      </section>

      {/* CTA */}
      <AnimatedInView className="bg-gray-900 text-white p-12 rounded-2xl text-center mx-4 md:mx-12 mb-24">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Har du brug for et nyt website fra bunden?
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Vi designer og bygger websites fra scratch – med fokus på performance, strategi og forretningsværdi.
        </p>
        <Button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
          Kontakt os
        </Button>
      </AnimatedInView>
    </section>
  );
};

export default CasePage;

/* =======================
   REUSABLE COMPONENTS
======================= */

// Minimal info card for project context
const ContentBlockSimple = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 hover:bg-gray-50 transition-colors duration-200">
    <p className="text-[10px] uppercase text-gray-400">{label}</p>
    <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
  </div>
);

// Modern card for Goal / Strategy / Solution
const ContentBlock = ({ icon: Icon, title, text }) => (
  <div className="flex flex-col gap-3 bg-white rounded-2xl p-5 hover:translate-y-1 transition-transform duration-200">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-yellow-50 rounded-full">
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

// Stats card
const StatCard = ({ icon: Icon, value, label, note }) => (
  <div className="flex flex-col items-center bg-white rounded-2xl p-4 hover:scale-[1.02] transition-transform duration-200">
    <div className="p-3 rounded-full bg-yellow-50 mb-2">
      <Icon className="w-5 h-5 text-yellow-500" />
    </div>
    <div className="text-xl md:text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-xs uppercase text-gray-500">{label}</div>
    <div className="text-xs text-gray-400">{note}</div>
  </div>
);
