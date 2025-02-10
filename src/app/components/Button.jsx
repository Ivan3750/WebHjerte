import { FaArrowRight } from "react-icons/fa6";

const Button = ({ onClick, title = "Få tilbud!" }) => {
  return (
    <button
      className="btn flex items-center gap-14 rounded-[30px] p-2 my-10"
      onClick={onClick}
    >
      {title}
      <div className="rounded-full w-[45px] h-[45px] flex justify-center items-center bg-white">
        <FaArrowRight className="text-[#000] -rotate-45" />
      </div>
    </button>
  );
};

export default Button;
