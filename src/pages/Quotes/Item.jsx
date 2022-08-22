import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="quote_item">
      <Link>
        <q>{item.quote}</q>{" "}
      </Link>
      <strong>{item.author}</strong>
    </div>
  );
}

export default Item;
