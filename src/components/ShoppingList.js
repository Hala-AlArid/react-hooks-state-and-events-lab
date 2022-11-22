import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {

  const [filterBy, setFilterBy] = useState("All");

  const itemsToDisplay = items.map((item) => {
    if(filterBy === "All"){
      return <Item key={item.id} name={item.name} category={item.category} />;
    }
    else if(filterBy === item.category){
      return <Item key={item.id} name={item.name} category={item.category} />;
    }
  })

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  
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
        {itemsToDisplay}
      </ul>
    </div>
  );
}

export default ShoppingList;
 