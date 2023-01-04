import thunk from 'redux-thunk'
import userReducer from "./reducers/userReducer";
import messagesReducer from "./reducers/messagesReducer";
import complexesReducer from "./reducers/complexesReducer";
import videosReducer from "./reducers/videosReducer";
import ratesReducer from "./reducers/ratesReducer";
import moodsReducer from "./reducers/moodsReducer";
import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'


const reducer = {
    userReducer,
    messagesReducer,
    complexesReducer,
    videosReducer,
    ratesReducer,
    moodsReducer,
}

const middleware = [
    thunk,
    logger
]

export const Store = configureStore({
    middleware,
    reducer
})
