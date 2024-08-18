import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget, toggleWidgetSelection } from '../redux/slices/dashboardSlice';

const AddCategory = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleToggle = (categoryId, widgetId, selected) => {
    dispatch(toggleWidgetSelection({ categoryId, widgetId }));
    if (!selected) {
      dispatch(removeWidget({ categoryId, widgetId }));
    }
  };

  return (
    <div className='p-6'>
      <h2 className='font-bold text-lg mb-4'>Add Category</h2>
      {categories.map((category) => (
        <div key={category.id} className='mb-6'>
          <h3 className='font-semibold text-md mb-2'>{category.name}</h3>
          <div className='ml-4'>
            {category.widgets.map((widget) => (
              <div key={widget.id} className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  checked={true}
                  onChange={() => handleToggle(category.id, widget.id, widget.selected)}
                />
                <label className='ml-2'>{widget.name}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCategory;
