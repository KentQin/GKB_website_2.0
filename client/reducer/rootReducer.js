import { combineReducers } from 'redux';
import login from './login';
import searchResult from './searchResult'
import descriptionArray from './descriptionArray'
import setFavorites from './setFavorites'
import goButtonResultsArray from './goButtonResultsArray'
import contributionArray from './contributionArray'
import setGoogleResults from './setGoogleResults'

export default combineReducers({
    login,
    searchResult,
    descriptionArray,
    setFavorites,
    goButtonResultsArray,
    contributionArray,
    setGoogleResults
})
