import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Custom Hooks:{counter}</h1>

      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -1
      </button>
    </>
  );
};
