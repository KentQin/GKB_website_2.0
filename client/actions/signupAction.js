import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_SIGNUP } from '../actions/types';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_SIGNUP,
        user
    }
}

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('/api/users/signup', userData).then(res =>{
            const token = res.data.token;
            const user = res.data.user;
            sessionStorage.setItem('loginToken', token);
            sessionStorage.setItem('loginUser', jwt.sign( user, 'secretkeyforjsonwebtoken'));
            setAuthorizationToken(token);
            dispatch(setCurrentUser(user));
        });
    }
}