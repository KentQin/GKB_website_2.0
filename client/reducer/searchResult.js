/*
 * This reducer controls searchResult state in redux store
 */

import {SET_SHOW_SEARCH_RESULT} from '../actions/types';
import {UNSET_SHOW_SEARCH_RESULT} from '../actions/types'


const initialState = {
    searchResultList: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_SHOW_SEARCH_RESULT:
            return {
                searchResultPageConfig: action.data
            }

        case UNSET_SHOW_SEARCH_RESULT:
            return {
                searchResultPageConfig: action.data
            }

    default: return state;
    }
}
