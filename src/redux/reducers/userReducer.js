import {LOGIN_USER} from "../actions/userActions";

/**
 * Данные пользователя
 */
const initialState = {
    id: null,
    max_level: 10,
    username: 'username',
    last_name: 'last_name',
    third_name: 'third_name',
    email: 'email',
    phone: '000',
    password: 'pass',
    gender: null,
    level: 1,
    is_verified: false,
    is_active: false,
    is_email_verified: false,
    current_complex: 1,
    expired_at: '',
}

/**
 * Меняет данные пользователя
 */
function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducer;
