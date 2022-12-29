import axios from "axios";


// Переопределить функцию сохранения токена для react-native
export const saveToken = (token) => {
    axios.defaults.headers = {
        ...axios.defaults.headers,
        'accept': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}
