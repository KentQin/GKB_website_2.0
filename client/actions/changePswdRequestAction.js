import axios from 'axios';

export function changePswdRequest(userData) {
    return dispatch => {
<<<<<<< HEAD
<<<<<<< HEAD
        return axios.post('/api/changePswd'+userData.email, userData);
=======
        return axios.post('/api/changePswd/'+userData.email, userData);
>>>>>>> 77748fcb72c9d579b6ce9d8f97dece457a86020e
=======
        return axios.post('/api/changePswd/'+userData.email, userData);
>>>>>>> 92716ca8024f7ccddf2b374373256a2e4fd52bc9
    }
}
