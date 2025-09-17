import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // 'verifying', 'success', 'error'
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(
          `http://trdn.onrender.com/api/users/verify/${token}`
        );

        // Email verification success
        setStatus("success");
        setMessage(res.data?.message || "Email verified successfully!");
        setTimeout(() => navigate("/dashboard"), 3000);
      } catch (err) {
        // Email verification failed
        setStatus("error");
        setMessage(err.response?.data?.error || "Verification failed.");
        setTimeout(() => navigate("/resend-verification"), 3000);
      }
    };

    verify();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        {status === "verifying" && (
          <p className="text-blue-600 font-medium">Verifying your email...</p>
        )}
        {status === "success" && (
          <p className="text-green-600 font-semibold">{message}</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-semibold">{message}</p>
        )}
        <p className="text-gray-500 text-sm mt-2">Redirecting you shortly...</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
