import { FaCheck } from "react-icons/fa6";

const Track = () => {
    return (
        <div className="bg-[#1D1E1F] min-h-screen p-10">
            <h2 className="text-[#4FA0F1] font-unbounded text-7xl font-light leading-[70px] tracking-normal text-left p-4">Spor projektet</h2>
            <div className="p-5 flex gap-4">
                <input type="number" className="input" placeholder="Indtast projektnummer"/>
                <button className="p-4 px-9 rounded-xl bg-[#0082D1] text-white font-unbounded text-base font-medium leading-5">Få detaljer</button>
            </div>
            <div className="flex justify-between mb-5">
                <div className="flex items-center">
                    <div className="w-[100px] flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#E1DECB] rounded-full">
                            <FaCheck className="text-white text-2xl" />
                        </div>
                        <p className="text-[#B3B1B1] font-unbounded text-xs font-normal leading-5">Få idéer</p>
                    </div>
                    <div className="w-[150px] h-[10px] rounded-full bg-[#E1DECB]"></div>
                    <div className="w-[100px] flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#E1DECB] rounded-full">
                            <FaCheck className="text-white text-2xl" />
                        </div>
                        <p className="text-[#B3B1B1] font-unbounded text-xs font-normal leading-5">Design</p>
                    </div>
                    <div className="w-[150px] h-[10px] rounded-full bg-[#E1DECB]"></div>
                    <div className="w-[100px] flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#E1DECB] rounded-full">
                            <FaCheck className="text-white text-2xl" />
                        </div>
                        <p className="text-[#B3B1B1] font-unbounded text-xs font-normal leading-5">Udvikling</p>
                    </div>
                    <div className="w-[150px] h-[10px] rounded-full bg-[#E1DECB]"></div>
                    <div className="w-[100px] flex flex-col items-center gap-5">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#E1DECB] rounded-full">
                            <FaCheck className="text-white text-2xl" />
                        </div>
                        <p className="text-[#B3B1B1] font-unbounded text-xs font-normal leading-5">Færdig</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className="text-white font-unbounded text-5xl font-medium leading-[62px] text-left">3d 5t 23min</p>
                    <button className="text-white font-unbounded text-base font-medium leading-5 text-left rounded-xl bg-[#FFD100] px-4 py-3">Åbn beta-version</button>
                </div>
            </div>
            <div className="my-14 flex justify-start gap-36">
                <div>
                    <div className="text-white font-unbounded text-base font-medium leading-5 text-left">
                        <p>Navn: Social Media</p>
                        <p className="text-white font-unbounded text-xs font-light mt-7 w-[600px]">
                            <span className="text-white font-unbounded text-xs font-medium">Detaljer:</span> Webstedets udviklingsproces omfatter flere vigtige faser. Vi udnytter ekspertudvikling, grundig testning og problemfri integration.
                        </p>
                    </div>
                    <div>
                        <p className="text-white font-unbounded text-xs font-medium text-left">Teknologi</p>
                        <div className="flex gap-2 mt-4">
                            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h3 className="text-white font-unbounded text-2xl font-normal leading-6 text-left">Vil du ændre noget?</h3>
                    <textarea className="resize-none h-44 w-80 rounded-xl bg-[#303030] p-4 text-white text-xs" placeholder="Indtast detaljer"></textarea>
                    <button className="py-2 px-7 rounded-2xl bg-[#FFFEFD] text-[#1F2122] font-syne text-sm font-semibold text-center">Indsend</button>
                </div>
            </div>
        </div>
    );
}

export default Track;
