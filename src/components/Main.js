import React from "react";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/weatherServices";
const Main = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    name,
    country,
    timezone,
  }
}) => {
  const containerClass =
    "relative bg-[#0B131E] flex flex-col items-center rounded-lg h-[10.5rem] md:h-[15rem]";
  const textInfoClass = "text-[#DEE0E4] absolute left-1 md:left-16 font-bold";
  const cityClass = "mt-3 md:mt-6 md:text-4xl text-3xl";
  const imageContainerClass =
    "absolute right-3 md:right-20 pt-4 flex items-center justify-center";
  const imageClass =
    "h-[4rem] w-[4rem] md:h-[8rem] md:w-[8rem] bg-no-repeat bg-center";
  const infoBarClass =
    "bg-[#202B3B] w-[100%] md:w-[90%] md:h-10 h-8 flex absolute bottom-0 justify-center items-center rounded-lg";
  const infoBarItemClass = "text-[0.7rem] md:text-base text-[#F0F1F1]";
  return (
    <div className={containerClass}>
      <div className="flex flex-row ">
        <div className={textInfoClass}>
          <h1 className="md:text-5xl text-2xl">{`${name}, ${country}`}</h1>
          <p className="text-[#8C929B] md:text-2xl text-lg">{`${details}`}</p>
          <h3 className={cityClass}>{`${(temp - 273.15).toFixed(1)}° C`}</h3>
        </div>
        <div className={imageContainerClass}>
          <img
            src={iconUrlFromCode(icon)}
            alt={details}
            className={imageClass}
          />
        </div>
      </div>
      <div className={infoBarClass}>
        <p className={infoBarItemClass}>Rise :{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span> </p>
          <p className=" ml-1 mr-1 text-[0.5rem] md:text-base text-[#F0F1F1]"> || </p>
        <p className={infoBarItemClass}>Set :{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span></p>
          <p className=" ml-1 mr-1 text-[0.5rem] md:text-base text-[#F0F1F1]"> || </p>
        <p className={infoBarItemClass}>High :{" "}
        <span className="font-medium ml-1">{`${(temp_max - 273.15).toFixed(1)}° C`}</span></p>
        <p className=" ml-1 mr-1 text-[0.5rem] md:text-base text-[#F0F1F1]"> || </p>
        <p className={infoBarItemClass}>Low :{" "}
          <span className="font-medium ml-1">{`${(temp_min - 273.15).toFixed(1)}° C`}</span></p>
      </div>
    </div>
  );
};

export default Main;
