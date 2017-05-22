import {SET_CONTRIBUTION_ARRAY} from '../actions/types';

const initialState = {
    contributionArray: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        //called by login page
        case SET_CONTRIBUTION_ARRAY:
            console.log("Contribution array reducer "+action);
            return {
                //action object contains user
                array: action.data
            }

        default: return state;
    }
}