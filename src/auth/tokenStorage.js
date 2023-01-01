import {setUserIsLoggedOut} from "../redux/actions/registerActions";

export const saveTokenToStorage = (token) => {
    localStorage.setItem("userToken", token)
}

export const getTokenFromStorage = () => {
    return localStorage.getItem("userToken");
}

export const isTokenExpired = () => {
    return false
}

export const refreshToken = () => {
    return null
}

export const deleteTokenFromStorage = (dispatch) => {
    localStorage.setItem("userToken", null)
    dispatch(setUserIsLoggedOut(false))
}
