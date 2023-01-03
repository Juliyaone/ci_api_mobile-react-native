export const UPDATE_RATES = 'UPDATE_RATES'

const initialState = {
    items: []
}

function ratesReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_RATES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default ratesReducer;

/**
 * Апдейтит список тарифов
 * @param payload - [ rates ]
 * */
export const updateRates = payload => dispatch => {
    dispatch({type: UPDATE_RATES, payload})
}