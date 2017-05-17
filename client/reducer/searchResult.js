import {SET_SHOW_SEARCH_RESULT} from '../actions/types';
import {UNSET_SHOW_SEARCH_RESULT} from '../actions/types'


            const initialState = {
                searchResultList: {}
            };

        export default (state = initialState, action) => {

        switch (action.type) {

            //called by login page
            case SET_SHOW_SEARCH_RESULT:
                return {
                    //action object contains user
                    searchResultPageConfig: action.data
                }

            case UNSET_SHOW_SEARCH_RESULT:
                return {
                    //action object contains user
                    searchResultPageConfig: action.data
                }

        default: return state;
    }
}
