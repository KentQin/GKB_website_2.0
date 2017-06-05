/*
 * This reducer controls descriptionArray state in redux store
 */

import {SET_DESCRIPTION_ARRAY} from '../actions/types';

const initialState = {
    descriptionArray: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_DESCRIPTION_ARRAY:
            return {
                array: action.data
            }

        default: return state;
    }
}
