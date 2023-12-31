import React from 'react'
import real_feel from '../assets/cloud.png'
const Weeklyforecast = () => {
  return (
    <div className="bg-[#202B3B] rounded-lg p-4 font-bold">
    <h2 className="text-xs text-[#9399A2] text-center">WEEKLY FORECAST</h2>
    <div className="flex flex-row items-center m-3 justify-between flex-grow pb-3 border-b-2 border-[#35445D]">
      <p className='text-[#9399A2]'>Today</p>
      <div className="flex items-center h-11 w-11 justify-center">
        <img src={real_feel} className='mr-2' lt="" />
        <h3 className='text-[#C4CAD3]'>Sunny</h3>
      </div>
      <p className='text-[#C4CAD3]'>32° C</p>
      
    </div>

    <div className="flex flex-row items-center m-3 justify-between flex-grow pb-3 border-b-2 border-[#35445D]">
      <p className='text-[#9399A2]'>Today</p>
      <div className="flex items-center h-11 w-11 justify-center">
        <img src={real_feel} className='mr-2' lt="" />
        <h3 className='text-[#C4CAD3]'>Sunny</h3>
      </div>
      <p className='text-[#C4CAD3]'>32° C</p>
      
    </div>

    <div className="flex flex-row items-center m-3 justify-between flex-grow pb-3 border-b-2 border-[#35445D]">
      <p className='text-[#9399A2]'>Today</p>
      <div className="flex items-center h-11 w-11 justify-center">
        <img src={real_feel} className='mr-2' lt="" />
        <h3 className='text-[#C4CAD3]'>Sunny</h3>
      </div>
      <p className='text-[#C4CAD3]'>32° C</p>
      
    </div>
  </div>
  )
}

export default Weeklyforecast