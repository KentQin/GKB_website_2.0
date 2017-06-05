import axios from 'axios';
import { SET_CURRENT_USER_SEARCH_BAR } from '../actions/types';
import { SET_DESCRIPTION_ARRAY } from '../actions/types';


export function setDescriptionArray(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_SEARCH_BAR,
        user
    }
}

export function searchBarRequest(userData) {

    return dispatch => {
        return axios.post('/api/searchBar', userData)
    }
}
