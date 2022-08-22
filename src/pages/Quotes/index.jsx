import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return <div>
    <h1>Quotes</h1>
    {status === "loading" && <Loading />}
    {status === "succeeded" && data.map((item)=><div>{item.quote}</div>)}
    </div>;

}

export default Quotes;
