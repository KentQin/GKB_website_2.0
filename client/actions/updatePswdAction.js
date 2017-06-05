import axios from 'axios';

export function updatePswdAction(userData) {
    return dispatch => {
        return axios.post('/api/updatePswd', userData);
    }
}
