import {SEND_SMS_CODE} from "../actions/userActions";

const initialState = {
    phone: '',
    sms_code: ''
}

/**
 * Меняет данные при вводе телефона и кода из смс
 */
function smsEntryReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_SMS_CODE:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default smsEntryReducer;
