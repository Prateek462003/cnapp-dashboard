import React from 'react';
import { RxCross1 } from "react-icons/rx";

const WidgetCard = ({ widget, onDelete }) => (
  <div className='flex flex-col font-bold text-xs bg-white p-4 rounded-lg shadow-md w-72 h-52'>
    <span className='flex items-center justify-between text-xs'>
      {widget.name}
      <RxCross1 className='text-lg cursor-pointer' onClick={() => onDelete(widget.id)} />
    </span>
    <span className='font-medium py-3'>{widget.text}</span>
  </div>
);

export default WidgetCard;
