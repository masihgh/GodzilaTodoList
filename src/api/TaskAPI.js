import API from '../axiosConfig';

import authHeader from "../services/auth-header";

const API_URL = "/task";

export const CreateTask = async (task) => {
    return API.post(API_URL + "/",task, { headers: authHeader() });
};


export const getAllTasks = async () => {
    return API.get(API_URL + "/", { headers: authHeader() });
};
