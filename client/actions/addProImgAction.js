import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_ADD_PROIMG } from '../actions/types';

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_ADD_PROIMG,
        user
    }
}

export function addProImgAction(userData) {
    return dispatch => {
        let header = {
            'content-type': 'multipart/form-data'
        };
        return axios.post('/api/addProfilePic', userData, {headers:header}).then(res =>{
            const token = res.data.token;
            //console.log('add name proimg: ' ,token);
            // get token from server side, and store the token into session storage
            sessionStorage.removeItem('loginToken');
            sessionStorage.setItem('loginToken', token);
            setAuthorizationToken(token);
            // decode token, get user msg from it
            console.log('decode add username: ',jwt.decode(token));
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}