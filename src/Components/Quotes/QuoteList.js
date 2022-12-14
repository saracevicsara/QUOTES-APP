import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import "./QuoteList.css";
import Quote from "./Quote";
import { UserContext } from "../../Context/UserContext";

export default function QuoteList() {
  const [quoteArray, setQuoteArray] = useState([]);
  const [changedScore, setChangedScore] = useState(false);

  const { userState } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/quotes`, {
        headers: { Authorization: "Bearer " + userState.accessToken },
      })
      .then(({ data }) => {
        setQuoteArray(data.quotes);
      })
      .catch((err) => console.log(err));
  }, [changedScore]);

  return (
    <div className="quoteListContainer">
      <h1 style={{ marginBottom: "80px" }}>Quotes</h1>
      {quoteArray.map((quote, i) => {
        return (
          <Quote
            key={quote.id + i.toString()}
            props={quote}
            updateScr={setChangedScore}
          />
        );
      })}
    </div>
  );
}
