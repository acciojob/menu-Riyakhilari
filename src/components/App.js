import React, { useState } from "react";
import menuItems from "./data";
import Menu from "./components/Menu";
import CategoryFilter from "./components/CategoryFilter";
import "./styles.css";

const allCategories = ["All", ...new Set(menuItems.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(menuItems);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setItems(menuItems);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <CategoryFilter categories={categories} filterItems={filterItems} />
      <Menu items={items} />
    </div>
  );
};

export default App;
