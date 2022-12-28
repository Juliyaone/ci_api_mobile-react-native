import {SEND_SMS_CODE, SET_PHONE, SET_SMS_CODE} from "../actions/userActions";

const initialState = {
    phone: '',
    code: ''
}

/**
 * Меняет данные при вводе телефона и кода из смс
 */
function smsEntryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PHONE:
            return {...state, phone: action.payload}
        case SET_SMS_CODE:
            return {...state, code: action.payload}
        case SEND_SMS_CODE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default smsEntryReducer;
