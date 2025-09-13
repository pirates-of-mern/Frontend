import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying your email...");
  const [error, setError] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/verify/${token}`
        );
        setMessage(res.message || "Email verified successfully!");
        setTimeout(() => navigate("/login"), 3000); // redirect after 3 sec
      } catch (err) {
        setError(err.response?.data?.error || "Verification failed");
      }
    };
    verify();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        {message && <p className="text-green-600 font-semibold">{message}</p>}
        {error && <p className="text-red-500 font-semibold">{error}</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
