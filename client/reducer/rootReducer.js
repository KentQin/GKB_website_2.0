import { combineReducers } from 'redux';
import login from './login';
import searchResult from './searchResult'

export default combineReducers({
    login,
    searchResult
})