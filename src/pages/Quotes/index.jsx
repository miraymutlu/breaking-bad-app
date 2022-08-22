import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../redux/quotesSlice";

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quotes.items);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return <div>Quotes</div>;
}

export default Quotes;
