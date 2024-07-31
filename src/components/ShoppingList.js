import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 1: Add state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Handle changes to the select element
  function handleFilterChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Step 3: Filter items based on selectedCategory
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true; // Show all items if "All" is selected
    }
    return item.category === selectedCategory; // Filter items by category
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
