import React, { createContext } from "react";
import useText from "../hooks/useText";

export const searchContext = createContext();
const SearchProvider = ({ children }) => {
  return (
    <searchContext.Provider value={useText()}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
