import { SET_CURRENT_USER_LOGIN } from '../actions/types';
import { SET_CURRENT_USER_SIGNUP } from '../actions/types';
import { SET_CURRENT_USER_LOGOUT } from '../actions/types';
import { SET_CURRENT_USER_ADD_NAME } from '../actions/types';
import {SET_CURRENT_USER_SEARCH_BAR} from '../actions/types';
<<<<<<< HEAD
import {SET_CURRENT_COORDS} from '../actions/types';
=======
import {SET_CURRENT_USER_ADD_PROIMG} from '../actions/types';
>>>>>>> adabfa6efc3f44dd60813177f493349d76e25ef8
import lodash from 'lodash';

const initialState = {
    //justSignup: false,
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {

        //called by login page
        case SET_CURRENT_USER_LOGIN:
            return {
                //action object contains user
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }

        // called by signup page
        case SET_CURRENT_USER_SIGNUP:
            return {
                //action object contains user
                //justSignup: true,
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }

        // called by welcome page
        case SET_CURRENT_USER_LOGOUT:
            return {
                //action object contains user
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }

        // called by welcome page
        case SET_CURRENT_USER_ADD_NAME:
            //console.log('reducer:',action.user);
            return {
                //action object contains user
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }

        // called by profile page/dropzone
        case SET_CURRENT_USER_ADD_PROIMG:
            //console.log('reducer:',action.user);
            return {
                //action object contains user
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }
            

        case SET_CURRENT_USER_SEARCH_BAR:
            return {
                //action object contains user
                isAuthenticated: !lodash.isEmpty(action.user),
                user: action.user
            }

        case SET_CURRENT_COORDS:
            return {
                isAuthenticated: false,
                user: action.user
            }

        default: return state;
    }
}
