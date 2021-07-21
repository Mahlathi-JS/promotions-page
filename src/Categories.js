import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => 
        filterItems('all')}>
          All Promotions
          </button>
      <button className='filter-btn' onClick={() => 
        filterItems('breakfast')}>
          New Customers
          </button>
     </div>
  );
};

export default Categories;
