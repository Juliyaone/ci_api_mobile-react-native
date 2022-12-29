import {SET_PASSWORD, SET_PHONE} from "../actions/userActions";

const initialState = {
    phone: '1234567890',
    password: 'asd',
}

/**
 * Меняет данные при вводе телефона и пароля
 */
function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PHONE:
            return {...state, phone: action.payload}
        case SET_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state
    }
}

export default loginReducer;
