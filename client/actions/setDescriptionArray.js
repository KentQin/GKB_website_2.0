import { SET_DESCRIPTION_ARRAY } from '../actions/types';

export function setDescription(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

export function setDescriptionArray(array) {
    return dispatch => {
        dispatch(setDescription(array));

    }
}
