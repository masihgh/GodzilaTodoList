import API from '../axiosConfig';

import authHeader from "../services/auth-header";

const API_URL = "/history";

const getAllHistory = () => {
  return API.get(API_URL + "/", { headers: authHeader() });
};

export default getAllHistory;
