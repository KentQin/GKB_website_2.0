import { SET_CURRENT_USER_LOGIN } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_LOGIN,
        user: user
    }
}

export function addSearchHistory(data) {
    return dispatch => {
        return axios.post('/api/searchBar/addSearchHistory', data).then(res =>{
            console.log("back to front+++++++++++++++++");
            console.log(res.data);
            dispatch(setCurrentUser(res.data));
        });
    }
}