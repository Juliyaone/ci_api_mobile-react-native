import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов комплексов
 */
export class ComplexRequester extends BaseRequester {
    /**
     * Возвращает текущее состояние комплексов пользователя
     * (какие просмотрены, какие нет, какой текущий)
     */
    getComplexesState = async () => {
        return await this._asyncRequestAPI('GET', urls.COMPLEXES_STATE)
    }

}