import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer"
import messagesReducer from "./reducers/messagesReducer";
import complexesReducer from "./reducers/complexesReducer";
import videosReducer from "./reducers/videosReducer";
import ratesReducer from "./reducers/ratesReducer";
import moodsReducer from "./reducers/moodsReducer";
import smsEntryReducer from "./reducers/smsEntryReducer";


const rootReducer = combineReducers(
    {
        loginReducer,
        userReducer,
        messagesReducer,
        complexesReducer,
        videosReducer,
        ratesReducer,
        moodsReducer,
        smsEntryReducer
    }
)


export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
