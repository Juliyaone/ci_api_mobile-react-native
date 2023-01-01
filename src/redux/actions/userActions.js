import user from "../constants";

/**
 * Обновляет данные юзера после авторизации
 * @param payload - { userdata from server }
 * */
export const updateUserFromServerData = payload => (dispatch) => {
    dispatch({
        type: user.LOGIN_USER,
        payload: payload
    })
}

/**
 * Меняет поле phone для авторизации (Login.jsx)
 * @param payload - string
 * */
export const inputLoginPhone = payload => dispatch => {
    dispatch({
        type: user.SET_PHONE,
        payload: payload
    })
}

/**
 * Меняет поле password для авторизации (Login.jsx)
 * @param payload - string
 * */
export const inputLoginPassword = payload => dispatch => {
    dispatch({
        type: user.SET_PASSWORD,
        payload: payload
    })
}


/**
 * Меняет поле code для подтверждения смс-кода (SmsEntry.jsx)
 * @param payload - string
 * */
export const inputLoginSmsCode = payload => dispatch => {
    dispatch({
        type: user.SET_SMS_CODE,
        payload: payload
    })
}

