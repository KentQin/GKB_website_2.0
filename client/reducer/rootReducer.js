import { combineReducers } from 'redux';
import login from './login';
import searchResult from './searchResult'
import descriptionArray from './descriptionArray'

export default combineReducers({
    login,
    searchResult,
    descriptionArray

})
