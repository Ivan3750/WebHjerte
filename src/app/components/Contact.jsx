"use client"

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    const formData = {
      name,
      email,
      project,
    };

    try {
      const response = await fetch("https://web-cbe1.onrender.com/telegram/submit-contact", {
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
    <section className="bg-[#1C1E1F] p-6 py-10 md:p-10">
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
        <p>Vi lover at svare inden for 24 timer - ellers får du 25% rabat.</p>
        <p className="text-white text-sm">Eller send os en e-mail på <a href="mailto:hej@webhjerte.dk" className="text-[#FFD100]">hej@webhjerte.dk</a></p>

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

        <textarea
          placeholder="Fortæl os om dit projekt"
          className="resize-none h-40 md:h-[225px] border-2 border-[#717171] rounded-[20px] p-2 bg-transparent text-[#FFFEFD] font-syne text-sm md:text-lg"
          rows="6"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        ></textarea>

        <button
          className="border-0 bg-[#FFFEFD] text-[#7A6A6A] w-full md:w-[108.25px] h-[40px] rounded-[20px] transition-all hover:scale-105 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Sender..." : "Send"}
        </button>

        {statusMessage && (
          <p
            className={`mt-4 text-center p-3 rounded-3xl ${statusMessage.type === "success" ? "bg-[#20C85E] text-white" : "bg-[#F2352A] text-white"}`}
          >
            {statusMessage.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
