import { useFetch, useCounter } from "../hooks";
import { LoadingQuotes, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>

      {isLoading ? <LoadingQuotes /> : <Quote author={author} quote={quote} />}
      <br />

      <button
        onClick={() => {
          increment();
        }}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
