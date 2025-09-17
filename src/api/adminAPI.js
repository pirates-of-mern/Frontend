// src/api/adminAPI.js
import axios from "axios";

const BASE_URL = "https://trdn.onrender.com/api/admin";

export const fetchAllUsers = async (token) => {
    const res = await axios.get(`${BASE_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};
