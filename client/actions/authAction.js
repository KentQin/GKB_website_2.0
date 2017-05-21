import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_LOGIN } from '../actions/types';
import { SET_CURRENT_USER_LOGOUT } from '../actions/types';
import { UNSET_SHOW_SEARCH_RESULT } from '../actions/types';
import {SET_CONTRIBUTION_ARRAY} from '../actions/types';

// pure redux function, action creator
export function setCurrentUser(user) {
    console.log("DOING FIRST STEP HERE");
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

export function removeSearchResultList(conf) {
    return {
        type: UNSET_SHOW_SEARCH_RESULT,
        data: conf
    }
}

export function logout() {
    return dispatch => {
        sessionStorage.removeItem('loginToken');
        setAuthorizationToken(false);
        dispatch(removeCurrentUser({}));
        dispatch(removeSearchResultList({}));
    }
}

export function login(userData) {
    return dispatch => {
        return axios.post('/api/users/login', userData).then(res =>{
            const token = res.data.token;
            const user = res.data.user;
            // const contributionArray = res.data.contributionArray;

            // console.log('token: ' ,token);
            // get token from server side, and store the token into session storage
            sessionStorage.setItem('loginToken', token);
            sessionStorage.setItem('loginUser', jwt.sign( user, 'secretkeyforjsonwebtoken'));
            // set token into head info
            setAuthorizationToken(token);
            // decode token, get user msg from it
            // console.log("auth action array "+contributionArray.length);
            console.log('token: ',token);
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(user));
        });
    }
}
