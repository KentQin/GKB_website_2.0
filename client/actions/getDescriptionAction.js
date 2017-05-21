import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function updateUser(user) {
    console.log("updating "+ user);
    return {
        type: 'SET_CURRENT_USER_LOGIN',
        user
    }
}

export function descriptionRequest(userData) {
    return dispatch => {
        return axios.post('/api/description', userData).then(res =>{
            console.log("Here in description action "+JSON.stringify(res.data));

            // const token = res.data.token;
            // console.log('token: ' ,token);
            // get token from server side, and store the token into session storage
            // sessionStorage.setItem('loginToken', token);
            // setAuthorizationToken(token);
            // decode token, get user msg from it
            // console.log('decode: ',jwt.decode(token));
            // dispatch action 'setCurrentUser' to change state
            dispatch(updateUser(res.data));
        });
    }
}