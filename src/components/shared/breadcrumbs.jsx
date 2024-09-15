import { IoIosArrowForward } from "react-icons/io";

const BreadCrumbs = ({ title, className, classIcon }) => {
  return (
    <div
      className={`flex text-[13px] text-[#999] gap-1 items-center cursor-pointer`}
    >
      <span className={` ${classIcon}`}>
        <IoIosArrowForward />
      </span>
      <span className={` ${className}`}>{title}</span>
    </div>
  );
};

export default BreadCrumbs;
