export const UPDATE_VIDEOS = 'UPDATE_VIDEOS'

const initialState = {
    videos: []
}

function videosReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_VIDEOS:
            console.log(action.payload)
            return {
                ...state,
                videos: action.payload
            }
        default:
            return state
    }
}

export default videosReducer;
/**
 * Апдейтит списки комлексов
 * @param payload - {
 *     user,
 *     viewed_complexes,
 *     not_viewed_complexes,
 *     today_complex
 * }
 * */
export const updateVideos = payload => dispatch => {
    dispatch({type: UPDATE_VIDEOS, payload})
}