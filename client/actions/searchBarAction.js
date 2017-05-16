import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_SEARCH_BAR } from '../actions/types';
import { SET_CURRENT_COORDS } from '../actions/types';
import { SET_SHOW_SEARCH_RESULT } from '../actions/types';

// pure redux function, action creator
export function setSearchResultList(conf) {
    return {
        type: SET_SHOW_SEARCH_RESULT,
        data: conf
    }
}

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_SEARCH_BAR,
        user
    }
}

export function setCurrentUserGuest(user) {
    return {
        type: SET_CURRENT_COORDS,
        user
    }
}


export function searchBarRequest(userData) {
        axios.post('/api/searchBar', userData);
}
