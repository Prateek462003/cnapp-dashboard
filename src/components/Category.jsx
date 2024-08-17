import React from 'react';
import WidgetCard from './WidgetCard';
import { FiPlus } from "react-icons/fi";

const Category = ({ category, onAddWidget, onDeleteWidget, searchQuery }) => {
  const filteredWidgets = category.widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='flex flex-col space-y-4'>
      <div className='font-bold text-sm mb-2'>
        {category.name}
      </div>
      <div className='flex flex-wrap gap-4'>
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <WidgetCard 
              key={widget.id} 
              widget={widget} 
              onDelete={(widgetId) => onDeleteWidget(category.id, widgetId)} 
            />
          ))
        ) : (
          <div className='w-full text-gray-500 text-center'>No widgets found</div>
        )}
        <div 
          className='bg-white p-4 rounded-lg shadow-md w-72 flex items-center justify-center cursor-pointer'
          onClick={() => onAddWidget(category.id)}
        >
          <span className='flex ml-2 text-gray-500 font-semibold border-2 border-gray-400 rounded-lg p-2'>
            <FiPlus className='text-2xl text-gray-500' /> Add Widget
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
