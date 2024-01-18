import { useRef } from "react";

export const FocusScreen = () => {
  const inputref = useRef();
  const onClick = () => {
    // console.log(inputref);
    inputref.current.select();
  };

  return (
    <>
      <h1>Focus Scream</h1>

      <input ref={inputref} type="text" placeholder="ingrese su nombre" />
      <input type="text" placeholder="ingrese su nombre" />
      <input type="text" placeholder="ingrese su nombre" />
      <input type="text" placeholder="ingrese su nombre" />

      <button onClick={onClick}>Set Focus</button>
    </>
  );
};
