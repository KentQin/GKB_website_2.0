import { combineReducers } from 'redux';
import login from './login';
import searchResult from './searchResult'
import descriptionArray from './descriptionArray'
import setFavorites from './setFavorites'

export default combineReducers({
    login,
    searchResult,
    descriptionArray,
    setFavorites
})
