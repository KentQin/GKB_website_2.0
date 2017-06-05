import { SET_DESCRIPTION_ARRAY } from '../actions/types';
import axios from 'axios';

export function setSearchResultList(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

export function updateShowSearchResultLike(addLikeRequest) {
    return dispatch => {
        return axios.post('/api/searchBar/addLike', addLikeRequest).then(res =>{
            console.log("000000000000000000000",res.data);
            const descriptionArray = res.data.descriptionArray;
            console.log("000000000000000000000",descriptionArray);
            dispatch(setSearchResultList(descriptionArray));
        });

    }
}


