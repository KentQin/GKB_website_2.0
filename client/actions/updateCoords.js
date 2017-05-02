import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_COORDS } from '../actions/types';
import { SET_CURRENT_USER_LOGIN } from '../actions/types';

// pure redux function, action creator
export function setCurrentUserGuest(user) {
    return {
        type: SET_CURRENT_COORDS,
        user
    }
}

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER_LOGIN,
        user
    }
}

export function updateCoordsRequest(userData) {
    console.log("inside updateCoordsRequest, ", userData);
    if (userData.id == null) {
      return dispatch => {
              // sessionStorage.removeItem('loginToken');
              // sessionStorage.setItem('loginToken', userData);
              // setAuthorizationToken(userData);
              return dispatch(setCurrentUserGuest(userData));
      }
    } else {
      return dispatch => {
              // sessionStorage.removeItem('loginToken');
              // sessionStorage.setItem('loginToken', userData);
              // setAuthorizationToken(userData);
              return dispatch(setCurrentUser(userData));
      }
  }
}
