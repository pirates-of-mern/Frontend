import axios from "axios";

export const queryTextModel = async (model, question) => {
    const res = await axios.get(`/api/ai/text`, {
        params: { model, q: question },
    });
    return res.data;
};

export const generateImage = async (prompt) => {
    const res = await axios.get(`/api/ai/image`, {
        params: { q: prompt },
    });
    return res.data;
};
