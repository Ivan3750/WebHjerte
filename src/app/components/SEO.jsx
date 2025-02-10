"use client";

import { useState } from "react";
import axios from "axios";

const SEO = () => {
  const [url, setUrl] = useState("");
  const [score, setScore] = useState(0);
  const [lcp, setLcp] = useState(0);
  const [fid, setFid] = useState(0);
  const [loading, setLoading] = useState(false);
  const API_KEY = "AIzaSyC5P33iO7gB-4Dt5eKfUsOSxG1j8k6hCZE";

  const checkSEO = async () => {
    if (!url) return alert("Введіть URL");

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&key=${API_KEY}`
      );

      const data = response.data.lighthouseResult;
      setScore(Math.round(data.categories.performance.score * 100));
      setLcp(data.audits["largest-contentful-paint"]?.displayValue || "N/A");
      setFid(data.audits["first-input-delay"]?.displayValue || "N/A");
    } catch (error) {
      console.error("Error fetching SEO data:", error);
      alert("Помилка при отриманні даних. Перевірте API-ключ.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2 className="title">SEO tjek</h2>
      <p>Professionelt SEO-tjek gratis af din hjemmeside</p>

      <div className="mt-5 gap-2 flex flex-wrap">
        <input
          type="text"
          className="input p-2  rounded mr-2 md:w-[500px] min-w-[200px] w-full"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="btn p-2 px-8 rounded-2xl bg-blue-500 text-white"
          onClick={checkSEO}
          disabled={loading}
        >
          {loading ? "Analyserer..." : "Tjek"}
        </button>
      </div>

      {
        /* score !== null */ true && (
          <div className="mt-10 ">
            <div className="flex justify-between items-center gap-4 md:flex-row flex-col">
              <div className="border-[10px] border-yellow-500 text-yellow-500 w-[150px] h-[150px] rounded-full text-center text-[40px] font-bold flex items-center justify-center md:mx-0 mx-auto">
                {score}
              </div>
              <div className="bg-[#252727] text-white  p-5 rounded-2xl flex gap-5 flex-wrap md:flex-nowrap items-center justify-center">
                <div className="border-[10px] border-yellow-500 text-yellow-500 w-[170px] h-[170px] rounded-full text-center text-[35px] font-bold flex items-center justify-center flex-col">
                  <p>{score}</p>
                  <p className="text-[11px]">Effektivitet</p>
                </div>
                <div className="border-[10px] border-yellow-500 text-yellow-500 w-[170px] h-[170px] rounded-full text-center text-[35px] font-bold flex items-center justify-center flex-col">
                  <p>{score}</p>
                  <p className="text-[11px]">Tilgængelighed</p>
                </div>
                <div className="border-[10px] border-yellow-500 text-yellow-500 w-[170px] h-[170px] rounded-full text-center text-[35px] font-bold flex items-center justify-center flex-col">
                  <p>{score}</p>
                  <p className="text-[11px]">Optimale metoder</p>
                </div>
                <div className="border-[10px] border-yellow-500 text-yellow-500 w-[170px] h-[170px] rounded-full text-center text-[35px] font-bold flex items-center justify-center flex-col">
                  <p>{score}</p>
                  <p className="text-[11px]">Optimal søgnings</p>
                </div>
              </div>
            </div>
            <div className="bg-[#252727] text-white my-5 p-5 rounded-2xl h-[210px] ">
                <p className="text-sm">
                  <span className="font-bold">Navn:</span> {score}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Største synlige indhold:</span>{" "}
                  {lcp}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Første inputforsinkelse:</span>{" "}
                  {fid}
                </p>
                <div className=" flex justify-between">
              <p>Vi kan forbedre din hjemmeside til 100 for kun 299 kr. </p>
              <button className="buy">Bestil </button>
            </div>
              </div>
           
          </div>
        )
      }
    </section>
  );
};

export default SEO;
