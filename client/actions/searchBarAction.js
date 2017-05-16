import axios from 'axios';
import lodash from 'lodash';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_SEARCH_BAR } from '../actions/types';
import { SET_CURRENT_COORDS } from '../actions/types';
import { SET_SHOW_SEARCH_RESULT } from '../actions/types';
import { SET_DESCRIPTION_ARRAY } from '../actions/types';



// pure redux function, action creator
export function setSearchResultList(conf) {
    return {
        type: SET_SHOW_SEARCH_RESULT,
        data: conf
    }
}

export function setDescriptionArray(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

// pure redux function, action creator
export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_SEARCH_BAR,
        user
    }
}

export function setCurrentUserGuest(user) {
    return {
        type: SET_CURRENT_COORDS,
        user
    }
}




export function searchBarRequest(userData) {

        //axios.post('/api/searchBar', userData);
    return dispatch => {
        return axios.post('/api/searchBar', userData)
            .then(
                (res) => {
                    /*
                     *
                     * for jena
                     *
                     * */
                },
                // if server response any error message, set it into state errors
                (err) => {

                    //
                    console.log(err.response.data);
                    const {descriptionArray} = err.response.data;
                    const {photo} = err.response.data;
                    const {user} = err.response.data;
                    const {coordinate} = err.response.data;
                    const {suggestDescription} = err.response.data;
                    let tempCoords = {  lat: coordinate.latitude,
                                    longt:coordinate.longitude
                    };
                    user.coords = tempCoords;
                    console.log("user: ", user);

                    const conf = {
                        showSearchResult: true,
                        placeFullAddr: suggestDescription,
                        placePhoto: photo
                    }
                    // call action to set ShowSearchResult
                    dispatch(setDescriptionArray(descriptionArray));
                    dispatch(setSearchResultList(conf));
                    console.log("done all dispath before")
                    if (lodash.isEmpty(user._id)) {
                        dispatch(setCurrentUserGuest(user));
                    } else {
                        dispatch(setCurrentUser(user));
                    }
                    console.log("done all dispath")
                });
    }
}
