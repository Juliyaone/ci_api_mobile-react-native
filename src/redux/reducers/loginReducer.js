import user from "../constants";


const initialState = {
    phone: '1234567890',
    password: 'asd',
}

/**
 * Меняет данные при вводе телефона и пароля
 */
function loginReducer(state = initialState, action) {
    switch (action.type) {
        case user.SET_PHONE:
            return {...state, phone: action.payload}
        case user.SET_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state
    }
}

export default loginReducer;
