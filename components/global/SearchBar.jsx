import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return(
    <div className="flex items-center bg-secondary border border-secondary rounded px-3 w-full max-w-lg">
      <FaSearch className="text-accent text-lg"/>
      <input className="py-2 px-3 w-full  text-primary bg-transparent rounded focus:ring-0 focus:outline-none font-body"/>
    </div>
  )
}

export default SearchBar