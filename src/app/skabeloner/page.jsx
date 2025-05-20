import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "@/app/components/AnimatedInView";
const templates = [
  {
    title: "Frisørsalon Skabelon",
    description:
      "Moderne og hurtig skabelon til frisører og beauty-branchen. Enkel at redigere og responsiv på alle enheder.",
    image: "/templates/frisør.png",
    gumroadLink: "https://yourgumroadlink.com/frisor",
    price: "199 DKK",
  },
  {
    title: "Café Hjemmeside",
    description:
      "Skabelon til caféer og små restauranter med menukort og bookingfunktion. Let at komme i gang med.",
    image: "/templates/cafe.png",
    gumroadLink: "https://yourgumroadlink.com/cafe",
    price: "249 DKK",
  },
  {
    title: "Håndværker Landing",
    description:
      "Skabelon til lokale håndværkere med galleri, kontaktformular og Google Maps integration.",
    image: "/templates/haandvaerker.png",
    gumroadLink: "https://yourgumroadlink.com/haandvaerker",
    price: "179 DKK",
  },
];

export default function SkabelonerPage() {
  return (
    <>
      <Head>
        <title>Skabeloner – WebHjerte</title>
        <meta
          name="description"
          content="Køb færdige skabeloner til din virksomhed. Lavet af WebHjerte."
        />
      </Head>
<section>
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
          Vælg din skabelon{" "}
        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg">
          Har du brug for en hurtig løsning? Vælg en færdig skabelon og kom i
          gang med det samme. Alle skabeloner kan tilpasses og er responsive.{" "}
        </AnimatedInView>
</section>
      <section className="flex bg-[#F7F6F6] justify-between md:gap-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {templates.map((template, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition p-5 text-left"
            >
              <Image
                src={template.image}
                alt={template.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {template.title}
              </h3>
              <p className="text-gray-600 mt-2">{template.description}</p>
              <p className="text-black font-bold my-4 price">{template.price}</p>

              <Link
                href={template.gumroadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button max-w-[140px]"
              >
                Køb nu
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
