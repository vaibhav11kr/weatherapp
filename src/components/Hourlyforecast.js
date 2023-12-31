import React from 'react'
import { iconUrlFromCode } from "../services/weatherServices";

const Hourlyforecast = ({weather}) => {
  const containerClass = "bg-[#202B3B] rounded-lg mt-4 p-4";
  const headingClass = "text-base text-[#9399A2] text-center";
  const innerContainerClass = "flex whitespace-nowrap overflow-x-auto mt-2";
  const itemContainerClass = "flex flex-col flex-grow justify-center items-center pr-3 h-25 w-40 m-2 border-r-2 border-[#35445D]";
  const timeClass = "text-[#9399A2]";
  const temperatureClass = "text-[#DEE0E4]";
  const imageClass = "h-8 w-8";

  return (
    <div className={containerClass}>
      <h2 className={headingClass}>TODAY'S FORECAST</h2>
      <div className={innerContainerClass}>
      {weather.map((hour, index) => (
          <div key={index} className={itemContainerClass}>
            <h3 className={timeClass}>{hour.title}</h3>
            <img src={iconUrlFromCode(hour.icon)} className={imageClass} alt={hour.title} />
            <p className={temperatureClass}>{hour.temp}° C</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hourlyforecast;
