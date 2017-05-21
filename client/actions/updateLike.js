import { SET_DESCRIPTION_ARRAY } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
export function setSearchResultList(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

export function updateLike(addLikeRequest) {

    console.log("updateLike is called", addLikeRequest);

    axios.post('/api/searchBar/addLike', addLikeRequest).then(res =>{
        console.log("response from back:", res.data);
    });
    // return dispatch => {
    //     return axios.post('/api/searchBar/addDescription', description).then(res =>{
    //         const descriptionArray = res.data;
    //         // console.log("*************")
    //         // console.log(res.data)
    //         dispatch(setSearchResultList(descriptionArray));
    //     });
    //
    //     // dispatch(updateSearchResultList(conf));
    //
    // }
}
