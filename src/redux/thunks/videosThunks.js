import * as urls from "../urls";
import {updateVideos} from "../reducers/videosReducer";
import {errorHandler} from "./errorHandler";
import {requestAPI} from "../../api/requestAPI";

/**
 * Запрашивает на сервере список видео для комплекса
 * @param complexID - string (ex. '1' or '2' or '30')
 */
export const getVideos = complexID => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        requestAPI('GET',urls.ALL_VIDEOS_FOR_COMPLEX + '/' + complexID)
            .then((response) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                dispatch(updateVideos(response.data))
            }, (error) => {
                errorHandler(dispatch, error.response.data, '/login')
            })
    }
}