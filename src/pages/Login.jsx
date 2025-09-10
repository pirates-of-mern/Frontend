import React from "react";
import { Link } from "react-router-dom";
import motif from "../assets/img3.webp"; // decorative heritage pattern
import logo from "../assets/logo.png";   // project logo

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-100 to-teal-50 px-4 overflow-hidden">
      
      {/* Background Motifs */}
      <img
        src={motif}
        alt="decorative motif"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Main Card */}
      <div className="bg-gradient-to-br from-[#fdfdfd] to-[#f5faf9] rounded-2xl shadow-xl w-full max-w-md p-8 relative z-10 border border-teal-100">
        
        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Project Logo" className="w-16 h-16 mb-3" />
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Explore heritage, culture & traditions
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-teal-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
