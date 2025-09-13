import axios from "axios";

const BASE_URL = "http://localhost:5000/api/heritages";

// Get all heritages
export const getAllHeritages = async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
};

// Add new heritage (Admin)
export const addHeritage = async (heritageData, token) => {
    const res = await axios.post(BASE_URL, heritageData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

// updated heritages sides..
// Update heritage
export const updateHeritage = async (id, heritageData, token) => {
    const res = await axios.put(`${BASE_URL}/${id}`, heritageData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

