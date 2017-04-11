import axios from 'axios';

export function updatePswdAction(userData) {
    return dispatch => {
        console.log("Here");
        return axios.post('/api/updatePswd', userData);
    }
}
