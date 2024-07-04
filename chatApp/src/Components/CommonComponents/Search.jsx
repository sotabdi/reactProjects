import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

const Search = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="w-full px-[78px] rounded-[20px] drop-shadow-lg text-[16px] py-4 font-poppins font-medium placeholder:text-secondary_cont_color placeholder:font-poppins"
      />
        <span className="absolute top-[50%] left-[5%] inline-block text-xl text-black -translate-y-[50%]">
          <CiSearch />
        </span>
        <span className="absolute top-[50%] right-[5%] inline-block text-xl -translate-y-[50%] text-primary_Color cursor-pointer">
          <BsThreeDotsVertical />
        </span>
    </div>
  );
};

export default Search;
