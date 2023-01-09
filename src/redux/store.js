import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import {userApi} from "./api";


const reducer = {
    [userApi.reducerPath]: userApi.reducer
}

const middleware = [
    thunk,
    userApi.middleware,
    // logger,
]

export const Store = configureStore({
    middleware,
    reducer,
})
