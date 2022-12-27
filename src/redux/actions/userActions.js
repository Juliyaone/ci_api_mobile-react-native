export const CREATE_USER = 'CREATE_USER'
export const SEND_SMS_CODE = 'SEND_SMS_CODE'
export const LOGIN_USER = 'LOGIN_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PHONE = 'SET_PHONE'


// export const createUser = payload => dispatch => {
//     dispatch({
//         type: CREATE_USER,
//         payload: payload
//     })
// }
//
// export const sendSmsCode = payload => dispatch => {
//     dispatch({
//         type: SEND_SMS_CODE,
//         payload: payload
//     })
// }

/**
 * Обновляет данные юзера после авторизации
 * */
export const updateLoggedUser = payload => (dispatch) => {
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

