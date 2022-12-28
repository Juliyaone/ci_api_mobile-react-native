import {
    LOGIN_OK, NEED_VERIFICATION,
    setErrorMessage,
    setSuccessMessage,
    SMS_APPROVE_OK
} from "../reducers/messagesHandler";
import {updateUserFromServerData} from "../actions/userActions";
import axios from "axios";
import * as urls from "./urls";

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
                console.log('Переходим на страницу /sms-entry (VerificationScreen)')
                dispatch(setSuccessMessage(NEED_VERIFICATION))
                // dispatch(updateUserFromServerData(response.data.user))
            }, (error) => {
                console.log('Request error:')
                console.log(error.response.data)
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
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
                console.log('Сохраняем токен в токенохранилище')
                dispatch(setSuccessMessage(SMS_APPROVE_OK))
                // dispatch(saveToken(response.data.token)) - TODO реализовать
            }, (error) => {
                console.log('Request error:')
                console.log(error.response.data)
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
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
                console.log(user)
                console.log('Крутилка загрузки ВыКЛЮЧЕНА')
                dispatch(updateUserFromServerData(response.data.user))
                console.log('Сохраняем токен в токенохранилище')
                // dispatch(saveToken(response.data.token)) - TODO реализовать
                if (user.is_verified) {
                    console.log('Переходим на страницу /profile')
                    dispatch(setSuccessMessage(LOGIN_OK))
                } else {
                    console.log('Переходим на страницу /sms-entry (VerificationScreen)')
                    dispatch(setSuccessMessage(NEED_VERIFICATION))
                }
            }, (error) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log(error.response.data)
                dispatch(setErrorMessage(error.response.data.detail))
            })
    }
}
