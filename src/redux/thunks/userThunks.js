import {UserRequester} from "../../api/UserRequester";
import {updateUserAvatar} from "../actions/userActions";

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