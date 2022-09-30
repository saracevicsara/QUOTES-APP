import QuoteBody from "./QuoteBody";
import "./Quote.css";

export default function Quote({ props }) {
  // console.log(props);
  return (
    <div className="quoteContainer">
      <QuoteBody data={props} />
    </div>
  );
}
