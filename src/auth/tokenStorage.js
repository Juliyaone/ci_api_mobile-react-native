import React, { useState, useContext } from 'react';

// import {setUserIsCreated, setUserIsLoggedOut} from "../redux/actions/registerActions";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const saveTokenToStorage = async (token) => {
    //Если isLoading === true то показываем крутилку
    await AsyncStorage.setItem("userToken", token);
}


export const getTokenFromStorage = async () => {
   return await AsyncStorage.getItem("userToken", token);
}


export const isTokenExpired = () => {
    return false
}

export const refreshToken = () => {
    return null
}

export const deleteTokenFromStorage = async (dispatch) => {
    await AsyncStorage.removeItem('userToken');
    // dispatch(setUserIsLoggedOut(false))
    // dispatch(setUserIsCreated(false))
}
