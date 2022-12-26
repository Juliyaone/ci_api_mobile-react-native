export const CREATE_USER = 'CREATE_USER'
export const SEND_SMS_CODE = 'SEND_SMS_CODE'
export const LOGIN_USER = 'LOGIN_USER'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PHONE = 'SET_PHONE'


export const createUser = payload => dispatch => {
    dispatch({
        type: CREATE_USER,
        payload: payload
    })
}

export const sendSmsCode = payload => dispatch => {
    dispatch({
        type: SEND_SMS_CODE,
        payload: payload
    })
}

export const loginUser = payload => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: payload
    })
}

export const setPhone = payload => dispatch => {
    dispatch({
        type: SET_PHONE,
        phone: payload
    })
}

export const setPassword = payload => dispatch => {
    dispatch({
        type: SET_PASSWORD,
        password: payload
    })
}
