import React, { useState, useEffect } from 'react';

const WidgetForm = ({ onSubmit, onCancel }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  const handleSubmit = () => {
    if (widgetName && widgetText) {
      onSubmit(widgetName, widgetText);
      setWidgetName('');
      setWidgetText('');
      handleClose(); 
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onCancel, 300);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out w-1/3 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='p-6'>
        <h2 className='font-bold text-lg mb-4'>Add New Widget</h2>
        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-2' htmlFor='widgetName'>Widget Name</label>
          <input
            id='widgetName'
            type='text'
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className='border border-gray-300 rounded-lg w-full p-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-2' htmlFor='widgetText'>Widget Text</label>
          <textarea
            id='widgetText'
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className='border border-gray-300 rounded-lg w-full p-2'
          />
        </div>
        <div className='flex gap-4'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 text-white p-2 rounded-lg font-semibold'
          >
            Submit
          </button>
          <button
            onClick={handleClose}
            className='bg-gray-500 text-white p-2 rounded-lg font-semibold'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetForm;
