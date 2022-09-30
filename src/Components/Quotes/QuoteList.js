import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { UserContext } from "../../Contexts/UserContext";
import "../../Css/quotesList.css";
import Quote from "./Quote";

export default function QuoteList() {
  const [quoteArray, setQuoteArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/quotes?pageSize=5&page=${page}&sortBy=${sortBy}&sortDirection=${sortDir}&tags=${filterTags.toString()}`,
        {
          headers: { Authorization: "Bearer " + userState.accessToken },
        }
      )
      .then(({ data }) => {
        setQuoteArray(data.quotes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="quoteListContainer">
      <h1 style={{ marginBottom: "80px" }}>Quotes</h1>
      {quoteArray.map((quote, i) => {
        return <Quote key={quote.id + i.toString()} props={quote} />;
      })}
    </div>
  );
}
