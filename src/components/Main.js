import React from "react";
import dummy from '../assets/dummy.png';

const Main = () => {
  const containerClass = "relative bg-[#0B131E] flex flex-col items-center rounded-lg h-[10.5rem] md:h-[15rem]";
  const textInfoClass = "text-[#DEE0E4] absolute left-1 md:left-16 font-bold";
  const cityClass = "mt-3 md:mt-6 md:text-4xl text-3xl";
  const imageContainerClass = "absolute right-3 md:right-20 pt-4 flex items-center justify-center";
  const imageClass = "h-[4rem] w-[4rem] md:h-[8rem] md:w-[8rem] bg-no-repeat bg-center";
  const infoBarClass = "bg-[#202B3B] w-[100%] md:w-[90%] md:h-10 h-8 flex absolute bottom-0 justify-center items-center rounded-lg";
  const infoBarItemClass = "text-xs md:text-base text-[#F0F1F1]";

  return (
    <div className={containerClass}>
      <div className="flex flex-row ">
        <div className={textInfoClass}>
          <h1 className="md:text-5xl text-2xl">Munger, BR</h1>
          <p className="text-[#8C929B] md:text-2xl text-lg">Cloudy</p>
          <h3 className={cityClass}>31° C</h3>
        </div>
        <div className={imageContainerClass}>
          <img src={dummy} alt="dummy" className={imageClass} />
        </div>
      </div>
      <div className={infoBarClass}>
        <p className={infoBarItemClass}>Rise : 6:00 AM |</p>
        <p className={infoBarItemClass}>| Set : 7:15 PM |</p>
        <p className={infoBarItemClass}>| High : 43°C |</p>
        <p className={infoBarItemClass}>| Low : 33°C</p>
      </div>
    </div>
  );
};

export default Main;
