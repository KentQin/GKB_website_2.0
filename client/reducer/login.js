import { SET_CURRENT_USER_LOGIN } from '../actions/types';
import { SET_CURRENT_USER_SIGNUP } from '../actions/types';
import lodash from 'lodash';

const initialState = {
    justSignup: false,
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER_LOGIN:
            return {
                //action object contains user
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }
        case SET_CURRENT_USER_SIGNUP:
            return {
                //action object contains user
                justSignup: true,
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }
        default: return state;
    }
}