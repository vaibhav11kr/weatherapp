import React from "react";
import real_feel from "../assets/real_feel.png"
const AirConditions = () => {
  return (
    <div className="relative w-11/12 bg-[#202B3B] rounded-lg mt-4 p-4">
      <h2 className="text-xs text-[#9399A2] text-center">AIR CONDITIONS</h2>
      <div className="flex flex-wrap mt-2 justify-evenly flex-grow">
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <img src={real_feel} alt="real_feel" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Real Feel</h4>
            <p className="text-xl text-[#C4CAD3] font-bold">30°</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <img src={real_feel} alt="real_feel" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Real Feel</h4>
            <p className="text-xl text-[#C4CAD3] font-bold">30°</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <img src={real_feel} alt="real_feel" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Real Feel</h4>
            <p className="text-xl text-[#C4CAD3] font-bold">30°</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <img src={real_feel} alt="real_feel" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Real Feel</h4>
            <p className="text-xl text-[#C4CAD3] font-bold">30°</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <img src={real_feel} alt="real_feel" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Real Feel</h4>
            <p className="text-xl text-[#C4CAD3] font-bold">30°</p>
          </div>
        </div>
        <div className="flex h-16 m-2">
          <div className="h-8 w-8">
            <img src={real_feel} alt="real_feel" />
          </div>
          <div>
            <h4 className="text-base text-[#9399A2] ">Real Feel</h4>
            <p className="text-xl text-[#C4CAD3] font-bold">30°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
