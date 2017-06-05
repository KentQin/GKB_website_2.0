/*
 * This reducer controls goButtonResultsArray state in redux store
 */

import {SET_GO_BUTTON_RESULTS} from '../actions/types';

const initialState = {
    goButtonResultsArray: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_GO_BUTTON_RESULTS:
            return {
                goButtonResultsArray: action.data
            }

        default: return state;
    }
}
