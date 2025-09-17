import React, { useState, useContext } from "react";
import { Menu, X, MessageCircle, Search } from "lucide-react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import SearchBar from "./SearchBar";

const Header = ({ setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/signup");
  const handleChatbotClick = () => navigate("/chatbot");
  const handleLogoutClick = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-green-100 shadow-md z-50 border-b border-green-300">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-green-200 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover cursor-pointer"
            />
          </Link>
        </div>

        {/* Middle: Desktop Search + Chatbot Button */}
        <div className="hidden md:flex items-center gap-4 flex-1 ml-4">
          <SearchBar onSearchChange={setSearchTerm} />
          <button
            onClick={handleChatbotClick}
            className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <MessageCircle size={18} />
            <span className="font-medium">AI Guide</span>
          </button>
        </div>

        {/* Right: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Home
          </Link>
          <a
            href="#features"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-green-800 font-medium hover:text-green-600"
          >
            Contact Us
          </a>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-green-700 font-medium hover:underline"
              >
                Hi, {user.name || "User"}
              </Link>

              <button
                onClick={handleLogoutClick}
                className="px-4 py-2 rounded-full bg-red-300 shadow-md hover:bg-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSignupClick}
                className="px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
              >
                Sign Up
              </button>
              <button
                onClick={handleLoginClick}
                className="px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
              >
                Log In
              </button>
            </>
          )}
        </nav>

        {/* Mobile right side: Search icon + AI Guide */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
            className="p-2 rounded-md hover:bg-green-200"
          >
            <Search size={20} />
          </button>
          <button
            onClick={handleChatbotClick}
            className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white p-2 rounded-full shadow-md hover:scale-110 transition"
            aria-label="Open AI Guide"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (slide down) */}
      {searchOpen && (
        <div className="px-4 pb-4 md:hidden bg-green-50 border-t border-green-300">
          <SearchBar onSearchChange={setSearchTerm} />
        </div>
      )}

      {/* Mobile Menu Slide-in */}
      {isOpen && (
        <nav className="fixed inset-y-0 left-0 w-64 bg-green-100 shadow-lg border-r border-green-300 z-50 p-6 flex flex-col space-y-6 md:hidden relative">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2 rounded-full 
                 bg-gradient-to-r from-green-300 via-green-400 to-green-500 
                 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform"
          >
            <X size={20} />
          </button>

          {/* Nav links */}
          <Link
            to="/"
            className="text-green-800 font-semibold text-lg hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="#features"
            className="text-green-800 font-semibold text-lg hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-green-800 font-semibold text-lg hover:text-green-600"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-green-700 font-semibold hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Hi, {user.name || "User"}
              </Link>
              <button
                onClick={() => {
                  handleLogoutClick();
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-red-300 shadow-md hover:bg-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleSignupClick();
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  handleLoginClick();
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-green-300 shadow-md hover:bg-green-400"
              >
                Log In
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
