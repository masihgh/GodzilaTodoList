import API from '../axiosConfig';

import authHeader from "../services/auth-header";

const API_URL = "/task";

export const CreateTask = async (task) => {
    return API.post(API_URL + "/",task, { headers: authHeader() });
};

export const DeleteTask = async (id) => {
    return API.delete(API_URL + "/"+ id, { headers: authHeader() });
};

export const CompleteTaskUp = async (id,todo) => {
    return API.patch(API_URL + "/"+ id,todo, { headers: authHeader() });
};

export const getAllTasks = async () => {
    return API.get(API_URL + "/", { headers: authHeader() });
};
