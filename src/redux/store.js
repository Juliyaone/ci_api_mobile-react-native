import React from "react";
import {configureStore} from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import {userApi} from "./api";


export const Store = configureStore({
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(userApi.middleware)
            // .concat(logger)
    },
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    }
})