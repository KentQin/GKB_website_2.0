import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER_SIGNUP } from '../actions/types';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_SIGNUP,
        user
    }
}

export function userLoginSocialRequest(userData) {
    return dispatch => {
        return axios.post('/api/users/loginSocial', userData).then(res =>{
            const token = res.data.token;
            const user = res.data.user;
            // get token from server side, and store the token into session storage
            sessionStorage.setItem('loginToken', token);
            setAuthorizationToken(token);
            // decode token, get user msg from it
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(user));
        });
    }
}
