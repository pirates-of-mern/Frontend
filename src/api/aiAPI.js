// api/aiAPI.js
import axios from "axios";

export const fetchAIResponse = async (question) => {
    const res = await axios.post("https://trdn.onrender.com/api/chat", {
        question,
    });
    return res.data.answer;
};
