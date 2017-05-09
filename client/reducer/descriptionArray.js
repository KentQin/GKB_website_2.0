import {SET_DESCRIPTION_ARRAY} from '../actions/types';


const initialState = {
    descriptionArray: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        //called by login page
        case SET_DESCRIPTION_ARRAY:
            return {
                //action object contains user
                array: action.data
            }

        default: return state;
    }
}
