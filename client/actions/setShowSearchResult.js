import { SET_SHOW_SEARCH_RESULT } from '../actions/types';

export function setSearchResultList(conf) {
    return {
        type: SET_SHOW_SEARCH_RESULT,
        data: conf
    }
}

export function setShowSearchResult(conf) {
    return dispatch => {

            dispatch(setSearchResultList(conf));

    }
}


