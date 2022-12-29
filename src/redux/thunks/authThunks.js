import {messagesValues, setErrorMessage, setSuccessMessage} from "../reducers/messagesHandler";
import {updateUserFromServerData} from "../actions/userActions";
import axios from "axios";
import * as urls from "../urls";
import {saveToken} from "../../auth/tokenStorage";
import {setUserIsLogged} from "../actions/registerActions";

/**
 * Регистрирует нового пользователя
 @param payload - { user data }
 */
export const sendRegisterUserData = payload => {
    return dispatch => {
        payload = {
            ...payload,
            test: true  // TODO убрать после тестов
        }
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        axios.post(urls.REGISTRATION, payload)
            .then((response) => {
                dispatch(setUserIsLogged(false))
                console.log('Переходим на страницу /sms-entry (VerificationScreen)')
                dispatch(setSuccessMessage(messagesValues.NEED_VERIFICATION))
            }, (error) => {
                console.log('Request error:')
                console.log(error.response.data)
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log('Переходим на страницу / (VerificationScreen)')
                dispatch(setUserIsLogged(false))
                dispatch(setErrorMessage(error.response.data.detail))
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
        axios.post(urls.VERIFICATION_SMS_CODE, payload)
            .then((response) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                dispatch(updateUserFromServerData(response.data.user))
                saveToken(response.data.token)
                dispatch(setUserIsLogged(true))
                dispatch(setSuccessMessage(messagesValues.SMS_APPROVE_OK))
                console.log('Переходим на страницу /profile (VerificationScreen)')
            }, (error) => {
                console.log('Request error:')
                console.log(error.response.data)
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log('Переходим на страницу /sms-entry (VerificationScreen)')
                dispatch(setUserIsLogged(false))
                dispatch(setErrorMessage(error.response.data.detail))
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
        axios.post(urls.LOGIN, payload)
            .then((response) => {
                const user = response.data.user
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                dispatch(updateUserFromServerData(user))
                saveToken(response.data.token)
                if (user.is_verified) {
                    console.log('Переходим на страницу /profile')
                    dispatch(setUserIsLogged(true))
                    dispatch(setSuccessMessage(messagesValues.LOGIN_OK))
                } else {
                    console.log('Переходим на страницу /sms-entry (VerificationScreen)')
                    dispatch(setUserIsLogged(true))
                    dispatch(setSuccessMessage(messagesValues.NEED_VERIFICATION))
                }
            }, (error) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log(error.response.data)
                dispatch(setUserIsLogged(false))
                dispatch(setErrorMessage(error.response.data.detail))
            })
    }
}

