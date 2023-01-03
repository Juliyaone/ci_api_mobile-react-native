export const UPDATE_VIDEOS = 'UPDATE_VIDEOS'

const initialState = {
    items: []
}

function videosReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_VIDEOS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default videosReducer;

/**
 * Апдейтит список видео
 * @param payload - [ videos ]
 * */
export const updateVideos = payload => dispatch => {
    dispatch({type: UPDATE_VIDEOS, payload})
}