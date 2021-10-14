import { useContext } from "react";
import { searchContext } from "../context/SearchProvider";

const useSearch = () => {
  return useContext(searchContext);
};
export default useSearch;
