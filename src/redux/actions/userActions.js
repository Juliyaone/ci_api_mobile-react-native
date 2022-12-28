export const LOGIN_USER = 'LOGIN_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PHONE = 'SET_PHONE'
export const SET_SMS_CODE = 'SET_SMS_CODE'

/**
 * Обновляет данные юзера после авторизации
 * @param payload - { userdata from server }
 * */
export const updateUserFromServerData = payload => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: payload
    })
}

/**
 * Меняет поле phone для авторизации (Login.jsx)
 * */
export const inputLoginPhone = payload => dispatch => {
    dispatch({
        type: SET_PHONE,
        payload: payload
    })
}

/**
 * Меняет поле password для авторизации (Login.jsx)
 * */
export const inputLoginPassword = payload => dispatch => {
    dispatch({
        type: SET_PASSWORD,
        payload: payload
    })
}


/**
 * Меняет поле code для подтверждения смс-кода (SmsEntry.jsx)
 * */
export const inputLoginSmsCode = payload => dispatch => {
    dispatch({
        type: SET_SMS_CODE,
        payload: payload
    })
}

