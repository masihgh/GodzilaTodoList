import API from '../axiosConfig';

import authHeader from "../services/auth-header";

const API_URL = "/task";

const getAllTask = () => {
  return API.get(API_URL + "/", { headers: authHeader() });
};

export default getAllTask;
