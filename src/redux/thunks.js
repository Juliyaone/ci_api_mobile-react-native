import {login} from "./api/registerAndAuthorization";
import {LOGIN_OK, setErrorMessage, setSuccessMessage} from "./reducers/messagesHandler";
import {updateLoggedUser} from "./actions/userActions";

/**
 * Принимает phone и password, отправляет запрос для получения токена,
 * сохраняет токен, обновляет данные пользователя
 @param payload - {
 <br>phone, <br>password <br>}
 */
export const getLoginUserData = payload => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        login(payload)
            .then((response) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                dispatch(updateLoggedUser(response.data.user))
                console.log('Сохраняем токен в токенохранилище')
                dispatch(setSuccessMessage(LOGIN_OK))
                // dispatch(saveToken(response.data.token)) - TODO реализовать
            }, (error) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                dispatch(setErrorMessage(error.response.data.detail))
            })
    }
}
