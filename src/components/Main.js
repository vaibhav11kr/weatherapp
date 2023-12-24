import React from "react";
import dummy from '../assets/dummy.png'
const Main = () => {
  return (
    <div className="relative w-11/12 bg-[#0B131E] flex flex-col items-center rounded-lg h-[9.5rem] p-4 mt-1">
      <div className="flex flex-row">
        <div className="text-[#DEE0E4] absolute left-1 font-bold">
          <h1>Munger, BR</h1>
          <p className="text-[#8C929B]">Cloudy</p>
          <h3 className="mt-3 text-2xl">31° C</h3>
        </div>
        <div className="absolute right-3 pt-4 flex items-center justify-center">
          <img src={dummy} alt="dummy" className=" h-[4rem] wp-[4rem] bg-no-repeat bg-center" />
        </div>
      </div>
      <div className="bg-[#202B3B] w-[90%] h-8 flex absolute bottom-0 justify-center items-center rounded-lg">
        <p className="text-xs pr-3 mr-3 text-[#F0F1F1] border-r-2 border-[#9399A2]"> Rise </p>
        <p className="text-xs pr-3 mr-3 text-[#F0F1F1] border-r-2 border-[#9399A2]"> Set</p>
        <p className="text-xs pr-3 mr-3 text-[#F0F1F1] border-r-2 border-[#9399A2]"> High</p>
        <p className="text-xs pr-3 mr-3 text-[#F0F1F1]">Low </p>
      </div>
    </div>
  );
};

export default Main;
