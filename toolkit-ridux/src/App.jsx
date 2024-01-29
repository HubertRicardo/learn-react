import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "./store/slices/counter/counterSlice";

import "./App.css";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(2))}>Imcrement by 2</button>
      </div>
    </>
  );
};
