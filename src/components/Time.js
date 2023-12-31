import React from "react";

const Time = () => {
  return (
    <div className="p-4 md:w-[40vw] w-screen flex items-center">
      <div className="bg-[#202B3B] flex w-full flex-row items-center rounded-lg justify-between md:h-10">
      <h2 className="text-xs font-bold text-[#F0F1F1] ml-2 p-2">LOCAL TIME : 12:32 AM</h2>
      <h2 className="text-xs font-bold text-[#F0F1F1] mr-2 p-2">LOCAL DATE : 25-12-2023</h2>
    </div>
    </div>
  );
};

export default Time;