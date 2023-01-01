import user from "../constants";


/**
 * Меняет поле isLogged и сбрасывает user state до initialState
 * @param payload - boolean
 * */
export const setUserIsLoggedOut = payload => dispatch => {
    dispatch({
        type: user.SET_IS_LOGGED_OUT,
        payload: payload
    })
}

/**
 * Меняет поле isLogged
 * @param payload - boolean
 * */
export const setUserIsLogged = payload => dispatch => {
    dispatch({
        type: user.SET_IS_LOGGED,
        payload: payload
    })
}

/**
 * Меняет поле username для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterUsername = payload => dispatch => {
    dispatch({
        type: user.SET_USERNAME,
        payload: payload
    })
}

/**
 * Меняет поле last_name для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterLastname = payload => dispatch => {
    dispatch({
        type: user.SET_LASTNAME,
        payload: payload
    })
}
/**
 * Меняет поле third_name для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterThirdName = payload => dispatch => {
    dispatch({
        type: user.SET_THIRDNAME,
        payload: payload
    })
}

/**
 * Меняет поле email для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterEmail = payload => dispatch => {
    dispatch({
        type: user.SET_EMAIL,
        payload: payload
    })
}

/**
 * Меняет поле phone для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterPhone = payload => dispatch => {
    dispatch({
        type: user.SET_PHONE,
        payload: payload
    })
}

/**
 * Меняет поле password для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterPassword = payload => dispatch => {
    dispatch({
        type: user.SET_PASSWORD,
        payload: payload
    })
}


/**
 * Меняет поле password2 для регистрации (Registration.jsx)
 * @param payload - string
 * */
export const inputRegisterPassword2 = payload => dispatch => {
    dispatch({
        type: user.SET_PASSWORD2,
        payload: payload
    })
}


/**
 * Меняет поле gender для регистрации (Registration.jsx)
 * @param payload - boolean
 * */
export const inputRegisterGender = payload => dispatch => {
    dispatch({
        type: user.SET_GENDER,
        payload: payload
    })
}
