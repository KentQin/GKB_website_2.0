import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_SEARCH_RESULT_LIST } from '../actions/types';

// pure redux function, action creator
export function setSearchResultList(searchresultList) {
    return {
        type: SET_SEARCH_RESULT_LIST,
        searchresultList
    }
}

export function searchBarTestGoAction(location) {
    return dispatch => {
        return axios.get('/api/searchBar/testgo?location='+location).then(res =>{
            //const token = res.data.token;
            console.log('testgo-reply: ' ,res.data);
            dispatch(setSearchResultList(res.data));
        }, err => {
                // error callback
                console.log(err);
            // get token from server side, and store the token into session storage
            // sessionStorage.setItem('loginToken', token);
            // setAuthorizationToken(token);
            // // decode token, get user msg from it
            // console.log('decode: ',jwt.decode(token));
            // // dispatch action 'setCurrentUser' to change state
            // dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
}
