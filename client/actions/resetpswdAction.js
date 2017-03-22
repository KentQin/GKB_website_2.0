import axios from 'axios';

export function resetpwdRequest(userData) {
    return dispatch => {
        return axios.post('/api/resetpwd', userData);
    }
}
