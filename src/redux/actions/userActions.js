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


/**
 * Обновляет информацию о тарифе пользователя
 * @param payload - {
    id: integer,
    name: string,
    duration: integer,
    price: integer
  }
 * */
export const updateUserRate = payload => dispatch => {
    dispatch({
        type: user.SET_RATE_DATA,
        payload: payload
    })
}



/**
 * Обновляет информацию об аватаре пользователя
 * @param payload - {
    id: integer,
    file_name: string
  }
 * */
export const updateUserAvatar = payload => dispatch => {
    dispatch({
        type: user.SET_AVATAR_DATA,
        payload: payload
    })
}

