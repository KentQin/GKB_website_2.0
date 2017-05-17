import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function setDescriptions(data) {
    return {
        type: 'SET_DESCRIPTION',
        data
    }
}

export function descriptionRequest(address) {
    return dispatch => {
        return axios.post('/api/description', address).then(res =>{
            const token = res.data.token;
            console.log('token: ' ,token);
            // get token from server side, and store the token into session storage
            // sessionStorage.setItem('loginToken', token);
            setAuthorizationToken(token);
            // decode token, get user msg from it
            console.log('decode: ',jwt.decode(token));
            // dispatch action 'setCurrentUser' to change state
            dispatch(setDescriptions(jwt.decode(token)));
        });
    }
}