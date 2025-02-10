import { IoCalendarNumber } from "react-icons/io5";



const Blog = () => {
    return ( <>
    <section>
        <h2 className="maintitle text-center mt-[75px]">Tips og nyheder om webdesign</h2>
        <p className="text-center">Få indsigt i de seneste trends og bedste praksis inden for webdesign.</p>
    </section>
    <section className="bg-[#F7F6F6]">
        <h3 className="title mb-5">Nyheder</h3>
        <div className="flex  gap-5 xl:flex-nowrap flex-wrap justify-center md:justify-between">
            <div key="1" className="bg-[#E9E9E9] p-4 rounded-3xl gap-3 flex flex-col md:w-[380px] sm:w-[300px] min-[800]:[280px] xl:w-[350px] box-border">
                <div className="w-full h-[200px] bg-white rounded-2xl"></div>
                <div className="gap-4 flex flex-col">
                    <h4 className="font-bold text-[14px] text-[#1C1E1E] sm:text-[16px] md:text-[18px] xl:text-[20px]">5 fejl, der ødelægger din hjemmesides SEO</h4>
                    <p className="text-[#1C1E1E] font-light text-[12px] sm:text-[13px] md:text-[14px] xl:text-[14px]">Lær, hvordan du undgår de mest almindelige SEO-fejl."Lær, hvordan du undgår de mest almindelige SEO-fejl.</p>
                    <div className="flex justify-between">
                        <button className="buy !text-[16px]">Læse mere</button>
                        <div className="flex items-center gap-2">
                            <IoCalendarNumber className="text-[#5E5F5F] text-[18px]"/>
                            <p className="text-[#5E5F5F] text-[12px]">24.02.2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div key="2" className="bg-[#E9E9E9] p-4 rounded-3xl gap-3 flex flex-col md:w-[380px] sm:w-[300px] min-[800]:[280px] xl:w-[350px] box-border">
                <div className="w-full h-[200px] bg-white rounded-2xl"></div>
                <div className="gap-4 flex flex-col">
                    <h4 className="font-bold text-[14px] text-[#1C1E1E] sm:text-[16px] md:text-[18px] xl:text-[20px]">5 fejl, der ødelægger din hjemmesides SEO</h4>
                    <p className="text-[#1C1E1E] font-light text-[12px] sm:text-[13px] md:text-[14px] xl:text-[14px]">Lær, hvordan du undgår de mest almindelige SEO-fejl."Lær, hvordan du undgår de mest almindelige SEO-fejl.</p>
                    <div className="flex justify-between">
                        <button className="buy !text-[16px]">Læse mere</button>
                        <div className="flex items-center gap-2">
                            <IoCalendarNumber className="text-[#5E5F5F] text-[18px]"/>
                            <p className="text-[#5E5F5F] text-[12px]">24.02.2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div key="3" className="bg-[#E9E9E9] p-4 rounded-3xl gap-3 flex flex-col md:w-[380px] sm:w-[300px] min-[800]:[280px] xl:w-[350px] box-border">
                <div className="w-full h-[200px] bg-white rounded-2xl"></div>
                <div className="gap-4 flex flex-col">
                    <h4 className="font-bold text-[14xpx] text-[#1C1E1E] sm:text-[16px] md:text-[18px] xl:text-[20px]">5 fejl, der ødelægger din hjemmesides SEO</h4>
                    <p className="text-[#1C1E1E] font-light text-[12px] sm:text-[13px] md:text-[14px] xl:text-[14px]">Lær, hvordan du undgår de mest almindelige SEO-fejl."Lær, hvordan du undgår de mest almindelige SEO-fejl.</p>
                    <div className="flex justify-between">
                        <button className="buy !text-[16px]">Læse mere</button>
                        <div className="flex items-center gap-2">
                            <IoCalendarNumber className="text-[#5E5F5F] text-[18px]"/>
                            <p className="text-[#5E5F5F] text-[12px]">24.02.2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </> );
}
 
export default Blog