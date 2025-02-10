"use client"

import { useState } from "react";

const Contact = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const sendForm = (event) => {
        event.preventDefault(); // Prevents page reload
        console.log("Form submitted");
        console.log("Budget:", value);
        // Add form submission logic here
    };

    return (
        <section className="bg-[#1C1E1F] p-8">
            <p className="pt-12 text-[#FFFEFD] font-syne text-xl font-medium leading-[30.8px] text-left">Kontakt os</p>
            <h3 className="text-[#FFD100] font-syne text-[65px] font-bold leading-[72px] text-left my-3">Er du klar til at føre din ide ud i livet?</h3>

            <form className="mx-auto flex flex-col gap-5 w-[600px]" onSubmit={sendForm}>
                <div className="flex justify-between">
                    <input type="text" placeholder="Navn" required className="border-2 border-[#717171] rounded-[20px] p-2 w-[45%] bg-transparent text-[#FFFEFD] font-syne text-lg" />
                    <input type="email" placeholder="Email" required className="border-2 border-[#717171] rounded-[20px] p-2 w-[45%] bg-transparent text-[#FFFEFD] font-syne text-lg" />
                </div>
                <div>
    <label htmlFor="packageSelect" className="block text-white mb-2">Vælg en pakke</label>
    <select
        id="packageSelect"
        name="package"
        className="bg-transparent text-white border-2 border-gray-600 rounded-xl p-2 w-full focus:outline-none focus:border-yellow-500"
    >
        <option value=""  selected>ikke valgt endnu</option>
        <option value="start">Start pakke</option>
        <option value="business">Business pakke</option>
        <option value="premium">Premium pakke</option>
        <option value="seo">SEO</option>
    </select>
</div>
                <textarea
                    placeholder="Fortæl os om dit projekt "
                    className="resize-none h-[225px] overflow-hidden border-2 border-[#717171] rounded-[20px] p-2 bg-transparent text-[#FFFEFD] font-syne text-lg"
                    rows="8"
                    cols="50"
                    required
                ></textarea>
                <input
                    className="file:border file:border-[#FFFEFD] file:bg-transparent file:text-[#717171] file:rounded-full file:px-4 file:py-2 file:cursor-pointer file:hover:bg-[#717171] file:transition-all"
                    type="file"
                    title="Attach a file related to your project"
                />
                <label htmlFor="budgetRange" className="text-[#FFFEFD] text-lg font-syne">Hvad er dit budget for dette projekt? </label>
                <p className="text-[#717171] text-xl">Op til  <span className="text-[#FFFEFD]">{value} DKK</span></p>
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
                <button className="border-0 bg-[#FFFEFD] text-[#7A6A6A] w-[108.25px] h-[40px] rounded-[20px] transition-all hover:scale-105 cursor-pointer">Send</button>
            </form>
        </section>
    );
};

export default Contact;
