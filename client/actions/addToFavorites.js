import { SET_FAVORITES } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
export function setFavoriteAction(array) {
    return {
        type: SET_FAVORITES,
        data: array
    }
}

export function addToFavoritesAction(description) {
    return dispatch => {
        return axios.post('/api/favorites', description).then(res =>{
            const descriptionArray = res.data;
            // console.log("*************")
            // console.log(res.data)
            dispatch(setFavoriteAction(descriptionArray));
        });

        // dispatch(updateSearchResultList(conf));

    }
}
