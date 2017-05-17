import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_ADD_PROFILE_PIC } from '../actions/types';

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_ADD_PROFILE_PIC,
        user
    }
}

export function userProfilePicUploadRequest(userData) {
    console.log("in action user upload: ", userData);
    return dispatch => {
        return axios.post('/api/users/addProfilePic', userData).then(res =>{
            const token = res.data.token;
            console.log('token: ' ,token);
            // get token from server side, and store the token into session storage
            // decode token, get user msg from it
            console.log('decode: ',jwt.decode(token));
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}
