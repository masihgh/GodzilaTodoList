import API from '../axiosConfig';

const API_URL = "/auth";

const login = (name) => {
    return API
        .post(API_URL + "/login", {
            name: name,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    login,
    logout,
    getCurrentUser,
};

export default authService;