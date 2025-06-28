// pages/skabeloner.js
import Head from "next/head";
import Link from "next/link";
import AnimatedInView from "../components/AnimatedInView";
import Button from "../components/Button";

const templates = [
  {
    id: 1,
    title: "Portfolio Skabelon",
    image: "/templates/portfolio.png",
    description:
      "Et moderne og stilrent portfolio-skabelon, perfekt til freelancere og kreative.",
    link: "/templates/portfolio-demo",
    price: "Gratis",
  },
  {
    id: 2,
    title: "Business Skabelon",
    image: "/templates/business.png",
    description:
      "Professionelt skabelon til små virksomheder med alt, du har brug for.",
    link: "/templates/business-demo",
    price: "149 kr",
  },
  {
    id: 3,
    title: "Restaurant Skabelon",
    image: "/templates/restaurant.png",
    description:
      "Elegant design til caféer og restauranter – menu, booking og mere.",
    link: "/templates/restaurant-demo",
    price: "249 kr",
  },
];

export default function Skabeloner() {
  return (
    <>
      <section>
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
          Hvad tilbyder vi?{" "}
        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg">
          Professionel webdesign til danske småvirksomheder.
        </AnimatedInView>
      </section>
      <section className="bg-[#F7F6F6]">
        <h2 className="title !my-3">Vælg en skabelon</h2>
        <div className="flex justify-between md:flex-row flex-col gap-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/*  {templates.map((template, index) => (
              <div
                key={index}
                className="bg-[#E9E9E9] p-6 rounded-2xl flex flex-col gap-3 justify-between max-[750px]:mx-20 max-[600px]:mx-5 max-[400px]:mx-0"
              >
                <img
                src={template.image}
                alt={template.title}
                className="w-full h-48 object-cover"
              />
                <h3 className="title-price !text-left">{template.title}</h3>
                <p className="text !min-h-[90px]">{template.description}</p>
                <p className="price pb-4">Pris: {template.price}</p>

                <Link href={""}>
                  <Button name="Læs mere"></Button>
                </Link>
              </div>
            ))} */}
            <p className="text !min-h-[90px]">Vi har ikke nu</p>
          </div>
        </div>
      </section>
    </>
  );
}
