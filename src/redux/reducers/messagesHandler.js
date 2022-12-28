const SUCCESS_TYPE = 'success'
export const LOGIN_OK = 'Вы удачно зашли в аккаунт'
export const SMS_APPROVE_OK = 'Смс-код подтвержден'
export const SUBSCRIBE_OK = 'Вы удачно оформили подписку'


const ERROR_TYPE = 'error'
export const UNDEFINED_ERROR = 'Ошибка не распознана'
export const INVALID_PHONE_NUMBER = 'Неверный номер телефона'
export const INVALID_USER_OR_PASSWORD = 'Неверный логин или пароль'
export const INVALID_SMS_CODE = 'Неверный смс-код'
export const EMAIL_EXISTS = 'Пользователь с таким email уже существует'
export const PHONE_EXISTS = 'Пользователь с таким телефоном уже существует'
export const NEED_VERIFICATION = 'Необходимо верифицировать телефон'


const initialState = {
    message: '',
    messageType: ''
}

/**
 * Меняет состояние сообщения (message)
 */
function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case INVALID_PHONE_NUMBER:
            return {...state, ...action.payload}
        case INVALID_USER_OR_PASSWORD:
            return {...state, ...action.payload}
        case INVALID_SMS_CODE:
            return {...state, ...action.payload}
        case LOGIN_OK:
            return {...state, ...action.payload}
        case SMS_APPROVE_OK:
            return {...state, ...action.payload}
        case NEED_VERIFICATION:
            return {...state, ...action.payload}
        case PHONE_EXISTS:
            return {...state, ...action.payload}
        case UNDEFINED_ERROR:
            return {...state, ...action.payload}
        default:
            return state
    }
}

/**
 * Принимает текст ошибки (например при ответе со статусом не 200 - error.response.data.detail)
 */
export const setErrorMessage = payload => dispatch => {
    let text
    switch (payload) {
        case 'Invalid phone number':
            text = INVALID_PHONE_NUMBER
            break
        case 'Invalid user or password':
            text = INVALID_USER_OR_PASSWORD
            break
        case 'Invalid sms code':
            text = INVALID_SMS_CODE
            break
        case 'Sms service error':
            text = INVALID_PHONE_NUMBER
            break
        case 'Email exists':
            text = EMAIL_EXISTS
            break
        case 'Phone exists':
            text = PHONE_EXISTS
            break
        default:
            text = UNDEFINED_ERROR
    }
    console.log('setErrorMessage: ' + text)
    dispatch({
        type: text,
        payload: {message: text, messageType: ERROR_TYPE}
    })
}

/**
 * Принимает в качестве аргумента позитивный (не ошибочный) тип экшна: LOGIN_OK, SUBSCRIBE_OK etc
 */
export const setSuccessMessage = payload => dispatch => {
    dispatch({
        type: payload,
        payload: {message: payload, messageType: SUCCESS_TYPE}
    })
}

export default messagesReducer;