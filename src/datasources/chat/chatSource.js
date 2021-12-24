import axios from 'axios';
import { BASE_URL, ENDPOINT } from '../config';

const initiateChat = async (psychologistId) => {
    const { data } = await axios.post(`${BASE_URL}/initiate-chat`, {
        psychologistId,
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
            
    return data;
};

const postMessage = async (roomId, message) => {
    const { data } = await axios.post(`${ENDPOINT.CHAT}/${roomId}/message`, {
        message,
    },
    {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
            
    return data;
}

const getConversationById = async (roomId) => {
    const { data } = await axios.get(`${ENDPOINT.CHAT}/${roomId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });

    return data;
}

const getChatRoomsByUserId = async (userId) => {
    const { data } = await axios.get(`${ENDPOINT.USERS}/${userId}/chats`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
            
    return data;
}

const getChatRoomByUserAndPsychologistId = async (userId, psychologistId) => {
    const { data } = await axios.get(`${ENDPOINT.USERS}/${userId}/chat/${psychologistId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
            
    return data;
}

export { initiateChat, postMessage, getConversationById, getChatRoomsByUserId, getChatRoomByUserAndPsychologistId };
