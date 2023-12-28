import axios from "axios";

const apiAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
    },
    params: {
        language: 'uk-UA'
    }
})

apiAxios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_APP_TOKEN}`;
    return config
})

export default apiAxios