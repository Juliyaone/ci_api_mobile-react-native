import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";


/**
 * Класс для запросов авторизации, аутентификации, регистрации
 */
export class AuthRequester extends BaseRequester {
    getMeUser = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_ME)
    }

    loginUser = async (payload) => {
        return await this._asyncRequestAPI('POST', urls.LOGIN, payload)
    }

    registerNewUser = async (payload) => {
        return await this._asyncRequestAPI('POST', urls.REGISTRATION, payload)
    }

    approveVerificationCode = async (payload) => {
        return await this._asyncRequestAPI('POST', urls.VERIFICATION_SMS_CODE, payload)
    }
}