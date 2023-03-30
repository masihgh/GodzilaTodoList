import API from '../axiosConfig';

import authHeader from "../services/auth-header";

const API_URL = "/task";

export const getAllTasks = async () => {
    return API.get(API_URL + "/", { headers: authHeader() });
};
