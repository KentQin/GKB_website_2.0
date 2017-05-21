import { SET_CONTRIBUTION_ARRAY } from '../actions/types';
// pure redux function, action creator
export function setContribution(array) {
    console.log("Setting contributino array");
    return {
        type: SET_CONTRIBUTION_ARRAY,
        data: array
    }
}

export function setContributionArray(array) {
    return dispatch => {
        // console.log("*******************");
        // console.log(array);
        dispatch(setContributionArray(array));

    }
}
