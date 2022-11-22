import React from "react";
import {useState} from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  const liClass = isOn ? "in-cart" : " "
  const btnClass = isOn ? "remove" : "add"
  const btnText = isOn ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleClick}>{btnText}</button>
    </li>
  );
}

export default Item;
 