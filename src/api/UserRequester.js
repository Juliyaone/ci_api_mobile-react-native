import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов данных о пользователе
 */
export class UserRequester extends BaseRequester {
    /**
     * Возвращает тариф пользователя
     */
    getUserRate = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_USER_RATE)
    }
    /**
     * Возвращает данные аватара пользователя
     */
    getUserAvatar = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_USER_AVATAR)
    }
    /**
     * Возвращает данные настроения пользователя
     */
    getUserMood = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_USER_MOOD)
    }
}