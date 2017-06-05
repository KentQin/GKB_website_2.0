import { SET_GO_BUTTON_RESULTS } from '../actions/types';

export function setGoButtonResults(array) {
    return {
        type: SET_GO_BUTTON_RESULTS,
        data: array
    }
}

export function setGoButtonResultsArray(array) {
    return dispatch => {
        dispatch(setGoButtonResults(array));

    }
}
