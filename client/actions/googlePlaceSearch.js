import axios from 'axios';
import lodash from 'lodash';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export function googlePlaceSearchRequest(userData) {

    //axios.post('/api/searchBar', userData);
    return dispatch => {
        return axios.post('/api/googlePlaceSearch', userData)
    }
}
