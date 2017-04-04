import axios from 'axios';

export function changePswdRequest(userData) {
    return dispatch => {
        return axios.post('/api/changePswd'+userData.email, userData);
    }
}
