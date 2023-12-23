import React from 'react'

const Time = () => {
  return (
    <div className="relative w-11/12 bg-white rounded-lg h-14 p-4 mt-6">
      <input
        type="text"
        className="w-full px-3 focus:outline-none hover:cursor-pointer"
        placeholder="search your city ..."
        name=""
        required
      />
      <span className="absolute font-extrabold border-l pl-4 top-4 right-14 ">
        {/* <UilSearchAlt size = {24} className="cursor-pointer transition ease-in hover:scale-125" /> */}
      </span>
      <span className="absolute top-4 right-5">
        {/* <UilMapMarker size = {24} className="cursor-pointer transition ease-in hover:scale-125" /> */}
      </span>
    </div>
  )
}

export default Time
