import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_SEARCH_BAR } from '../actions/types';
import { SET_CURRENT_COORDS } from '../actions/types';
import { SET_SHOW_SEARCH_RESULT } from '../actions/types';

// pure redux function, action creator
export function setSearchResultList(conf) {
    return {
        type: SET_SHOW_SEARCH_RESULT,
        data: conf
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


// const conf = {
//     showSearchResult: true,
//     placeFullAddr:userData.fulladdr,
//     placePhoto: ""
// }
// console.log("conf conf: ", conf)
// this.props.setShowSearchResult(conf);
//
// //if (descriptionArray) {
// this.props.setDescriptionArray(descriptionArray);

export function searchBarRequest(userData) {
    return dispatch => {
        console.log("in searchBarRequest action function, ", userData)
        return axios.post('/api/searchBar', userData)
            // console.log("POSTING SEARCH RESULT  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            // console.log(userData);
            // .then(res =>{
            // const token = res.data.token;
            // console.log('token: ' ,token);
            // // get token from server side, and store the token into session storage
            // sessionStorage.removeItem('loginToken');
            // sessionStorage.setItem('loginToken', token);
            // setAuthorizationToken(token);
            // // decode token, get user msg from it
            // console.log('decode: ',jwt.decode(token));
            // if (jwt.decode(token).id == null) {
            //   dispatch(setCurrentUserGuest(jwt.decode(token)));
            // } else {
            // // dispatch action 'setCurrentUser' to change state
            //   dispatch(setCurrentUser(jwt.decode(token)));
            // }
            //  //dispatch(setCurrentUser(jwt.decode(token)));
            //  });
            .then(res =>{
                const token = res.data.token;
                console.log('token: ' ,token);
                // get token from server side, and store the token into session storage
                sessionStorage.removeItem('loginToken');
                sessionStorage.setItem('loginToken', token);
                setAuthorizationToken(token);
                // decode token, get user msg from it
                console.log('decode: ',jwt.decode(token));
                if (jwt.decode(token).id == null) {
                  dispatch(setCurrentUserGuest(jwt.decode(token)));

                } else {
                // dispatch action 'setCurrentUser' to change state
                  dispatch(setCurrentUser(jwt.decode(token)));
                  // set show result component
                  const conf = {
                      showSearchResult: true,
                      placeFullAddr:userData.fulladdr,
                      placePhoto: "",
                      type: "jena"
                  }
                  console.log("conf conf: ", conf)
                  dispatch(setSearchResultList(conf));
                }
             //dispatch(setCurrentUser(jwt.decode(token)));
             });
    }
}
