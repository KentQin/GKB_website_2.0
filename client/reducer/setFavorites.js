/*
 * This reducer controls setFavorites state in redux store
 */

import {SET_FAVORITES} from '../actions/types';

const initialState = {
    favorites: {}
};

export default (state = initialState, action) => {

    switch (action.type) {

        case SET_FAVORITES:
            return {
                favorites: action.data
            }

        default: return state;
    }
}
