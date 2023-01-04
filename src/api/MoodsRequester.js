import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов настроений
 */
export class MoodsRequester extends BaseRequester {

    /**
     * Возвращает список настроений
     */
    getAllMoods = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_ALL_MOODS)
    }

}