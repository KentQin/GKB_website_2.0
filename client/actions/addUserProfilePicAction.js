import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_ADD_PROFILE_PIC } from '../actions/types';

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
            console.log('decode: ',jwt.decode(token));
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}
