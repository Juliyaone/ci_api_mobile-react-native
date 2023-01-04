import {MoodsRequester} from "../../api/MoodsRequester";
import {updateMoods} from "../reducers/moodsReducer";

/**
 * Запрашивает на сервере список настроений
 */
export const getMoods = () => {
    return async dispatch => {
        const data = await new MoodsRequester(dispatch).getAllMoods()
        if (data) {
            dispatch(updateMoods(data))
        }
    }
}
