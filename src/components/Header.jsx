import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo.png"; // yahan apna logo path lagana

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-6 left-6 right-6 w-full z-50 bg-green-100 border-gray-800 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Hamburger button - visible only on mobile */}
          <button
            className="p-3 rounded-lg bg-green-200 hover:bg-green-300 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Website Logo */}
          <div className="flex items-center">
            <img
              src={logo} // yahan apna logo path lagana
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          {/* Search bar */}
          <div className="relative min-w-[200px] md:min-w-[300px] lg:min-w-[400px] ml-2">
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 w-full rounded-full border shadow-sm focus:outline-green-300 focus:ring-2 focus:ring-green-400"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
          </div>
        </div>

        {/* Right Side - Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#"
            className="px-3 py-2 text-green-800 font-medium hover:text-green-600"
          >
            Home
          </a>
          <a
            href="#"
            className="px-3 py-2 text-green-800 font-medium hover:text-green-600"
          >
            Features
          </a>
          <a
            href="#"
            className="px-3 py-2 text-green-800 font-medium hover:text-green-600"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
          >
            Log In
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-50 shadow-inner px-6 py-4 space-y-3">
          <a
            href="#"
            className="block text-green-800 font-medium hover:text-green-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-green-800 font-medium hover:text-green-600"
          >
            Features
          </a>
          <a
            href="#"
            className="block text-green-800 font-medium hover:text-green-600"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400 text-center"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400 text-center"
          >
            Log In
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
