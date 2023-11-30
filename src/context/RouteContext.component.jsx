import { createContext, useState } from "react";

export const RouteContext = createContext();

const RouteContextProvider = ({ children }) => {
  const [page, setPage] = useState("Home");
  const value = { page, setPage };
  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default RouteContextProvider;

