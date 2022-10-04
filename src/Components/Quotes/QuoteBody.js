import "./Quote.css";
import "./QuoteBody.css";
export default function QuoteBody({ data }) {
  return (
    <div className="quoteBody">
      <p>{data.content}</p>
      <p>- {data.author.toUpperCase()}</p>
    </div>
  );
}
