import axios from 'axios';

export function userLoginRequest(userData) {
    return dispatch => {
        return axios.post('/api/users/login', userData).then(res =>{
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
        });
    }
}