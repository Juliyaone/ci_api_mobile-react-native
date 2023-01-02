import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer"
import smsEntryReducer from "./reducers/smsEntryReducer";
import messagesReducer from "./reducers/messagesReducer";
import complexesReducer from "./reducers/complexesReducer";
import videosReducer from "./reducers/videosReducer";
import ratesReducer from "./reducers/ratesReducer";
import moodsReducer from "./reducers/moodsReducer";

const rootReducer = combineReducers(
    {
        loginReducer,
        userReducer,
        smsEntryReducer,
        messagesReducer,
        complexesReducer,
        videosReducer,
        ratesReducer,
        moodsReducer,
    }
)


export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
