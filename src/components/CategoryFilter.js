import React from "react";

const CategoryFilter = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button 
          key={index} 
          id={`filter-btn-${index}`}  // Added the expected IDs
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
