import axios from 'axios';

export function userLoginSocialRequest(userData) {
    return dispatch => {
        return axios.post('/api/users/loginSocial', userData);
    }
}
