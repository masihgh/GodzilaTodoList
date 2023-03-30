import API from '../axiosConfig';

const API_URL = "/member";

export const getAllMembers = async () => {
    return API.get(API_URL + "/list");
}