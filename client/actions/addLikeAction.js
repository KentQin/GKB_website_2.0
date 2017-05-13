import { SET_DESCRIPTION_ARRAY } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
export function setSearchResultList(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

export function addLikeRequest(id) {
    return dispatch => {
        // console.log("*****************************")
        // console.log(id)
        const data = {id: id}
        return axios.post('/api/searchBar/addLike', data).then(res =>{
            const description = res.data;
            // console.log("*************")
            // console.log(description)
        //     dispatch(setSearchResultList(descriptionArray));
        });

    }
}