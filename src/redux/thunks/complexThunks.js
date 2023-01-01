import * as urls from "../urls";
import {updateComplexes} from "../reducers/complexesReducer";
import {errorHandler} from "./errorHandler";
import {requestAPI} from "../../api/requestAPI";


/**
 * Апдейтит список комплексов
 */
export const getComplexes = () => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        requestAPI('GET', urls.COMPLEXES_STATE)
            .then((response) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                // TODO плохой формат возвращаемых данных
                dispatch(updateComplexes(response.data))
            }, (error) => {
                errorHandler(dispatch, error.response.data, '/login')
            })
    }
}