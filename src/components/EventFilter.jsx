// EventFilter.jsx
import React from 'react';

const EventFilter = ({ onFilterChange, activeCategory }) => {
  const categories = ['Religious', 'Social', 'Charity'];
  
  return (
    <div className="flex gap-3 md:gap-8 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          className={`text-white border border-white px-5 py-2 rounded-full text-center text-sm font-light cursor-pointer
            ${activeCategory === category ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default EventFilter;