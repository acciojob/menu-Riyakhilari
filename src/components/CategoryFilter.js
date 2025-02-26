import React from "react";

const CategoryFilter = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
