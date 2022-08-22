import React from "react";
import {useSelector} from "react-redux";

function Quotes() {
  const data = useSelector((state) => state.quotes.items);
  return <div>Quotes</div>;
}

export default Quotes;
