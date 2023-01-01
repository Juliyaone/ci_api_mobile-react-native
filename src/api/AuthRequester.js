import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";


/**
 * Класс для запросов авторизации, аутентификации, регистрации
 * @param dispatch - callback function useDispatch
 */
export class AuthRequester extends BaseRequester {
    /**
     * Возвращает данные о текущем пользователе используя токен
     */
    getMeUser = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_ME)
    }
    /**
     * Возвращает данные о пользователе и токен
     */
    loginUser = async (payload) => {
        return await this._asyncRequestAPI('POST', urls.LOGIN, payload)
    }

    /**
     * Отправляет запрос на регистрацию пользователя
     */
    registerNewUser = async (payload) => {
        return await this._asyncRequestAPI('POST', urls.REGISTRATION, payload)
    }

    /**
     * Возвращает данные о пользователе и токен
     */
    approveVerificationCode = async (payload) => {
        return await this._asyncRequestAPI('POST', urls.VERIFICATION_SMS_CODE, payload)
    }
}