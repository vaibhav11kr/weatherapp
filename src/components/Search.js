import React, {useState} from "react";
import { UilSearchAlt, UilMapMarker } from "@iconscout/react-unicons";

const Search = ({ setQuery }) => {
  const [city, setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="p-4 w-screen md:flex md:justify-center md:items-center md:w-[63vw]">
      <div className="relative md:w-[40vw] bg-white flex items-center rounded-lg h-10 ">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="md:w-[90%] w-[80%] h-7 px-3 focus:outline-none hover:cursor-pointer"
          placeholder="search your city ..."
          name=""
          required
        />
        <span className="absolute font-extrabold border-l pl-2 right-11 ">
          <UilSearchAlt
            onClick={handleSearchClick}
            size={20}
            className="cursor-pointer transition ease-in-out hover:scale-125"
          />
        </span>
        <span className="absolute right-4">
          <UilMapMarker
            onClick={handleLocationClick}
            size={20}
            className="cursor-pointer transition ease-in-out hover:scale-125"
          />
        </span>
      </div>
    </div>
  );
};
export default Search;
