import { FaArrowRight } from "react-icons/fa6";

const Button = ({ onClick, title = "Få tilbud!" }) => {
  return (
    <button
      className="btn flex items-center gap-14 rounded-[30px] p-1 sm:p-[4px] sm:my-[10px] md:p-[5px] md:my-[20px] xl:my-[30px] xl:p-[7px] 2xl:my-[40px] 2xl:p-[8px]"
      onClick={onClick}
    >
      {title}
      <div className="rounded-full w-[25px] h-[25px] flex justify-center items-center bg-white
      sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] xl:w-[35px] xl:h-[35px] 2xl:w-[45px] 2xl:h-[45px]
      
      ">
        <FaArrowRight className="text-[#000] -rotate-45" />
      </div>
    </button>
  );
};

export default Button;
