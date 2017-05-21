import {SET_GO_BUTTON_RESULTS} from '../actions/types';


const initialState = {
    goButtonResultsArray: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        //called by login page
        case SET_GO_BUTTON_RESULTS:
            return {
                //action object contains user
                goButtonResultsArray: action.data
            }

        default: return state;
    }
}
