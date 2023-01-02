import {LOGIN_USER} from "../actions/userActions";
import * as reg from "../actions/registerActions";

/**
 * Данные пользователя
 */
const initialState = {
    id: null,
    max_level: 10,
    username: '',
    last_name: '',
    third_name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    gender: false,
    level: 1,
    is_verified: false,
    is_active: false,
    is_email_verified: false,
    current_complex: 1,
    expired_at: '',
    isLogged: false,
}

/**
 * Меняет данные пользователя
 *state: {
 <br>* id: null,
 <br>* username: '',
 <br>* last_name: '',
 <br>* third_name: '',
 <br>* email: '',
 <br>* phone: '',
 <br>* password: '',
 <br>* password2: '',
 <br>* gender: true,
 <br>* is_verified: false,
 <br>* is_active: false,
 <br>* is_email_verified: false,
 <br>* expired_at: ''
 <br>* current_complex: 1,
 <br>* level: 1,
 <br>* max_level: 10,
 <br>* }
 * */
function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, ...action.payload}
        case reg.SET_USERNAME:
            return {...state, username: action.payload}
        case reg.SET_LASTNAME:
            return {...state, last_name: action.payload}
        case reg.SET_THIRDNAME:
            return {...state, third_name: action.payload}
        case reg.SET_EMAIL:
            return {...state, email: action.payload}
        case reg.SET_PHONE:
            return {...state, phone: action.payload}
        case reg.SET_PASSWORD:
            return {...state, password: action.payload}
        case reg.SET_PASSWORD2:
            return {...state, password2: action.payload}
        case reg.SET_GENDER:
            return {...state, gender: action.payload}
        default:
            return state
    }
}

export default userReducer;
