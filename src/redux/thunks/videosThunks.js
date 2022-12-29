import axios from "axios";
import * as urls from "../urls";
import {setErrorMessage} from "../reducers/messagesHandler";
import {updateVideos} from "../reducers/videosReducer";

/**
 * Запрашивает на сервере список видео для комплекса
 * @param complexID - string (ex. '1' or '2' or '30')
 */
export const getVideos = complexID => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        axios.get(urls.ALL_VIDEOS_FOR_COMPLEX + '/' + complexID)
            .then((response) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                dispatch(updateVideos(response.data))
            }, (error) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log(error.response.data)
                dispatch(setErrorMessage(error.response.data.detail))
            })
    }
}