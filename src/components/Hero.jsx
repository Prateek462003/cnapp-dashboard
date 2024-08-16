import React, { useState } from 'react';
import { HiOutlineRefresh, HiOutlineDotsVertical } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget } from '../redux/slices/dashboardSlice';
import Category from './Category';
import WidgetForm from './WidgetForm';

const Hero = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  const handleAddWidget = (categoryId) => {
    setCurrentCategoryId(categoryId);
    setIsFormVisible(true);
  };

  const handleFormSubmit = (name, text) => {
    const newWidget = {
      id: Date.now().toString(),
      name,
      text,
    };
    dispatch(addWidget({ categoryId: currentCategoryId, widget: newWidget }));
    setIsFormVisible(false);
  };

  const handleDeleteWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='bg-blue-50 min-h-screen relative'>
      <div className='flex mt-6 p-6 justify-between'>
          <div className='flex'>
              <h1 className='font-bold text-lg'>CNAPP Dashboard</h1>
          </div>
          <div className='flex gap-3'>
              <button className='flex items-center justify-center gap-2 bg-white border-2 rounded-lg p-2 border-gray-200 font-semibold text-gray-500'>
                Add Widget
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
          <Category 
            key={category.id} 
            category={category} 
            onAddWidget={handleAddWidget}
            onDeleteWidget={handleDeleteWidget}
          />
        ))}
      </div>

      {isFormVisible && (
        <WidgetForm
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
    </div>
  );
};

export default Hero;
