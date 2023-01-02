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
    moodData: {},
    avatar: null,
    avatarData: {
        id: null,
        file_name: ''
    },
    rate_id: null,
    rateData: {
        id: null,
        name: '',
        duration: null,
        price: null
    },
    isLogged: false,
    isCreated: false,
}

/**
 * Меняет данные пользователя
 * @param state: { user data }
 * @param action: { type, payload }
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
        case user.SET_RATE_DATA:
            return {...state, rateData: action.payload}
        case user.SET_AVATAR_DATA:
            return {...state, avatarData: action.payload}
        case user.SET_IS_LOGGED_OUT:
            return initialState
        default:
            return state
    }
}

export default userReducer;
