import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

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

          {/* Website Logo (redirect to LandingPage) */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover cursor-pointer"
            />
          </Link>

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
          <Link
            to="/"
            className="px-3 py-2 text-green-800 font-medium hover:text-green-600"
          >
            Home
          </Link>
          <a
            href="#features"
            className="px-3 py-2 text-green-800 font-medium hover:text-green-600"
          >
            Features
          </a>
          <a
            href="#contact"
            className="px-3 py-2 text-green-800 font-medium hover:text-green-600"
          >
            Contact Us
          </a>
          <button
            onClick={handleSignupClick}
            className="px-5 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            className="px-5 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
          >
            Log In
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-50 shadow-inner px-6 py-4 space-y-3">
          <Link
            to="/"
            className="block text-green-800 font-medium hover:text-green-600"
          >
            Home
          </Link>
          <a
            href="#features"
            className="block text-green-800 font-medium hover:text-green-600"
          >
            Features
          </a>
          <a
            href="#contact"
            className="block text-green-800 font-medium hover:text-green-600"
          >
            Contact Us
          </a>
          <button
            onClick={handleSignupClick}
            className="block w-full px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400 text-center"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            className="block w-full px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400 text-center"
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
