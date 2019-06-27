import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yesno.wtf/api'
});

export default api;