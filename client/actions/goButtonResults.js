import { SET_GO_BUTTON_RESULTS } from '../actions/types';
// pure redux function, action creator
export function setGoButtonResults(array) {
    return {
        type: SET_GO_BUTTON_RESULTS,
        data: array
    }
}

export function setGoButtonResultsArray(array) {
    return dispatch => {
        // console.log("*******************");
        // console.log(array);
        dispatch(setGoButtonResults(array));

    }
}
