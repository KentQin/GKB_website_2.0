import {SET_FAVORITES} from '../actions/types';


const initialState = {
    favorites: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        //called by login page
        case SET_FAVORITES:
            return {
                //action object contains user
                favorites: action.data
            }

        default: return state;
    }
}
