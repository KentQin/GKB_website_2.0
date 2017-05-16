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
            const user = res.data.user;
            sessionStorage.removeItem('loginUser');
            sessionStorage.setItem('loginUser', jwt.sign( user, 'secretkeyforjsonwebtoken'));
            dispatch(setCurrentUser(user));
        });
    }
}