import {messagesValues, setSuccessMessage} from "../reducers/messagesHandler";
import {updateUserFromServerData} from "../actions/userActions";
import * as urls from "../urls";
import {setUserIsLogged} from "../actions/registerActions";
import {errorHandler} from "./errorHandler";
import {saveTokenToStorage} from "../../auth/tokenStorage";
import {requestAPI} from "../../api/requestAPI";

/**
 *
 * @param dispatch
 * @param data - response data
 * @param message - success message will be showed
 * @param redirectToURL - URL to which need to redirect
 * @private
 */
export const loginSuccess = (dispatch, data, message, redirectToURL) => {
    console.log('Крутилка загрузки ВыКЛЮЧЕНА')
    dispatch(updateUserFromServerData(data.user))
    saveTokenToStorage(data.token)
    dispatch(setUserIsLogged(true))
    dispatch(setSuccessMessage(message))
    console.log(`Переходим на страницу ${redirectToURL}`)
}

/**
 * Регистрирует нового пользователя
 @param payload - { user data }
 */
export const sendRegisterUserData = payload => {
    return dispatch => {
        payload.test = true // TODO убрать после тестов!!!
        dispatch(setUserIsLogged(false))

        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        requestAPI('POST', urls.REGISTRATION, payload)
            .then((response) => {
                dispatch(setSuccessMessage(messagesValues.NEED_VERIFICATION))
                console.log('Переходим на страницу /sms-entry (VerificationScreen)')
            }, (error) => {
                errorHandler(dispatch, error.response.data, '/')
            })
    }
}

/**
 * Принимает phone и code, отправляет запрос подтверждения кода из смс,
 * сохраняет токен, обновляет данные пользователя
 @param payload - {
 <br>phone, <br>code <br>}
 */
export const sendSmsCode = payload => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        requestAPI('POST', urls.VERIFICATION_SMS_CODE, payload)
            .then((response) => {
                saveTokenToStorage(response.data.token)
                loginSuccess(dispatch, response.data, messagesValues.SMS_APPROVE_OK)
            }, (error) => {
                errorHandler(dispatch, error.response.data, '/sms-entry')
            })
    }
}

/**
 * Принимает phone и password, отправляет запрос для получения токена,
 * сохраняет токен, обновляет данные пользователя
 @param payload - {
 <br>phone, <br>password <br>}
 */
export const getLoginUserData = payload => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        requestAPI('POST', urls.LOGIN, payload)
            .then((response) => {
                saveTokenToStorage(response.data.token)
                if (response.data.user.is_verified) {
                    loginSuccess(dispatch, response.data, messagesValues.LOGIN_OK, '/profile')
                } else {
                    loginSuccess(dispatch, response.data, messagesValues.NEED_VERIFICATION, '/sms-entry')
                }
            }, (error) => {
                errorHandler(dispatch, error.response.data, '/login')
                dispatch(setUserIsLogged(false))
            })
    }
}
