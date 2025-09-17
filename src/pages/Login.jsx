  import React, { useState, useContext } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { loginUser } from "../api/userAPI";
  import motif from "../assets/img3.webp";
  import logo from "../assets/logo.png";
  import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      try {
        const res = await loginUser({ email, password });

        login(res.user, res.token);

        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        console.log("Login success:", res);

        navigate("/dashboard");
      } catch (err) {
        setError(err.error || "Login failed");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-100 to-teal-50 px-4 overflow-hidden">
        <img
          src={motif}
          alt="decorative motif"
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        />

        <div className="bg-gradient-to-br from-[#fdfdfd] to-[#f5faf9] rounded-2xl shadow-xl w-full max-w-md p-8 relative z-10 border border-teal-100">
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Project Logo" className="w-16 h-16 mb-3" />
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Explore heritage, culture & traditions
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-teal-400 focus:outline-none bg-white/70"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-xl hover:bg-teal-700 transition duration-200 shadow-md"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

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
