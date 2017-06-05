import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER_LOGIN } from '../actions/types';
import { SET_CURRENT_USER_LOGOUT } from '../actions/types';
import { UNSET_SHOW_SEARCH_RESULT } from '../actions/types';
import { SET_CONTRIBUTION_ARRAY } from '../actions/types';
import { REMOVE_CONTRIBUTION } from '../actions/types';


export function setContributionArray(array){
    console.log("Storing contribution array");
    return {
        type: SET_CONTRIBUTION_ARRAY,
        data: array
    }
}

export function setCurrentUser(user) {
    console.log("DOING FIRST STEP HERE");
    return {
        type: SET_CURRENT_USER_LOGIN,
        user
    }
}


export function removeCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_LOGOUT,
        user
    }
}

export function removeSearchResultList(conf) {
    return {
        type: UNSET_SHOW_SEARCH_RESULT,
        data: conf
    }
}

export function removeContributionArray(conf){
    return {
        type: REMOVE_CONTRIBUTION,
        data: conf
    }
}

export function logout() {
    return dispatch => {
        sessionStorage.removeItem('loginToken');
        sessionStorage.removeItem('contributions');
        //sessionStorage.removeItem('loginToken');
        sessionStorage.clear();
        setAuthorizationToken(false);
        dispatch(removeCurrentUser({}));
        dispatch(removeSearchResultList({}));
        dispatch(removeContributionArray({}));
    }
}

export function login(userData) {
    return dispatch => {
        return axios.post('/api/users/login', userData).then(res =>{
            const token = res.data.token;
            const user = res.data.user;
            const contributionArray = res.data.contributionArray;

            const contributions = {data :contributionArray};
            // get token from server side, and store the token into session storage
            sessionStorage.setItem('loginToken', token);
            sessionStorage.setItem('loginUser', jwt.sign( user, 'secretkeyforjsonwebtoken'));
            sessionStorage.setItem('contributions', jwt.sign(contributions, 'secretkeyforjsonwebtoken'));
            // set token into head info
            setAuthorizationToken(token);
            // decode token, get user msg from it
            // dispatch action 'setCurrentUser' to change state
            dispatch(setCurrentUser(user));
            dispatch(setContributionArray(contributionArray));
        });
    }
}
