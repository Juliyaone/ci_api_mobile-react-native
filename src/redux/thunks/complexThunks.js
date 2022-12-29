import axios from "axios";
import * as urls from "../urls";
import {updateComplexes} from "../reducers/complexesReducer";
import {setErrorMessage} from "../reducers/messagesHandler";

export const getComplexes = () => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        axios.get(urls.COMPLEXES_STATE)
            .then((response) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                // TODO плохой формат возвращаемых данных
                dispatch(updateComplexes(response.data))
            }, (error) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log(error.response.data)
                dispatch(setErrorMessage(error.response.data.detail))
            })
    }
}