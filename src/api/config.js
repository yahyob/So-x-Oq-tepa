import axios from "axios";
import API_BASE_URL from './Urls'

export const request = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Accept-Language': getLang()
    }
    // timeout: 10000,
});

console.log(request);