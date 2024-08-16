import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import "../dashboard.json"

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-1 px-5 py-2'>
            <span className='text-sm text-gray-600'>Home</span>
            <IoIosArrowForward />
            <span className='text-sm font-bold text-blue-900'>DashboardV2</span>
        </div>
        <div className='flex items-center gap-4 px-5'>
            <div className='flex items-center'>
                <CiSearch className='translate-x-5 mt-1'/>
                <input 
                  type="text" 
                  className='border-2 border-blue-100 rounded-lg w-[400px] pl-5 focus:outline-none bg-gray-100 placeholder:text-xs' 
                  placeholder='Search Anything..' 
                />
            </div>
            <div className='flex gap-4'>
                <IoIosArrowDown className='text-xl '/>
                <MdOutlineNotificationsActive className='text-2xl text-gray-600'/>
                <IoPersonCircleSharp className='text-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
