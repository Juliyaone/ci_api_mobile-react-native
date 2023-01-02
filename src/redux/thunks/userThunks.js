import {UserRequester} from "../../api/UserRequester";
import {updateUserAvatar, updateUserMood} from "../actions/userActions";

/**
 * Запрашивает на сервере тариф пользователя
 */
export const getCurrentUserAvatar = () => {
    return async dispatch => {
        const data = await new UserRequester(dispatch).getUserAvatar()
        if (data) {
            dispatch(updateUserAvatar(data))
        }
    }
}
/**
 * Запрашивает на сервере тариф пользователя
 */
export const getCurrentUserMood = () => {
    return async dispatch => {
        const data = await new UserRequester(dispatch).getUserMood()
        if (data) {
            console.log(data)
            dispatch(updateUserMood(data))
        }
    }
}