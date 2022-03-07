import React, { useState } from "react";

export const IdContext = React.createContext({ id: "", setId: () => {} });

export function IdProvider({ children }) {
  const [id, setId] = useState("");

  return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
  );
}
