import {updateVideos} from "../reducers/videosReducer";
import {VideoRequester} from "../../api/VideosRequester";

/**
 * Запрашивает на сервере список видео для комплекса
 * @param complexID - string (ex. '1' or '2' or '30')
 */
export const getVideos = complexID => {
    return async dispatch => {
        const data = await new VideoRequester(dispatch).getVideosByComplexId(complexID)
        if (data) {
            dispatch(updateVideos(data))
        }
    }
}