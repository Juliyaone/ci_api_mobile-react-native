export const UPDATE_MOODES = 'UPDATE_MOODES'

const initialState = {
    items: []
}

function moodsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MOODES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default moodsReducer;

/**
 * Апдейтит список настроений
 * @param payload - [ moods ]
 * */
export const updateMoods = payload => dispatch => {
    dispatch({type: UPDATE_MOODES, payload})
}
