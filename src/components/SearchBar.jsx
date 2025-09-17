import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="flex items-center ml-2 rounded-full border shadow-sm focus-within:ring-2 focus-within:ring-green-400 overflow-hidden">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search here"
          className="pl-10 pr-3 py-2 w-full outline-none"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-medium">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
