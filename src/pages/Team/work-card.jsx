import { FaLink } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
const WorkCard = ({ work }) => {
  console.log(work);
  return (
    <>
      <div className="relative my-3 h-[279px] w-[279px] cursor-pointer group overflow-hidden after:absolute after:h-full after:w-full after:bg-[rgba(23,23,23,0.25)] after:left-0 after:top-0 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300">
        <img
          src={work.image}
          alt={work.name}
          className="group-hover:scale-110 transition"
        />
        <span className="text-[17px] font-bold text-white bg-[rgba(33,37,41,0.8)] pt-[13px] px-[21px] pb-3 inline-block absolute left-0 bottom-[13%] z-10 group-hover:bg-black transition">
          <span>{work.name}</span>
          <br />
          <span className="py-[2px] absolute left-[50px] top-[62%] px-3 bg-[#08c] inline-block text-[10px] font-semibold text-white uppercase mt-2">
            {work.category}
          </span>
        </span>
        <span className="absolute top-1/2 left-1/2 flex items-center gap-3 translate-x-[-50%] translate-y-[-50%] z-20 transition opacity-0 group-hover:opacity-100 duration-300">
          <span className="text-white bg-[#08c] p-4 rounded-full">
            <FaLink />
          </span>
          <span className="text-black bg-white p-4 rounded-full">
            <IoSearchSharp />
          </span>
        </span>
      </div>
    </>
  );
};

export default WorkCard;
