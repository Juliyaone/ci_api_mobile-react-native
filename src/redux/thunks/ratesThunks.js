import {updateRates} from "../reducers/ratesReducer";
import {RatesRequester} from "../../api/RatesRequester";
import {updateUserRate} from "../actions/userActions";

/**
 * Запрашивает на сервере список тарифов
 */
export const getRates = () => {
    return async dispatch => {
        const data = await new RatesRequester(dispatch).getAllRates()
        if (data) {
            dispatch(updateRates(data))
        }
    }
}
/**
 * Запрашивает на сервере тариф пользователя
 */
export const getCurrentUserRate = () => {
    return async dispatch => {
        const data = await new RatesRequester(dispatch).getUserRate()
        if (data) {
            dispatch(updateUserRate(data))
        }
    }
}