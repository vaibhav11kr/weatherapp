import React from "react";
import { formatToLocalTime } from "../services/weatherServices";
const Time = ({ weather}) => {
  const { dt, timezone } = weather || {};
  return (
    <div className="p-4 md:w-[40vw] w-screen flex items-center">
      <div className="bg-[#202B3B] flex w-full flex-row items-center rounded-lg justify-center md:h-10">
      <h2 className="text-xs font-bold text-[#F0F1F1] ml-2 p-2">{formatToLocalTime(dt, timezone)}</h2>
    </div>
    </div>
  );
};

export default Time;