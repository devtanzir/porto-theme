import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { IoDiamondOutline, IoGridOutline } from "react-icons/io5";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "Creative Websites",
      logo: <IoDiamondOutline />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte.",
    },
    {
      title: "Contact Forms",
      logo: <FaRegComment />,
      description:
        "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
    },
    {
      title: "Portfolio Pages",
      logo: <IoGridOutline />,
      description:
        "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="w-full max-w-[500px] rounded-lg p-3 *:mix-blend-difference  bg-white">
      {dataArr.map((PerAccordion, idx) => (
        <div key={idx} className="pt-4 pb-1 mb-2 px-1 bg-[#0c0c0c] rounded">
          <button
            onClick={() => toggle(idx)}
            className="flex px-5 h-full w-full items-center gap-3 pb-4 font-medium text-white outline-none"
          >
            {PerAccordion?.logo}
            <span>{PerAccordion.title}</span>
          </button>
          <div
            className={`grid overflow-hidden text-[#777] rounded bg-black px-2 transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-sm">
              {PerAccordion.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
