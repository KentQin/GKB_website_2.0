import { SET_GOOGLE_RESULTS } from '../actions/types';
// pure redux function, action creator
export function setResults(array) {
    return {
        type: SET_GOOGLE_RESULTS,
        data: array
    }
}

export function setGoogleResults(array) {
    return dispatch => {
        dispatch(setResults(array));
    }
}
