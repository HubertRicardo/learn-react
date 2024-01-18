import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback(() => {
    setCounter((counter) => {
      counter + 1;
    });
  }, []);

  return (
    <>
      <h1>UseCallback Hook : {counter} </h1>
      <ShowIncrement increment={increment} />
    </>
  );
};
