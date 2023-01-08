import React, { useState, useContext } from 'react';

import {setUserIsCreated, setUserIsLoggedOut} from "../redux/actions/registerActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../auth/AuthContext"

export const saveTokenToStorage = async (token) => {
    //Если isLoading === true то показываем крутилку
    const {isLoading, setIsLoading } = useContext(AuthContext);
    setIsLoading(true);
    await AsyncStorage.setItem("userToken", token);
    setIsLoading(false);
}


export const getTokenFromStorage = async () => {
    //Если isLoading === true то показываем крутилку 
    const {isLoading, setIsLoading } = useContext(AuthContext);
    setIsLoading(true);
    await AsyncStorage.getItem("userToken", token);
    setIsLoading(false);
}


export const isTokenExpired = () => {
    return false
}

export const refreshToken = () => {
    return null
}

export const deleteTokenFromStorage = async (dispatch) => {
    //Если isLoading === true то показываем крутилку 
    const {isLoading, setIsLoading } = useContext(AuthContext);
    setIsLoading(true);
    await AsyncStorage.removeItem('userToken');
    dispatch(setUserIsLoggedOut(false))
    dispatch(setUserIsCreated(false))
    setIsLoading(true);
}
