import FeedBackPeople from "../components/FeedBackPeople";  
import SEO from "../components/SEO";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


export const metadata = {
  title: "Vores Services | WebHjerte",
  description: "Vi tilbyder skræddersyede webudviklingsløsninger, SEO-optimering, responsivt design og e-handelsplatforme.",
  keywords: "webudvikling, SEO, responsivt design, e-handel, UX/UI design, digital marketing",
  openGraph: {
    title: "Vores Services | WebHjerte",
    description: "Se vores professionelle webudviklings- og SEO-tjenester.",
    url: "https://webhjerte.dk/services",
    image: "/og-services.jpg",
  },
};



const Services = () => {
  return (
    <>
      <section>
        <h2 className="maintitle text-center mt-[75px]">Hvad tilbyder vi?</h2>
        <p className="text-center">
          Professionel webdesign til danske småvirksomheder.
        </p>
      </section>
      <section className="bg-[#F7F6F6]">
        <h3 className="title !my-3">Web Udvikling</h3>
        <div className="flex justify-between md:flex-row flex-col gap-5 ">
          {/* Start Package */}
          <div className="bg-[#E9E9E9] p-4 rounded-2xl flex flex-col gap-3">
            <h3 className="title-price">Start</h3>
            <div className="rounded-2xl flex flex-col gap-3">
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Onepage hjemmeside
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Moderne design
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Optimeret til mobil og
                tablet
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Grundlæggende
                SEO-optimering
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> SSL-certifikat
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Kontaktformular
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Google
                Maps-integration
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Galleri + videomodul
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Links til sociale
                medier
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> 100% ejerskab af
                hjemmesiden
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <p className="price">2.495 DKK</p>
              <button className="buy flex items-center justify-between gap-5">
                bestil <FaArrowRightLong />{" "}
              </button>
            </div>
          </div>

          {/* Business Package */}
          <div className="bg-[#E9E9E9] p-4 rounded-2xl flex flex-col gap-4">
            <h3 className="title-price">Business</h3>
            <div className="rounded-2xl flex flex-col gap-3">
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Fler-sidet hjemmeside
                (op til 5 sider)
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Unikt design
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Optimeret til mobil og
                tablet
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> SEO-optimering +
                hurtig indlæsning
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Kontaktformular +
                chatbot
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Google
                Maps-integration
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Blog eller
                nyhedssektion
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Galleri + videomodul
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Links til sociale
                medier
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> 100% ejerskab af
                hjemmesiden
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <p className="price">3.995 DKK</p>
              <button className="buy flex items-center justify-between gap-5">
                bestil <FaArrowRightLong />{" "}
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-[#E9E9E9] p-5 rounded-2xl flex flex-col gap-3">
            <h3 className="title-price">Premium</h3>
            <div className="rounded-2xl flex flex-col gap-3">
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Premium hjemmeside (op
                til 10 sider)
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Unikt design med
                animationer
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Avanceret
                SEO-optimering
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Opsætning af
                betalingsløsninger
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Admin-panel til
                indholdsredigering
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Chatbot eller online
                support
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Blog, FAQ, portefølje,
                katalog
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Galleri + videomodul
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> Links til sociale
                medier
              </div>
              <div className="text flex items-center gap-3 bg-white rounded-2xl p-2">
                <FaCircleCheck className="text-[20px]" /> 100% ejerskab af
                hjemmesiden
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <p className="price">6.995 DKK</p>
              <button className="buy flex items-center justify-between gap-5">
                bestil <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text my-5">!Vores virksomhed tilbyder ikke domæner og hosting, men vi er eksperter i at hjælpe med opsætningen. Vi sikrer, at alt fungerer perfekt, så du kan fokusere på din forretning uden bekymringer.</p>
        </div>
      </section>
      <SEO></SEO>
      <FeedBackPeople />
    </>
  );
};

export default Services;
