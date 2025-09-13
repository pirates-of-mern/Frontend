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

// ---------------- VERIFY EMAIL ----------------
export const verifyEmail = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/verify/${token}`);
        return response.data; // { message: "Email verified successfully" }
    } catch (error) {
        throw error.response?.data || { error: "Email verification failed" };
    }
};

// ---------------- GET LEADERBOARD ----------------
export const getLeaderboard = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/leaderboard`);
        return response.data; // array of top users
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
};

// ---------------- ADD POINTS ----------------
export const addPoints = async (userId, points, token) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/${userId}/points`,
            { points },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data; // updated user
    } catch (error) {
        throw error.response?.data || { error: "Something went wrong" };
    }
};
