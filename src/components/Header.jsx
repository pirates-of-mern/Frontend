import React from "react";
import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className=" top-6 left-6 right-6 w-full z-50 bg-green-100 border-gray-800 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <button className="p-3 rounded-lg bg-green-200 hover:bg-green-300">
            <Menu size={22} />
          </button>
          <div className="relative min-w-[200px] md:min-w-[300px] lg:min-w-[400px]">
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 w-full rounded-full border shadow-sm focus:outline-green-300 focus:ring-2 focus:ring-green-400"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>

        {/* Right Side */}
        <button className="px-5 hidden md:flex py-2 rounded-full hidden-md bg-green-300 shadow-md hover:bg-green-400">
          ABOUT US
        </button>
      </div>
    </header>
  );
};

export default Header;
