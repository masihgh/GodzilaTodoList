import API from '../axiosConfig';

import authHeader from "../services/auth-header";

const API_URL = "/history";

export const getAllHistory = async () => {
  return API.get(API_URL + "/", { headers: authHeader() });
};
export const deleteAllHistory = async () => {
  return API.delete(API_URL + "/deleteAll", { headers: authHeader() });
};
