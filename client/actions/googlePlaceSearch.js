import axios from 'axios';

export function googlePlaceSearchRequest(userData) {

    //axios.post('/api/searchBar', userData);
    return dispatch => {
        return axios.post('/api/googlePlaceSearch', userData)
    }
}
