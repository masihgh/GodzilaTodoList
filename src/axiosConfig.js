import axios from 'axios';
import config from './config';
const instance = axios.create({
    baseURL: config.BASE_ENDPOINT
});


instance.defaults.headers.post['Content-Type'] = 'application/json';
export default instance;
