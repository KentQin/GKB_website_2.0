/*
 * This reducer controls setGoogleResults state in redux store
 */

import {SET_GOOGLE_RESULTS} from '../actions/types';

const initialState = {
    googleResults: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_GOOGLE_RESULTS:
            return {
                googleResults: action.data
            }

        default: return state;
    }
}
