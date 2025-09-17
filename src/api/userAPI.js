import axios from "axios";

const BASE_URL = "http://localhost:5000/api/users";

// ---------------- REGISTER ----------------
// Backend now returns only { message: "Check your email..." }
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data; // { message: "User registered. Please check your email to verify." }
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
};

// ---------------- LOGIN ----------------
// Backend will check isVerified
export const loginUser = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, loginData);
        return response.data;
        // { message: "Login successful", token, user: { id, name, email, points, isAdmin } }
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
};