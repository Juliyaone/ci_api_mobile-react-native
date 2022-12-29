import {messagesValues, setErrorMessage, setSuccessMessage} from "../reducers/messagesHandler";
import {updateUserFromServerData} from "../actions/userActions";
import axios from "axios";
import * as urls from "./urls";
import {updateComplexes} from "../reducers/complexesReducer";

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
                dispatch(setSuccessMessage(messagesValues.NEED_VERIFICATION))
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
                dispatch(setSuccessMessage(messagesValues.SMS_APPROVE_OK))
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
                    dispatch(setSuccessMessage(messagesValues.LOGIN_OK))
                } else {
                    console.log('Переходим на страницу /sms-entry (VerificationScreen)')
                    dispatch(setSuccessMessage(messagesValues.NEED_VERIFICATION))
                }
            }, (error) => {
                console.log('Крутилка загрузки ВыКЛЮЧЕНА! ОШИБКА!')
                console.log(error.response.data)
                dispatch(setErrorMessage(error.response.data.detail))
            })
    }
}

export const getComplexes = () => {
    return dispatch => {
        console.log('Крутилка загрузки ВКЛЮЧЕНА')
        // TODO заглушка
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIyNzkwODksImlhdCI6MTY3MjI1MDI4OSwic3ViIjoxfQ.r7v1HMLq6MfLqA9oDL68LrmnRiF306NJbeTNCiru1oU'
        const headers = {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        axios.get(
            urls.COMPLEXES_STATE,
            {headers}
        )
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
