import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "hubert@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("Hi again");
  }, []);

  useEffect(() => {
    console.log("FormState change");
  }, [formState]);

  return (
    <>
      <h1>Simple Form</h1>

      <input
        type="text"
        placeholder="Usename"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="hubert@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}
    </>
  );
};
