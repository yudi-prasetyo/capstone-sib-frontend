import axios from "axios";
import { ENDPOINT } from '../config';

const createAppointment = async (appointment) => {
    const { data } = await axios.post(ENDPOINT.APPOINTMENTS, appointment, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return data;
}

const getAppointmentsByUserId = async (userId) => {
    const { data } = await axios.get(`${ENDPOINT.USERS}/${userId}/appointments`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return data;
}

const getAppointmentById = async (appointmentId) => {
    const { data } = await axios.get(`${ENDPOINT.APPOINTMENTS}/${appointmentId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return data;
}

const updateAppointmentById = async (appointmentId, appointment) => {
    const { data } = await axios.put(`${ENDPOINT.APPOINTMENTS}/${appointmentId}`, appointment, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return data;
}

export { createAppointment, getAppointmentsByUserId, getAppointmentById, updateAppointmentById };
