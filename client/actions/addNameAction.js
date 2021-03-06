import axios from 'axios';
import { SET_CURRENT_USER_ADD_NAME } from '../actions/types';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_ADD_NAME,
        user
    }
}

export function addNameRequest(userData) {
    return dispatch => {
        return axios.post('/api/users/addName', userData).then(res =>{
            const user = res.data.user;
            dispatch(setCurrentUser(user));
        });
    }
}