import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/userAPI";
import motif from "../assets/hero1.jpg"; // background motif
import logo from "../assets/logo.png"; // logo image

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 

    try {
      const res = await registerUser({ name, email, password });

      navigate("/dashboard");
    } catch (err) {
      setError(err?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-100 to-teal-50 px-4 overflow-hidden">
      {/* Background Motif */}
      <img
        src={motif}
        alt="decorative motif"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Signup Card */}
      <div className="bg-gradient-to-br from-[#fdfdfd] to-[#f5faf9] rounded-2xl shadow-xl w-full max-w-md p-8 relative z-10 border border-teal-100">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-3" />
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Join us to explore heritage & traditions
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition duration-200 shadow-md"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Bottom Link */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
