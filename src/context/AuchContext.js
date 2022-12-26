import axios from "axios";
import React, {createContext, useState} from "react";
import {useSafeAreaFrame} from "react-native-safe-area-context";
import Navigation from "../components/Navigation";
import * as urls from "./urls";
import {CHECK_FIRST_ENTRY, DELETE_USER, SET_COMPLEX_VIEWED, SET_MOOD} from "./urls";

export const AuchContext = createContext();

export const AuchProvider = ({children}) => {
    const [phone, setphone] = useState(null);

    // auth

    const registration = async (username, last_name, third_name, email, phone, password, password2, gender) => {
        const payload = {
            username,
            last_name,
            third_name,
            email,
            phone,
            password,
            password2,
            gender,
            'test': true
        }
        try {
            const response = await axios.post(urls.REGISTRATION, payload)
            console.log(response);
            setphone(response.data.phone);

        } catch (error) {
            console.log(response);
            console.log(response.data);
            console.log(response.data.detail);
            console.log(`Вы не зарегистрированы ${error}`);
        }
    };

    const verification = async (number1, number2, number3, number4) => {
        const smsCodeArr = [number1, number2, number3, number4];
        const smsCode = smsCodeArr.join('');
        console.log(smsCode);
        const payload = {
            "code": smsCode,
            "phone": phone
        }
        try {
            const response = await axios.post(urls.VERIFICATION_SMS_CODE, payload)
            console.log(response.data);
        } catch (error) {
            console.log(`Неверный смс-код ${error}`);
        }
    }

    const login = async (phone, password) => {
        const payload = {
            "phone": phone,
            "password": password
        }
        try {
            const response = await axios.post(urls.LOGIN, payload)
            console.log(response.data);
        } catch (error) {
            console.log(`Ввели неверный логин или пароль ${error}`);
        }
    }


    // users

    const getAllRates = async () => {
        try {
            const response = await axios.get(urls.GET_ALL_RATES)
            console.log(response.data);
        } catch (error) {
            console.log(`getAllRates ${error}`);
        }
    }

    const editProfile = async (username, last_name, third_name, email, phone) => {
        const payload = {
            username,
            last_name,
            third_name,
            email,
            phone,
        }
        try {
            const response = await axios.put(urls.EDIT_PROFILE, payload)
            console.log(response.data);
        } catch (error) {
            console.log(`editProfile ${error}`);
        }
    }

    const setUserMood = async (mood_id) => {
        const payload = {
            mood_id
        }
        try {
            const response = await axios.post(urls.SET_MOOD, payload)
            console.log(response.data);
        } catch (error) {
            console.log(`setUserMood ${error}`);
        }
    }

    const checkFirstEntryEvent = async () => {
        try {
            const response = await axios.get(urls.CHECK_FIRST_ENTRY)
            console.log(response.data);
        } catch (error) {
            console.log(`checkFirstEntryEvent ${error}`);
        }
    }

    const deleteUser = async () => {
        try {
            const response = await axios.delete(urls.DELETE_USER)
            console.log(response.data);
        } catch (error) {
            console.log(`deleteUser ${error}`);
        }
    }

    // complexes

    const getComplexesState = async () => {
        try {
            const response = await axios.get(urls.COMPLEXES_STATE)
            console.log(response.data);
        } catch (error) {
            console.log(`getComplexesState ${error}`);
        }
    }
    const setComplexViewed = async (complex_id) => {
        const payload = {
            id: complex_id
        }
        try {
            const response = await axios.put(urls.SET_COMPLEX_VIEWED, payload)
            console.log(response.data);
        } catch (error) {
            console.log(`setComplexViewed ${error}`);
        }
    }

    // videos

    const getVideosByComplexID = async (complex_id) => {
        try {
            const response = await axios.get(urls.ALL_VIDEOS_FOR_COMPLEX + '/' + complex_id)
            console.log(response.data);
        } catch (error) {
            console.log(`getVideosByComplexID ${error}`);
        }
    }

    return (
        <AuchContext.Provider value={{registration, verification, login}}>{children}</AuchContext.Provider>
    )
}