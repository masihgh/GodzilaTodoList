import API from '../axiosConfig';
import authHeader from '../services/auth-header';

const API_URL = "/member";

export const CreateMember = async (member) => {
    return API.post(API_URL + "/",member, { headers: {...authHeader() , "Content-Type": "multipart/form-data"} });
};

export const getAllMembers = async () => {
    return API.get(API_URL + "/list");
}
export const DeleteMember = async (id) => {
    return API.delete(API_URL + "/"+id, { headers: authHeader() });
}
