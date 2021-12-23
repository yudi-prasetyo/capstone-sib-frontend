import axios from "axios";
import { BASE_URL, ENDPOINT } from "../config";

const registerUser = async (user) => {
    const { data } = await axios.post(ENDPOINT.USERS, user);
    return data;
}

const loginUser = async (user) => {
    const { data } = await axios.post(`${BASE_URL}/login`, user);
    return data;
}

const getUserById = async (id) => {
    const { data } = await axios.get(
        `${ENDPOINT.USERS}/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        });
    return data;
}

const updateUserById = async (id, user) => {
    const { data } = await axios.put(
        `${ENDPOINT.USERS}/${id}`,
        user,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            }
        });
    return data;
}

export { registerUser, loginUser, getUserById, updateUserById };
