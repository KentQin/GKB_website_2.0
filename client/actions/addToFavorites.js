import { SET_FAVORITES } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
export function setFavoriteAction(favoriteData) {
    return {
        type: SET_FAVORITES,
        data: favoriteData
    }
}

export function addToFavoritesAction(favorite) {
    return dispatch => {
        return axios.post('/api/favorites', favorite).then(res =>{
            // const descriptionArray = res.data;
            // console.log("*************")
            // console.log(res.data)
            var favoriteData = res.data
            console.log("favoriteData: ", favoriteData)
            dispatch(setFavoriteAction(favoriteData));
        });

        // dispatch(updateSearchResultList(conf));

    }
}
