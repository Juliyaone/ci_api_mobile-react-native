import {setUserIsCreated, setUserIsLoggedOut} from "../redux/actions/registerActions";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveTokenToStorage = async (token) => {
    // localStorage.setItem("userToken", token)
    try {
        const tok = await AsyncStorage.setItem('@storage_Key', token)
        console.log(tok);
    } catch (e) {
        console.log("Токен не соxранился");
    }
}


export const getTokenFromStorage = async () => {
    // return localStorage.getItem("userToken");
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      // value previously stored
      value = '@storage_Key'
      console.log(value);
      return value;
    }
  } catch(e) {
    // error reading value
    console.log(e);
  }
}


export const isTokenExpired = () => {
    return false
}

export const refreshToken = () => {
    return null
}

export const deleteTokenFromStorage = async (dispatch) => {
    // localStorage.setItem("userToken", null)
    try {
        await AsyncStorage.setItem('@storage_Key', null)
    } catch (e) {
        console.log("Токен не удалился");
    }
    dispatch(setUserIsLoggedOut(false))
    dispatch(setUserIsCreated(false))
}
