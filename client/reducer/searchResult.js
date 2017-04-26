import {SET_SEARCH_RESULT_LIST} from '../actions/types';
//import lodash from 'lodash';

const initialState = {
    searchResultList: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        //called by login page
        case SET_SEARCH_RESULT_LIST:
            return {
                //action object contains user
                searchResultList: action.searchresultList
            }

        default: return state;
    }
}
