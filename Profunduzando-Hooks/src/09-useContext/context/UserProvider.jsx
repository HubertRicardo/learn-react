import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  //   const user = {
  //     id: 123,
  //     name: "Fernando Herrera",
  //     emil: "fernando@gmail.com",
  //   };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
