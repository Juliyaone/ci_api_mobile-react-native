import {setErrorMessage} from "../reducers/messagesHandler";


/**
 * Выключает крутилку, логирует сообщение об ошибке, сетит Message.
 * @param dispatch
 * @param data
 * @param redirectToURL
 */
export function errorHandler(dispatch, data, redirectToURL='') {
    console.log('Request error:')
    console.log(data)
    console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
    dispatch(setErrorMessage(data.detail))
    if (redirectToURL) {
        console.log(`Переходим на страницу ${redirectToURL}`)
    }
}