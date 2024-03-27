import React, { useState, useContext } from "react";

const QueryContext = React.createContext();

export const useSearchQuery = () => {
  return useContext(QueryContext);
};

export const QueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <QueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </QueryContext.Provider>
  );
};