import axios from "axios";
import { ENDPOINT } from "../config";

const registerPsychologist = async (psychologist) => {
    const { data } = await axios.post(ENDPOINT.PSYCHOLOGISTS, psychologist);
    return data;
}

const getPsychologistById = async (id) => {
    const { data } = await axios.get(`${ENDPOINT.PSYCHOLOGISTS}/${id}`);
    return data;
}

const getAllPsychologists = async () => {
    const { data } = await axios.get(ENDPOINT.PSYCHOLOGISTS);
    return data;
}

const updatePsychologistById = async (id, psychologist) => {
    const { data } = await axios.put(
        `${ENDPOINT.PSYCHOLOGISTS}/${id}`,
        psychologist,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        });
    return data;
}

export { registerPsychologist, getPsychologistById, getAllPsychologists, updatePsychologistById };
