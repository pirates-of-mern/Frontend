import React, { useState, useContext } from "react";
import { Menu, X, Search, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // 🔥 import

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext); // 🔥 context se user & logout

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleChatbotClick = () => {
    navigate("/chatbot");
  };

  const handleLogoutClick = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
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

          {/* Website Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover cursor-pointer"
            />
          </Link>

          {/* Search bar with button */}
          <div className="flex items-center ml-2 rounded-full border shadow-sm focus-within:ring-2 focus-within:ring-green-400 overflow-hidden">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search here"
                className="pl-10 pr-3 py-2 w-full outline-none"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-500"
                size={18}
              />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-medium">
              Search
            </button>
          </div>

          {/* AI Widget */}
          <button
            onClick={handleChatbotClick}
            className="hidden sm:flex items-center gap-2 ml-3 
                       bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                       text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <MessageCircle size={18} />
            <span className="font-medium">AI Guide</span>
          </button>

          {/* Mobile AI Widget */}
          <button
            onClick={handleChatbotClick}
            className="sm:hidden ml-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                       text-white p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <MessageCircle size={18} />
          </button>
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

          {/* ✅ Condition based buttons */}
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="px-3 py-2 text-green-700 font-medium hover:underline"
              >
                Hi, {user.name || "User"}
              </Link>

              <button
                onClick={handleLogoutClick}
                className="px-5 py-2 rounded-full bg-red-300 shadow-md hover:bg-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
