import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilEye,
  UilBars,
  UilDashboard,
} from "@iconscout/react-unicons";
const AirConditions = ({ weather }) => {
  const { speed, humidity, feels_like, pressure, current, visibility } =
    weather || {};
  return (
    <div className="bg-[#202B3B] rounded-lg mt-4 p-4">
      <h2 className="text-base text-[#9399A2] text-center">AIR CONDITIONS</h2>
      <div className="flex flex-wrap mt-2 justify-evenly flex-grow">
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <UilTemperature className="mr-1 text-[#C4CAD3]" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Feels Like</h4>
            <p className="md:text-xl text-base text-[#C4CAD3] font-bold">{`${(
              feels_like - 273.15
            ).toFixed(1)}° C`}</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <UilEye className="mr-1 text-[#C4CAD3]" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Visibility</h4>
            <p className="md:text-xl text-base text-[#C4CAD3] font-bold">{`${(
              visibility / 1000
            ).toFixed(2)} km`}</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <UilWind className="mr-1 text-[#C4CAD3]" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Wind Speed</h4>
            <p className="md:text-xl text-base text-[#C4CAD3] font-bold">{`${speed.toFixed(
              1
            )} km/h`}</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <UilDashboard className="mr-1 text-[#C4CAD3]" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">UV Index</h4>
            <p className="md:text-xl text-base text-[#C4CAD3] font-bold">{`${current}`}</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <UilTear className="mr-1 text-[#C4CAD3]" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Humidity</h4>
            <p className="md:text-xl text-base text-[#C4CAD3] font-bold">{`${humidity.toFixed(
              1
            )}%`}</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <UilBars className="mr-1 text-[#C4CAD3]" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Pressure</h4>
            <p className="md:text-xl text-base text-[#C4CAD3] font-bold">{`${(
              pressure / 1013.25
            ).toFixed(2)} atm`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
