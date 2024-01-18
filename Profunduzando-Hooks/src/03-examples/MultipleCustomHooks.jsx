import { useFetch, useCounter } from "../hooks";
import { LoadingQuotes, Quote } from "./index";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>

      {isLoading ? <LoadingQuotes /> : <Quote author={author} quote={quote} />}

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
