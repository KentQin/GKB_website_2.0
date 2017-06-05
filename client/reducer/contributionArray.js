/*
 * This reducer controls contributionArray state in redux store
 */


import {SET_CONTRIBUTION_ARRAY} from '../actions/types';
import {REMOVE_CONTRIBUTION} from '../actions/types';

const initialState = {
    contributionArray: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        //called by login page
        case SET_CONTRIBUTION_ARRAY:
            console.log("Contribution array reducer "+JSON.stringify(action));
            return {
                //action object contains user
                array: action.data
            }

        case REMOVE_CONTRIBUTION:
            return {
                //action object contains user
                array: action.data
            }

        default: return state;
    }
}