import { SET_DESCRIPTION_ARRAY } from '../actions/types';
// pure redux function, action creator
export function setSearchResultList(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

export function setDescriptionArray(array) {
    return dispatch => {
        // console.log("*******************");
        // console.log(array);
        dispatch(setSearchResultList(array));

    }
}