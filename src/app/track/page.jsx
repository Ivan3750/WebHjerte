import { FaCheck } from "react-icons/fa6";

const Track = () => {
    return (
        <div className="bg-[#1D1E1F] min-h-screen p-6 md:p-10">
            <h2 className="text-[#4FA0F1] font-unbounded text-4xl md:text-7xl font-light leading-tight tracking-normal text-left p-2 md:p-4">
                Spor projektet
            </h2>
            <div className="p-3 md:p-5 flex flex-col md:flex-row gap-4">
                <input type="number" className="input w-full md:w-auto" placeholder="Indtast projektnummer" />
                <button className="p-3 md:p-4 px-6 md:px-9 rounded-xl bg-[#0082D1] text-white font-unbounded text-sm md:text-base font-medium leading-5">
                    Få detaljer
                </button>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-5 gap-6 md:gap-0">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-0">
                    {["Få idéer", "Design", "Udvikling", "Færdig"].map((step, index) => (
                        <div key={index} className="flex items-center">
                            <div className="w-[80px] md:w-[100px] flex flex-col items-center gap-3 md:gap-5">
                                <div className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 bg-[#E1DECB] rounded-full">
                                    <FaCheck className="text-white text-xl md:text-2xl" />
                                </div>
                                <p className="text-[#B3B1B1] font-unbounded text-xs md:text-sm font-normal leading-5 text-center">
                                    {step}
                                </p>
                            </div>
                            {index < 3 && <div className="hidden xl:block w-[50px] md:w-[50px] h-[6px] md:h-[10px] rounded-full bg-[#E1DECB]"></div>}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-white font-unbounded text-3xl md:text-5xl font-medium leading-tight md:leading-[62px] text-center md:text-left">
                        3d 5t 23min
                    </p>
                    <button className="text-white font-unbounded text-sm md:text-base font-medium leading-5 text-center md:text-left rounded-xl bg-[#FFD100] px-4 py-3">
                        Åbn beta-version
                    </button>
                </div>
            </div>
            <div className="my-10 md:my-14 flex flex-col xl:flex-row justify-start gap-10 md:gap-36">
                <div>
                    <div className="text-white font-unbounded text-sm md:text-base font-medium leading-5 text-left">
                        <p>Navn: Social Media</p>
                        <p className="text-white font-unbounded text-xs font-light mt-5 md:mt-7 w-full md:w-[600px]">
                            <span className="text-white font-unbounded text-xs font-medium">Detaljer:</span> Webstedets udviklingsproces omfatter flere vigtige faser. Vi udnytter ekspertudvikling, grundig testning og problemfri integration.
                        </p>
                    </div>
                    <div>
                        <p className="text-white font-unbounded text-xs md:text-sm font-medium text-left mt-4 md:mt-6">Teknologi</p>
                        <div className="flex gap-2 mt-3 md:mt-4">
                            <div className="w-7 md:w-8 h-7 md:h-8 bg-gray-600 rounded-full"></div>
                            <div className="w-7 md:w-8 h-7 md:h-8 bg-gray-600 rounded-full"></div>
                            <div className="w-7 md:w-8 h-7 md:h-8 bg-gray-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
                    <h3 className="text-white font-unbounded text-lg md:text-2xl font-normal leading-6 text-center md:text-left">
                        Vil du ændre noget?
                    </h3>
                    <textarea className="resize-none h-32 md:h-44 w-full md:w-80 rounded-xl bg-[#303030] p-3 md:p-4 text-white text-xs" placeholder="Indtast detaljer"></textarea>
                    <button className="py-2 px-6 md:px-7 rounded-2xl bg-[#FFFEFD] text-[#1F2122] font-syne text-sm md:text-base font-semibold text-center">
                        Indsend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Track;