import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchAction = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <IoMdSearch
        className="text-[16px] cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute w-[313px] right-0 top-[33px] z-10 py-[15px] px-[17px] bg-white rounded-md shadow-lg">
          <form>
            <div className="flex justify-between border border-slate-400 rounded-3xl">
              <input
                type="text"
                placeholder="Search"
                className="border-none ml-5 h-10 focus:outline-none"
              />
              <button type="submit" className="h-10 w-10">
                <IoMdSearch />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchAction;
