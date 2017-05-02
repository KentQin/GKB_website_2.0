import { SET_SHOW_SEARCH_RESULT } from '../actions/types';

// pure redux function, action creator
export function setShow() {
    return {
        type: SET_SHOW_SEARCH_RESULT,
        setConf
    }
}

export function setShowSearchResult(userData) {
    console.log("inside updateCoordsRequest, ", setConf);
    if (userData.id == null) {
        return dispatch => {
            // sessionStorage.removeItem('loginToken');
            // sessionStorage.setItem('loginToken', userData);
            // setAuthorizationToken(userData);
            return dispatch(setShow(setConf));
        }
    } else {
        return dispatch => {
            // sessionStorage.removeItem('loginToken');
            // sessionStorage.setItem('loginToken', userData);
            // setAuthorizationToken(userData);
            return dispatch(setShow(setConf));
        }
    }
}
