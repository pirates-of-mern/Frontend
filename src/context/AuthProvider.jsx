import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext"; // Adjust path if needed

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

useEffect(() => {
  const storedUser = localStorage.getItem("user");

  try {
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser));
    }
  } catch (error) {
    console.error("Failed to parse stored user:", error);
    localStorage.removeItem("user"); // clean up bad data
  }
}, []);


  const login = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
