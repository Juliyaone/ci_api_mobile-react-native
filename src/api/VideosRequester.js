import * as urls from "../redux/urls";
import {BaseRequester} from "./BaseRequester";

/**
 * Класс для запросов видео
 */
export class VideoRequester extends BaseRequester {

    getVideosByComplexId = async (complexID) => {
        const url = urls.ALL_VIDEOS_FOR_COMPLEX + '/' + complexID
        return await this._asyncRequestAPI('GET', url)
    }
}