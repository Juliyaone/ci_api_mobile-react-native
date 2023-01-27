import React from "react";
import {configureStore} from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import {userApi} from "./api";


export const Store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(userApi.middleware)
            // .concat(logger)
    }
})




// import { userApi } from '@app/core/api/rtkApi'
// import rootReducer from '@app/core/state/root'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { persistReducer, persistStore } from 'redux-persist'

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   devTools: __DEV__,
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }).concat(api.middleware), // NOTE this addition
//   reducer: persistedReducer,
// })

// export const persistor = persistStore(store)
// setupListeners(store.dispatch) // NOTE this addition

// export default store