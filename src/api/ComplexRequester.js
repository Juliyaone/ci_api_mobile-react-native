import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов комплексов
 */
export class ComplexRequester extends BaseRequester {
    getComplexesState = async () => {
        return await this._asyncRequestAPI('GET', urls.COMPLEXES_STATE)
    }

}