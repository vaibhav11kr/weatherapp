import React from "react";
import dummy from '../assets/dummy.png'
const Main = () => {
  return (
    <div className="relative w-11/12 bg-[#0B131E] flex flex-col items-center rounded-lg h-[7.5rem] p-4 mt-4">
      <div className="flex flex-row">
        <div className="text-white absolute left-5">
          <h1>Munger, BR</h1>
          <p className="bg-[#8B919A]">Cloudy</p>
          <h3>31° C</h3>
        </div>
        <div className="absolute right-5">
          <img src={dummy} alt="dummy" className=" h-[4rem] wp-[4rem] bg-no-repeat bg-center " />
        </div>
      </div>
      <div className="bg-[#202B3B] w-[90%] flex absolute bottom-0 justify-center rounded-lg">
        <p> Rise | Set | High | Low </p></div>
    </div>
  );
};

export default Main;
