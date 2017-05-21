import {SET_GOOGLE_RESULTS} from '../actions/types';


const initialState = {
    googleResults: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        //called by login page
        case SET_GOOGLE_RESULTS:
            return {
                //action object contains user
                googleResults: action.data
            }

        default: return state;
    }
}
