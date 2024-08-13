import React from 'react'
import { FiPlus } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";



const Hero = () => {
  return (
    <div className='flex mt-6 bg-blue-50 p-6 justify-between'>
        <div  className='flex'>
            <h1 className='font-bold'>CNAPP Dashboard</h1>
        </div>
        <div className='flex gap-3'>
            <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-1 border-gray-200 font-semibold text-gray-500'>Add Widget<FiPlus className='text-sm'/></button>
            <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-1 border-gray-200 font-semibold text-gray-500'><HiOutlineRefresh /></button>
            <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-1 border-gray-200 font-semibold text-gray-500'><HiOutlineDotsVertical /></button>
            <button className='flex items-center justify-center gap-1 bg-white border-2 rounded-sm p-1 border-blue-900 font-semibold text-blue-900'><FaClock className='text-xl'/> <PiLineVertical className='-scale-y-150'/> <span className='text-blue-900'>Last 2 days</span> <IoIosArrowDown /></button>
        </div>
    </div>
  )
}

export default Hero