const SUCCESS_TYPE = 'success'
const ERROR_TYPE = 'error'


export const messagesValues = {
    UNDEFINED_ERROR: 'Ошибка не распознана',
    INVALID_PHONE_NUMBER: 'Неверный номер телефона',
    INVALID_USER_OR_PASSWORD: 'Неверный логин или пароль',
    INVALID_SMS_CODE: 'Неверный смс-код',
    EMAIL_EXISTS: 'Пользователь с таким email уже существует',
    PHONE_EXISTS: 'Пользователь с таким телефоном уже существует',
    NEED_VERIFICATION: 'Необходимо верифицировать телефон',
    NOT_AUTHENTICATED: 'Необходима авторизация',
    LOGIN_OK: 'Вы удачно зашли в аккаунт',
    SMS_APPROVE_OK: 'Смс-код подтвержден',
    SUBSCRIBE_OK: 'Вы удачно оформили подписку',
}


const initialState = {
    message: '',
    messageType: ''
}

/**
 * Меняет состояние сообщения (message)
 * @param action.payload - string
 */
function messagesReducer(state = initialState, action) {
    const {type, payload} = action
    if (Object.values(messagesValues).includes(type)) {
        return {...state, ...payload}
    } else {
        return state
    }
}

/**
 * Принимает текст ошибки (например при ответе со статусом не 200 - error.response.data.detail)
 * @param payload - string
 */
export const setErrorMessage = payload => dispatch => {
    let text
    switch (payload) {
        case 'Invalid phone number':
            text = messagesValues.INVALID_PHONE_NUMBER
            break
        case 'Invalid user or password':
            text = messagesValues.INVALID_USER_OR_PASSWORD
            break
        case 'Invalid sms code':
            text = messagesValues.INVALID_SMS_CODE
            break
        case 'Sms service error':
            text = messagesValues.INVALID_PHONE_NUMBER
            break
        case 'Email exists':
            text = messagesValues.EMAIL_EXISTS
            break
        case 'Phone exists':
            text = messagesValues.PHONE_EXISTS
            break
        case 'Not authenticated':
            text = messagesValues.NOT_AUTHENTICATED
            break
        default:
            text = messagesValues.UNDEFINED_ERROR
    }
    dispatch({
        type: text,
        payload: {message: text, messageType: ERROR_TYPE}
    })
}

/**
 * Принимает в качестве аргумента позитивный (не ошибочный) тип экшна: LOGIN_OK, SUBSCRIBE_OK etc
 * @param payload - string
 */
export const setSuccessMessage = payload => dispatch => {
    dispatch({
        type: payload,
        payload: {message: payload, messageType: SUCCESS_TYPE}
    })
}

export default messagesReducer;