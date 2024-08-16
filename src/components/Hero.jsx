import React from 'react'
import { FiPlus } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';

const Hero = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleAddWidget = (categoryId) => {
    
  };

  return (
    <div className='bg-blue-50 min-h-screen'>
      <div className='flex mt-6 p-6 justify-between'>
          <div className='flex'>
              <h1 className='font-bold text-lg'>CNAPP Dashboard</h1>
          </div>
          <div className='flex gap-3'>
              <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-2 border-gray-200 font-semibold text-gray-500'>
                Add Widget<FiPlus className='text-sm'/>
              </button>
              <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-2 border-gray-200 font-semibold text-gray-500'>
                <HiOutlineRefresh />
              </button>
              <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-2 border-gray-200 font-semibold text-gray-500'>
                <HiOutlineDotsVertical />
              </button>
              <button className='flex items-center justify-center gap-1 bg-white border-2 rounded-sm p-2 border-blue-900 font-semibold text-blue-900'>
                <FaClock className='text-xl'/> 
                <PiLineVertical className='-scale-y-150'/> 
                <span className='text-blue-900'>Last 2 days</span> 
                <IoIosArrowDown />
              </button>
          </div>
      </div>

      <div className='space-y-6 mx-8'>
        {categories.map((category) => (
          <div key={category.id} className='flex flex-col space-y-4'>
            <div className='font-bold text-sm mb-2'>
              {category.name}
            </div>
            <div className='flex flex-wrap gap-4'>
              {category.widgets.map((widget) => (
                <div key={widget.id} className='font-bold text-xs bg-white p-4 rounded-lg shadow-md w-96 h-52'>
                  {widget.name}
                </div>
              ))}
              <div 
                className='bg-white p-4 rounded-lg shadow-md w-96 flex items-center justify-center cursor-pointer'
                onClick={() => handleAddWidget(category.id)}
              >
                <span className='flex ml-2 text-gray-500 font-semibold border-2 border-gray-400 rounded-lg p-2'><FiPlus className='text-2xl text-gray-500' />Add Widget</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero;
