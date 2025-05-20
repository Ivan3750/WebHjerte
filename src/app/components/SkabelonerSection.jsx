// components/SkabelonerSection.tsx
import Image from "next/image";
import Link from "next/link";

const templates = [
  {
    title: "Frisørsalon Skabelon",
    description: "Moderne og hurtig skabelon til frisører og beauty-branchen.",
    image: "/templates/frisør.png",
  },
  {
    title: "Café Hjemmeside",
    description: "En klar-til-brug skabelon til caféer og små restauranter.",
    image: "/templates/cafe.png",
  },
  {
    title: "Håndværker Landing",
    description: "Skabelon til lokale håndværkere med kontaktformular og galleri.",
    image: "/templates/haandvaerker.png",
  },
];

export default function SkabelonerSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Professionelle Skabeloner</h2>
        <p className="text-gray-600 mb-10">Klar-til-brug skabeloner, perfekt til små virksomheder. Du kan selv redigere – eller lade os gøre det for dig.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <Image
                src={template.image}
                alt={template.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{template.title}</h3>
                <p className="text-gray-600 mt-2">{template.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/skabeloner">
            <p className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Se alle skabeloner</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
