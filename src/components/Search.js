import React from "react";
import { UilSearchAlt, UilMapMarker } from "@iconscout/react-unicons";


const Search = () => {
  return (
    <div className="relative w-11/12 bg-white flex items-center rounded-lg h-10 mt-6">
      <input
        type="text"
        className="w-[80%] h-7 px-3 focus:outline-none hover:cursor-pointer"
        placeholder="search your city ..."
        name=""
        required
      />
      <span className="absolute font-extrabold border-l pl-2 right-11 ">
        <UilSearchAlt size = {20} className="cursor-pointer transition ease-in-out hover:scale-125" />
      </span>
      <span className="absolute right-4">
        <UilMapMarker size = {20} className="cursor-pointer transition ease-in-out hover:scale-125" />
      </span>
    </div>
  );
};

export default Search;
