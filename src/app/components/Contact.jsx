"use client";

import { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendForm = (event) => {
    event.preventDefault(); 
    console.log("Form submitted");
    console.log("Budget:", value);
  };

  return (
    <section className="bg-[#1C1E1F] p-6 md:p-8">
      <p className="pt-6 md:pt-12 text-[#FFFEFD] font-syne text-lg md:text-xl font-medium leading-[30.8px] text-left">
        Kontakt os
      </p>
      <h3 className="text-[#FFD100] font-syne text-3xl md:text-5xl font-bold leading-tight md:leading-[72px] text-left my-3">
        Er du klar til at føre din ide ud i livet?
      </h3>

      <form
        className="mx-auto flex flex-col gap-5 w-full max-w-lg" 
        onSubmit={sendForm}
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <input
            type="text"
            placeholder="Navn"
            required
            className="border-2 border-[#717171] rounded-[20px] p-2 w-full md:w-[48%] bg-transparent text-[#FFFEFD] font-syne text-sm md:text-lg"
          />
          <input
            type="email"
            placeholder="Email"
            required
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
            className="bg-transparent text-white border-2 border-gray-600 rounded-xl p-2 w-full focus:outline-none focus:border-yellow-500"
          >
            <option value="" selected>
              ikke valgt endnu
            </option>
            <option value="start">Start pakke</option>
            <option value="business">Business pakke</option>
            <option value="premium">Premium pakke</option>
            <option value="seo">SEO</option>
          </select>
        </div>
        <textarea
          placeholder="Fortæl os om dit projekt "
          className="resize-none h-40 md:h-[225px] overflow-hidden border-2 border-[#717171] rounded-[20px] p-2 bg-transparent text-[#FFFEFD] font-syne text-sm md:text-lg"
          rows="6"
          required
        ></textarea>
        <input
          className="file:border file:border-[#FFFEFD] file:bg-transparent file:text-[#717171] file:rounded-full file:px-4 file:py-2 file:cursor-pointer file:hover:bg-[#717171] file:transition-all"
          type="file"
          title="Attach a file related to your project"
        />
        <label htmlFor="budgetRange" className="text-[#FFFEFD] text-lg font-syne">
          Hvad er dit budget for dette projekt?
        </label>
        <p className="text-[#717171] text-lg">
          Op til <span className="text-[#FFFEFD]">{value} DKK</span>
        </p>
        <input
          className="w-full h-[10px] rounded-lg bg-[#52A9FF] cursor-pointer appearance-none focus:outline-none"
          id="budgetRange"
          type="range"
          min={1000}
          max={20000}
          step={1000}
          value={value}
          onChange={handleChange}
        />
        <button className="border-0 bg-[#FFFEFD] text-[#7A6A6A] w-full md:w-[108.25px] h-[40px] rounded-[20px] transition-all hover:scale-105 cursor-pointer">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
