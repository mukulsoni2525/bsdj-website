import React from "react";
import "./Item.css";

function Item(props) {
  const ItemName = props.name;
  return (
    <>
      <p className="nirma">{ItemName}</p>
      {props.children}
      {/* if we write anything inside our custom html tag (in this case Item) in app.js file then this(props.children) will let that content display*/}
    </>
  );
}

export default Item;
