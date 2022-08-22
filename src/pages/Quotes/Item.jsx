import React from "react";
import "./styles.css"

function Item({ item }) {
  return (
    <div className="quote_item">
      <q>{item.quote}</q>
    </div>
  );
}

export default Item;
