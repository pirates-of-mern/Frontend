import React, { useState } from "react";
import { Home, BookOpen, Settings, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: <Home size={22} /> },
  { to: "/chatbot", label: "Chatbot", icon: <BookOpen size={22} /> },
  { to: "/settings", label: "Settings", icon: <Settings size={22} /> },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle drawer open/close
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Top Bar with hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-100 border-b shadow-md flex items-center justify-between px-4 h-14 z-30">
        <span className="text-indigo-600 font-bold text-lg">AI Guide</span>
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="text-indigo-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-24 bg-gray-100 border-r shadow-sm flex-col items-center py-6 space-y-10 z-20">
        <div className="flex flex-col items-center space-y-1">
          <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full select-none">
            AI Guide
          </span>
        </div>
        <nav className="flex flex-col items-center space-y-6 text-gray-600">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-label={item.label}
                title={item.label}
                className={`group p-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "hover:bg-indigo-100 hover:text-indigo-600"
                }`}
              >
                {item.icon}
                <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white shadow-lg group-hover:block md:hidden">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Sidebar Drawer for Mobile */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={toggleSidebar}
          ></div>
          <aside className="fixed top-14 left-0 right-0 bg-gray-100 border-b shadow-md flex flex-col items-center py-4 space-y-6 z-50">
            <nav className="flex flex-row justify-around w-full text-gray-600">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-label={item.label}
                    title={item.label}
                    onClick={() => setIsOpen(false)} // Close sidebar on click
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-indigo-100 text-indigo-600"
                        : "hover:bg-indigo-100 hover:text-indigo-600"
                    }`}
                  >
                    {item.icon}
                    <span className="text-xs mt-1">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
