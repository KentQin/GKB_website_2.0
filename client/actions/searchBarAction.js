import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_SEARCH_BAR } from '../actions/types';

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_SEARCH_BAR,
        user
    }
}

export function searchBarRequest(userData) {
    return dispatch => {
        return axios.post('/api/searchBar', userData).then(res =>{
            const token = res.data.token;
            console.log('token: ' ,token);
            // get token from server side, and store the token into session storage
            sessionStorage.removeItem('loginToken');
            sessionStorage.setItem('loginToken', token);
            setAuthorizationToken(token);
            // decode token, get user msg from it
            console.log('decode: ',jwt.decode(token));
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}
