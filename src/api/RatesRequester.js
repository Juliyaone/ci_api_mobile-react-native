import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов тарифов
 */
export class RatesRequester extends BaseRequester {

    /**
     * Возвращает список тарифов
     */
    getAllRates = async () => {
        return await this._asyncRequestAPI('GET', urls.GET_ALL_RATES)
    }

}