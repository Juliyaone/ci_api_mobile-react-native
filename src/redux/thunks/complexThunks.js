import {updateComplexes} from "../reducers/complexesReducer";
import {ComplexRequester} from "../../api/ComplexRequester";


/**
 * Апдейтит список комплексов
 */
export const getComplexes = () => {
    return async dispatch => {
        const data = await new ComplexRequester(dispatch).getComplexesState()
        if (data) {
            // TODO плохой формат возвращаемых данных
            dispatch(updateComplexes(data))
        }
    }
}