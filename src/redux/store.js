import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/user_profile";
import loginReducer from "./reducers/authorize"
import smsEntryReducer from "./reducers/sms_entry";


const rootReducer = combineReducers(loginReducer)


export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
