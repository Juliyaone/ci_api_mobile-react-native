import {messagesValues, setSuccessMessage} from "../reducers/messagesHandler";
import {updateUserFromServerData} from "../actions/userActions";
import {setUserIsCreated, setUserIsLogged} from "../actions/registerActions";
import {saveTokenToStorage} from "../../auth/tokenStorage";
import {AuthRequester} from "../../api/AuthRequester";

/**
 *
 * @param dispatch
 * @param user - { user state data }
 * @param message - success message will be showed
 * @private
 */
export const loginSuccess = (dispatch, user, message) => {
    dispatch(updateUserFromServerData(user))
    dispatch(setUserIsLogged(true))
    dispatch(setSuccessMessage(message))
    dispatch(setUserIsCreated(false))

}

/**
 * Регистрирует нового пользователя
 @param payload - { user data }
 */
export const sendRegisterUserData = payload => {
    return async (dispatch) => {
        payload.test = true // TODO убрать после тестов!!!
        dispatch(setUserIsLogged(false))

        const data = await new AuthRequester(dispatch).registerNewUser(payload)
        if (data) {
            dispatch(setSuccessMessage(messagesValues.NEED_VERIFICATION))
            dispatch(setUserIsCreated(true))
        }
    }
}

/**
 * Принимает phone и code, отправляет запрос подтверждения кода из смс,
 * сохраняет токен, обновляет данные пользователя
 @param payload - {
 <br>phone, <br>code <br>}
 */
export const sendSmsCode = payload => {
    return async dispatch => {
        const data = await new AuthRequester(dispatch).approveVerificationCode(payload)
        if (data) {
            saveTokenToStorage(data.token)
            loginSuccess(dispatch, data.user, messagesValues.SMS_APPROVE_OK)
        }
    }
}

/**
 * Принимает phone и password, отправляет запрос для получения токена,
 * сохраняет токен, обновляет данные пользователя
 @param payload - {
 <br>phone, <br>password <br>}
 */
export const getLoginUserData = payload => {
    return async dispatch => {
        const data = await new AuthRequester(dispatch).loginUser(payload)
        if (data) {
            saveTokenToStorage(data.token)
            if (data.user.is_verified) {
                loginSuccess(dispatch, data.user, messagesValues.LOGIN_OK)
            } else {
                loginSuccess(dispatch, data.user, messagesValues.NEED_VERIFICATION)
            }
        }
    }
}
