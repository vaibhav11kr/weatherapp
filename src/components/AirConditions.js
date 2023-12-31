import React from "react";
import real_feel from "../assets/real_feel.png";

const AirConditions = () => {
  const containerClass = "bg-[#202B3B] rounded-lg mt-4 p-4";
  const headingClass = "text-xs text-[#9399A2] text-center";
  const flexContainerClass = "flex flex-wrap mt-2 justify-evenly flex-grow";
  const itemContainerClass = "flex h-16 m-2";
  const imageContainerClass = "h-8 w-8";
  const textContainerClass = "text-base text-[#9399A2]";
  const temperatureClass = "text-xl text-[#C4CAD3] font-bold";

  return (
    <div className={containerClass}>
      <h2 className={headingClass}>AIR CONDITIONS</h2>
      <div className={flexContainerClass}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={itemContainerClass}>
            <div className={imageContainerClass}>
              <img src={real_feel} alt="real_feel" />
            </div>
            <div>
              <h4 className={textContainerClass}>Real Feel</h4>
              <p className={temperatureClass}>30°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirConditions;
