import user from "../constants";

/**
 * Данные пользователя
 */
const initialState = {
    id: null,
    username: '',
    last_name: '',
    third_name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    gender: true,
    is_verified: false,
    is_active: false,
    is_email_verified: false,
    expired_at: '',
    current_complex: 1,
    level: 1,
    max_level: 10,
    mood: null,
    avatar: null,
    isLogged: false,
    isCreated: false,
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
        case user.LOGIN_USER:
            return {...state, ...action.payload}
        case user.SET_USERNAME:
            return {...state, username: action.payload}
        case user.SET_LASTNAME:
            return {...state, last_name: action.payload}
        case user.SET_THIRDNAME:
            return {...state, third_name: action.payload}
        case user.SET_EMAIL:
            return {...state, email: action.payload}
        case user.SET_PHONE:
            return {...state, phone: action.payload}
        case user.SET_PASSWORD:
            return {...state, password: action.payload}
        case user.SET_PASSWORD2:
            return {...state, password2: action.payload}
        case user.SET_GENDER:
            return {...state, gender: action.payload}
        case user.SET_IS_LOGGED:
            return {...state, isLogged: action.payload}
        case user.SET_IS_CREATED:
            return {...state, isCreated: action.payload}
        case user.SET_IS_LOGGED_OUT:
            return initialState
        default:
            return state
    }
}

export default userReducer;
