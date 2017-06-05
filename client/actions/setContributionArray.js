import { SET_CONTRIBUTION_ARRAY } from '../actions/types';

export function setContribution(array) {
    console.log("Setting contributino array");
    return {
        type: SET_CONTRIBUTION_ARRAY,
        data: array
    }
}

export function setContributionArray(array) {
    return dispatch => {
        dispatch(setContributionArray(array));

    }
}
