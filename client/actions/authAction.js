import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_LOGIN } from '../actions/types';
import { SET_CURRENT_USER_LOGOUT } from '../actions/types';

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_LOGIN,
        user
    }
}

export function removeCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_LOGOUT,
        user
    }
}

export function logout() {
    return dispatch => {
        sessionStorage.removeItem('loginToken');
        setAuthorizationToken(false);
        dispatch(removeCurrentUser({}));
    }
}

export function login(userData) {
    return dispatch => {
        return axios.post('/api/users/login', userData).then(res =>{
            const token = res.data.token;
            const user = res.data.user;
            // console.log('token: ' ,token);
            // get token from server side, and store the token into session storage
            sessionStorage.setItem('loginToken', token);
            sessionStorage.setItem('loginUser', jwt.sign( user, 'secretkeyforjsonwebtoken'));
            // set token into head info
            setAuthorizationToken(token);
            // decode token, get user msg from it
            console.log('token: ',token);
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(user));
        });
    }
}