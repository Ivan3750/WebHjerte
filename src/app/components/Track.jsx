"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "../components/Button";
import AnimatedInView from "./AnimatedInView";





const Track = () => {
  const [projectNumber, setProjectNumber] = useState("");
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleInputChange = (e) => {
    setProjectNumber(e.target.value);
  };

  const handleFetchProject = async () => {
    console.log(projectNumber);
    if (!projectNumber) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://web-cbe1.onrender.com/project/${projectNumber}`
      );
      if (!response.ok) {
        throw new Error("Project not found");
      }

      const data = await response.json();
      setProjectData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  function formatTimeRemaining(deadline) {
    const now = new Date();
    const targetDate = new Date(deadline);

    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return "Færdig";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    return `${days}d ${hours}t ${minutes}m`;
  }

  return (
    <div className="bg-[#1D1E1F] min-h-screen p-6 py-12 md:p-10">
      <AnimatedInView
        as="h1"
        className="text-[#4FA0F1] font-unbounded text-4xl md:text-7xl font-bold leading-tight tracking-normal text-left p-2 md:p-4"
      >
        Spor projektet
      </AnimatedInView>

      <div className="p-3 md:p-5 flex flex-col md:flex-row gap-4">
        <input
          type="number"
          className="input w-full md:w-auto"
          placeholder="Indtast projektnummer"
          value={projectNumber}
          onChange={handleInputChange}
        />

        <Button name="Få detaljer" onClick={handleFetchProject} />
      </div>

      <div className="bg-[#101213] rounded-2xl px-6 p-5 pt-10 border border-[#424242] min-h-[500px]">
        {loading && <p className="text-white text-center">Loading...</p>}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {projectData && (
          <>
            <div className="flex flex-col md:flex-row justify-between mb-5 gap-6 md:gap-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-0">
                {projectData.steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-[80px] md:w-[100px] flex flex-col items-center gap-3 md:gap-5">
                      <div className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-[#E1DECB] rounded-full">
                        <FaCheck className="text-white text-xl md:text-2xl" />
                      </div>
                      <p className="text-[#B3B1B1] font-unbounded text-xs md:text-sm font-normal leading-5 text-center">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center md:items-start gap-4">
                <p className="text-white font-unbounded text-3xl md:text-5xl font-medium leading-tight md:leading-[62px] text-center md:text-left">
                  {formatTimeRemaining(projectData.deadline)}
                </p>
                <Button name="Åbn beta-version" color="#FFD100" />
              </div>
            </div>
            <div className="my-10 md:my-14 flex flex-col xl:flex-row justify-start gap-10 md:gap-36">
              <div>
                <div className="text-white font-unbounded text-sm md:text-base font-medium leading-5 text-left">
                  <p>Navn: {projectData.name}</p>
                  <p className="text-white font-unbounded text-xs font-light mt-5 md:mt-7 w-full md:w-[600px]">
                    <span className="text-white font-unbounded text-xs font-medium">
                      Detaljer:
                    </span>{" "}
                    {projectData.details}
                  </p>
                  <p className="text-white font-unbounded text-xs font-light mt-5 md:mt-7 w-full md:w-[600px]">
                    <span className="text-white font-unbounded text-xs font-medium">
                      Pris:
                    </span>{" "}
                    {projectData.pris ?? "0.00 DKK"}
                  </p>

                </div>
                <div>
                  <p className="text-white font-unbounded text-xs md:text-sm font-medium text-left mt-4 md:mt-6">
                    Teknologi
                  </p>
                  <div className="flex gap-2 mt-3 md:mt-4">
                    {projectData.technology.split(",").map((tech, index) => (
                      <div
                        key={index}
                        className="w-7 md:w-8 h-7 md:h-8 bg-gray-600 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!projectNumber && (
          <>
            <div className="rounded-xl pt-10 p-6 shadow-md max-[1200px] mx-auto text-center">
              <p className="text-2xl font-semibold text-[#00aaff]">
                INDTAST KODEN PÅ DIT PROJEKT
              </p>
              <p className="text-lg text-[#00aaff] mt-4">
                Hvis du ikke har modtaget koden til dit projekt, bedes du
                kontakte WebHjerte
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Track;
