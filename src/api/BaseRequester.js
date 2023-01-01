import {getTokenFromStorage} from "../auth/tokenStorage";
import axios from "axios";
import {setErrorMessage} from "../redux/reducers/messagesHandler";

/**
 * Базовый класс для запросов к АПИ
 */
export class BaseRequester {
    constructor(dispatch) {
        this._dispatch = dispatch
    }

    _errorHandler = (data) => {
        console.log('Request error:')
        console.log(data)
        this._dispatch(setErrorMessage(data.detail))
    }

    _asyncRequestAPI = async (method, url, payload) => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')

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

        try {
            const response = await axios(params);
            if (200 <= response.status <= 299) {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')

                return response.data
            } else {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА, что то пошло не так')
                console.log('Response not OK')
                console.log(response.status)
                console.log(response)
                return null
            }
        } catch (error) {
            console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')

            this._errorHandler(error.response.data)
            return null
        }
    }
}

