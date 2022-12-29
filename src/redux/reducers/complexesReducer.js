export const UPDATE_COMPLEXES = 'UPDATE_COMPLEXES'

const initialState = {
    viewed_complexes: [],
    not_viewed_complexes: [],
    today_complex: null
}

function complexesReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_COMPLEXES:
            console.log(action.payload)
            return {
                ...state,
                viewed_complexes: action.payload.viewed_complexes,
                not_viewed_complexes: action.payload.not_viewed_complexes,
                today_complex: action.payload.today_complex
            }
        default:
            return state
    }
}

export default complexesReducer;
/**
 * Апдейтит списки комлексов
 * @param payload - {
 *     user,
 *     viewed_complexes,
 *     not_viewed_complexes,
 *     today_complex
 * }
 * */
export const updateComplexes = payload => dispatch => {
    dispatch({type: UPDATE_COMPLEXES, payload})
}