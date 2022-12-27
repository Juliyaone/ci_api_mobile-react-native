import {CREATE_USER, LOGIN_USER} from "../actions";
import {login} from "../../context/api_requests";

const initialState = {
    id: null,
    username: 'username',
    last_name: 'last_name',
    third_name: 'third_name',
    email: 'email',
    phone: 'phone',
    password: '',
    password2: '',
    gender: null
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            const data = login(action.payload)
            console.log(data)
            return {...state, ...data.user}
        case CREATE_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducer;
