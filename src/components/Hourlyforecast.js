import React from 'react'
import img from '../assets/cloud.png'

const Hourlyforecast = () => {
  const containerClass = "bg-[#202B3B] rounded-lg mt-4 p-4";
  const headingClass = "text-xs text-[#9399A2] text-center";
  const innerContainerClass = "flex whitespace-nowrap overflow-x-auto mt-2";
  const itemContainerClass = "flex flex-col flex-grow justify-center items-center pr-3 h-16 w-40 m-2 border-r-2 border-[#35445D]";
  const timeClass = "text-[#9399A2]";
  const temperatureClass = "text-[#DEE0E4]";
  const imageClass = "h-8 w-8";

  return (
    <div className={containerClass}>
      <h2 className={headingClass}>TODAY'S FORECAST</h2>
      <div className={innerContainerClass}>
        <div className={itemContainerClass}>
          <h3 className={timeClass}>2:00 PM</h3>
          <img src={img} className={imageClass} alt="" />
          <p className={temperatureClass}>27°</p>
        </div>

        <div className={itemContainerClass}>
          <h3 className={timeClass}>2:00 PM</h3>
          <img src={img} className={imageClass} alt="" />
          <p className={temperatureClass}>27°</p>
        </div>

        <div className={itemContainerClass}>
          <h3 className={timeClass}>2:00 PM</h3>
          <img src={img} className={imageClass} alt="" />
          <p className={temperatureClass}>27°</p>
        </div>

        <div className={itemContainerClass}>
          <h3 className={timeClass}>2:00 PM</h3>
          <img src={img} className={imageClass} alt="" />
          <p className={temperatureClass}>27°</p>
        </div>

        <div className={itemContainerClass}>
          <h3>3:00 PM</h3>
          <img src={img} className={imageClass} alt="" />
          <p>27°</p>
        </div>

        <div className={itemContainerClass}>
          <h3>3:00 PM</h3>
          <img src={img} className={imageClass} alt="" />
          <p>27°</p>
        </div>
      </div>
    </div>
  )
}

export default Hourlyforecast;
