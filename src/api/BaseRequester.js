import {getTokenFromStorage} from "../auth/tokenStorage";
import axios from "axios";
import {setErrorMessage} from "../redux/reducers/messagesReducer";

/**
 * Базовый класс для запросов к АПИ
 * @param dispatch - callback function useDispatch
 */
export class BaseRequester {
    constructor(dispatch) {
        /**
         * @private
         */
        this._dispatch = dispatch
    }

    /**
     * Отправляет детали ошибки в обработчик setErrorMessage
     * @param data.detail - string - Строка для обработки в setErrorMessage
     * @private
     */
    _errorHandler = (data) => {
        console.log('Request error:')
        console.log(data)
        this._dispatch(setErrorMessage(data.detail))
    }

    /**
     * Отправляет запрос и обрабатывает ответ.
     * Возвращает data если статус-код 200-299, иначе возвращает null.
     * Диспатчит сообщение об ошибке в setErrorMessage
     * @param method - Метод запроса ('GET', 'POST', etc)
     * @param url - URL запроса
     * @param payload - Данные для отправки (для POST и PUT запросов)
     * @returns {Promise<*|null>}
     * @private
     */
    _asyncRequestAPI = async (method, url, payload) => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')

        const token = getTokenFromStorage()
        const headers = {
            'Authorization': `Bearer ${token}`,
        }
        let params = {
            method: method,
            url: url,
            headers,
            // withCredentials: true
        }
        if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
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

