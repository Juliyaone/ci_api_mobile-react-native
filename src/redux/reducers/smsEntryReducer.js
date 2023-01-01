import user from "../constants";

const initialState = {
    phone: '',
    code: ''
}

/**
 * Меняет данные при вводе телефона и кода из смс
 */
function smsEntryReducer(state = initialState, action) {
    switch (action.type) {
        case user.SET_PHONE:
            return {...state, phone: action.payload}
        case user.SET_SMS_CODE:
            return {...state, code: action.payload}
        default:
            return state
    }
}

export default smsEntryReducer;
