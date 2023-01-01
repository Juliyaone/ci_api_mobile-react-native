import {getTokenFromStorage} from "../auth/tokenStorage";
import axios from "axios";

export const requestAPI = (method, url, payload) => {
    const token = getTokenFromStorage()

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
    let params = {
        method: method,
        url: url,
        headers,
        // withCredentials: true
    }
    if (method !== 'GET') {
        params.data = payload
    }

    console.log(params)
    return axios(params);
}