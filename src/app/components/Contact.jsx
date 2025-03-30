"use client"

import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [packageSelected, setPackageSelected] = useState("");
  const [project, setProject] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    const formData = {
      name,
      email,
      packages: packageSelected,
      project,
      budget: value,
    };

    try {
      const response = await fetch("/api/telegramRoute/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage({ type: "success", text: "Formular sendt succesfuldt!" });
      } else {
        setStatusMessage({ type: "error", text: "Kunne ikke sende formularen." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage({ type: "error", text: "Der opstod en fejl under afsendelsen." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#1C1E1F] p-6 md:p-8">
      <h2 className="pt-6 md:pt-12 text-[#FFFEFD] font-syne text-lg md:text-xl font-medium leading-[30.8px] text-left">
        Kontakt os
      </h2>
      <h2 className="text-[#FFD100] font-syne text-3xl md:text-5xl font-bold leading-tight md:leading-[72px] text-left my-3">
        Er du klar til at føre din ide ud i livet?
      </h2>

      <form
        className="mx-auto flex flex-col gap-5 w-full max-w-[800px]"
        onSubmit={sendForm}
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <input
            type="text"
            placeholder="Navn"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-[#717171] rounded-[20px] p-2 w-full md:w-[48%] bg-transparent text-[#FFFEFD] font-syne text-sm md:text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-[#717171] rounded-[20px] p-2 w-full md:w-[48%] bg-transparent text-[#FFFEFD] font-syne text-sm md:text-lg"
          />
        </div>
        <div>
          <label htmlFor="packageSelect" className="block text-white mb-2">
            Vælg en pakke
          </label>
          <select
            id="packageSelect"
            name="package"
            value={packageSelected}
            onChange={(e) => setPackageSelected(e.target.value)}
            className="bg-transparent text-white border-2 border-gray-600 rounded-xl p-2 w-full focus:outline-none !bg-[#1C1E1F]"
          >
            <option value="">ikke valgt endnu</option>
            <option value="start">Start pakke</option>
            <option value="standart">Standart pakke</option>
            <option value="professionel">Professionel pakke</option>
            <option value="avanceret">Avanceret pakke</option>
            <option value="premium">Premium pakke</option>
            <option value="support">Support pakke</option>
          </select>
        </div>
        <textarea
          placeholder="Fortæl os om dit projekt"
          className="resize-none h-40 md:h-[225px] border-2 border-[#717171] rounded-[20px] p-2 bg-transparent text-[#FFFEFD] font-syne text-sm md:text-lg"
          rows="6"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        ></textarea>
        <label htmlFor="budgetRange" className="text-[#FFFEFD] text-lg font-syne">
          Hvad er dit budget for dette projekt?
        </label>
        <p className="text-[#717171] text-lg">
          Op til <span className="text-[#FFFEFD]">{value >= 20000 ? "20000+" : value} DKK</span>
        </p>
        <input
          className="w-full h-[10px] rounded-lg bg-[#52A9FF] cursor-pointer appearance-none focus:outline-none"
          id="budgetRange"
          type="range"
          min={500}
          max={20500}
          step={500}
          value={value}
          onChange={handleChange}
        />
        <button
          className="border-0 bg-[#FFFEFD] text-[#7A6A6A] w-full md:w-[108.25px] h-[40px] rounded-[20px] transition-all hover:scale-105 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Sender..." : "Send"}
        </button>

        {statusMessage && (
          <p
            className={`mt-4 text-center p-3 rounded-3xl ${
              statusMessage.type === "success" ? "bg-[#20C85E] text-white" : "bg-[#F2352A] text-white"
            }`}
          >
            {statusMessage.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
