import React from 'react'
import img from '../assets/cloud.png'
const Hourlyforecast = () => {
  return (
    <div className="relative w-11/12 bg-[#202B3B] rounded-lg mt-4 p-4">
      <h2 className="text-xs text-[#9399A2] text-center">TODAY'S FORECAST</h2>
      <div className="flex whitespace-nowrap overflow-x-auto mt-2 ">
      <div className='flex flex-col justify-center items-center pr-3 h-16 m-2 border-r-2 border-[#35445D]'>
        <h3 className='text-[#9399A2]'>
          2:00 PM
        </h3>
        <img src={img} className="h-8 w-8" alt="" />
        <p className='text-[#DEE0E4]'>27°</p>
      </div>

      <div className='flex flex-col justify-center items-center pr-3 h-16 w-40 m-2 border-r-2 border-[#35445D]'>
        <h3 className='text-[#9399A2]'>
          2:00 PM
        </h3>
        <img src={img} className="h-8 w-8" alt="" />
        <p className='text-[#DEE0E4]'>27°</p>
      </div>

      <div className='flex flex-col justify-center items-center pr-3 h-16 w-40 m-2 border-r-2 border-[#35445D]'>
        <h3 className='text-[#9399A2]'>
          2:00 PM
        </h3>
        <img src={img} className="h-8 w-8" alt="" />
        <p className='text-[#DEE0E4]'>27°</p>
      </div>

      <div className='flex flex-col justify-center items-center pr-3 h-16 w-40 m-2 border-r-2 border-[#35445D]'>
        <h3 className='text-[#9399A2]'>
          2:00 PM
        </h3>
        <img src={img} className="h-8 w-8" alt="" />
        <p className='text-[#DEE0E4]'>27°</p>
      </div>

      <div className='flex flex-col justify-center items-center pr-3 h-16 w-40 m-2 border-r-2 border-[#35445D]'>
        <h3>
          3:00 PM
        </h3>
        <img src={img} className="h-8 w-8" alt="" />
        <p>27°</p>
      </div>

      <div className='flex flex-col justify-center items-center pr-3 h-16 w-40 m-2 border-r-2 border-[#35445D]'>
        <h3>
          3:00 PM
        </h3>
        <img src={img} className="h-8 w-8" alt="" />
        <p>27°</p>
      </div>
      </div>

    </div>
  )
}

export default Hourlyforecast
