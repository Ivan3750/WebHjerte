import { FaArrowRight } from "react-icons/fa6";

/* const Button = ({ onClick, title = "Få tilbud!" }) => {
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
}; */
const Button = ({ name, color, onClick }) => {
  return (
    <>
      <button className={`button bg-[${color}]`} onClick={onClick}>
        {name}
        <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
          <path
            clipRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default Button;



