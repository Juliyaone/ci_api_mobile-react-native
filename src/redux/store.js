import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer"
import smsEntryReducer from "./reducers/smsEntryReducer";
import messagesReducer from "./reducers/messagesHandler";

const rootReducer = combineReducers(
    {
        loginReducer,
        userReducer,
        smsEntryReducer,
        messagesReducer
    }
)


export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
