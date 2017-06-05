import { SET_FAVORITES } from '../actions/types';
import axios from 'axios';
import {SET_CURRENT_USER_LOGIN} from '../actions/types';
// pure redux function, action creator
export function setFavoriteAction(favoriteData) {
    return {
        type: SET_FAVORITES,
        data: favoriteData
    }
}

export function setCurrentUser(user){
    return {
        type:SET_CURRENT_USER_LOGIN,
        user
    }
}

export function addToFavoritesAction(favorite) {
    return dispatch => {
        return axios.post('/api/favorites', favorite).then(res =>{
            // const descriptionArray = res.data;
            // console.log("*************")
            console.log("JUst back to favorite action "+JSON.stringify(res.data.token));
            console.log("Just back to favorite action "+JSON.stringify(res.data.token.user));
            var favoriteData = {

                addr: res.data.token.addr,
                image: res.data.token.image,
                coords: res.data.token.coords
            }
            var user= res.data.token.user;
            user.autoDescription = res.data.token.autoComment
            console.log("favorite in action return: ", favorite);
            console.log("favorite user:", user)
            dispatch(setFavoriteAction(favoriteData));
            dispatch(setCurrentUser(user));
        });
    }
}
