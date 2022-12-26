import {SEND_SMS_CODE} from "../actions";

const initialState = {
    phone: '',
    sms_code: ''
}

function smsEntryReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_SMS_CODE:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default smsEntryReducer;
