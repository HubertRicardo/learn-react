import { useEffect } from "react";

export const Message = () => {
  // useEffect(() => {
  //   console.log("Message Mounted");

  //   return () => {
  //     console.log("Message unmounted");
  //   };
  // }, []);

  const onMouseMove = ({ x, y }) => {
    const coords = { x, y };
    console.log(coords);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuaria ya existe</h3>
    </>
  );
};
