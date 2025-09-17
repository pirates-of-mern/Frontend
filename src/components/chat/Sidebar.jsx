// components/Sidebar.jsx
import React from "react";
import { Home, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-16 md:w-20 bg-gray-100 border-r flex flex-col items-center py-6 space-y-8 shadow-sm">
      <div className="flex flex-col items-center mb-6">
        <span className="text-xs md:text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full select-none">
          AI Guide
        </span>
      </div>

      <nav className="flex flex-col items-center space-y-6 text-gray-600">
        <Link
          to="/"
          aria-label="Home"
          className={`p-2 rounded-lg transition-colors duration-200 ${
            location.pathname === "/"
              ? "bg-indigo-100 text-indigo-600"
              : "hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <Home size={22} />
        </Link>
        <Link
          to="/chatbot"
          aria-label="Chatbot"
          className={`p-2 rounded-lg transition-colors duration-200 ${
            location.pathname === "/chatbot"
              ? "bg-indigo-100 text-indigo-600"
              : "hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <BookOpen size={22} />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
