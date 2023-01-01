import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов видео
 */
export class VideoRequester extends BaseRequester {

    /**
     * Возвращает список видео используя complexID
     * @param complexID - integer number or string (ex. '1', '15', etc)
     */
    getVideosByComplexId = async (complexID) => {
        const url = urls.ALL_VIDEOS_FOR_COMPLEX + '/' + complexID
        return await this._asyncRequestAPI('GET', url)
    }
}