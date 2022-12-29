export const SET_USERNAME = 'SET_USERNAME'
export const SET_LASTNAME = 'SET_LASTNAME'
export const SET_THIRDNAME = 'SET_THIRDNAME'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_PHONE = 'SET_PHONE'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_PASSWORD2 = 'SET_PASSWORD2'
export const SET_GENDER = 'SET_GENDER'

/**
 * Меняет поле username для регистрации (Registration.jsx)
 * */
export const inputRegisterUsername = payload => dispatch => {
    dispatch({
        type: SET_USERNAME,
        payload: payload
    })
}

/**
 * Меняет поле last_name для регистрации (Registration.jsx)
 * */
export const inputRegisterLastname = payload => dispatch => {
    dispatch({
        type: SET_LASTNAME,
        payload: payload
    })
}
/**
 * Меняет поле third_name для регистрации (Registration.jsx)
 * */
export const inputRegisterThirdName = payload => dispatch => {
    dispatch({
        type: SET_THIRDNAME,
        payload: payload
    })
}

/**
 * Меняет поле email для регистрации (Registration.jsx)
 * */
export const inputRegisterEmail = payload => dispatch => {
    dispatch({
        type: SET_EMAIL,
        payload: payload
    })
}

/**
 * Меняет поле phone для регистрации (Registration.jsx)
 * */
export const inputRegisterPhone = payload => dispatch => {
    dispatch({
        type: SET_PHONE,
        payload: payload
    })
}

/**
 * Меняет поле password для регистрации (Registration.jsx)
 * */
export const inputRegisterPassword = payload => dispatch => {
    dispatch({
        type: SET_PASSWORD,
        payload: payload
    })
}


/**
 * Меняет поле password2 для регистрации (Registration.jsx)
 * */
export const inputRegisterPassword2 = payload => dispatch => {
    dispatch({
        type: SET_PASSWORD2,
        payload: payload
    })
}


/**
 * Меняет поле gender для регистрации (Registration.jsx)
 * */
export const inputRegisterGender = payload => dispatch => {
    dispatch({
        type: SET_GENDER,
        payload: payload
    })
}

