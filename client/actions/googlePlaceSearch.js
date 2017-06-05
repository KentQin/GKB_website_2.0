import axios from 'axios';

export function googlePlaceSearchRequest(userData) {

    return dispatch => {
        return axios.post('/api/googlePlaceSearch', userData)
    }
}
