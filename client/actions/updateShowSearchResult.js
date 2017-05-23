import { SET_DESCRIPTION_ARRAY } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
import { SET_CONTRIBUTION_ARRAY } from '../actions/types';
// pure redux function, action creator
export function setContributionArray(array) {
    console.log("Just before setting the array "+array);
    return {
        type: SET_CONTRIBUTION_ARRAY,
        data: array
    }
}
export function setSearchResultList(array) {
    return {
        type: SET_DESCRIPTION_ARRAY,
        data: array
    }
}

export function updateShowSearchResult(description) {
    return dispatch => {
        return axios.post('/api/searchBar/addDescription', description).then(res =>{
            console.log("both in "+JSON.stringify(res));
            const descriptionArray = res.data.descriptionArray;
            const contributionArray = res.data.contributionArray;
            // console.log("*************")
            // console.log(res.data)
            dispatch(setSearchResultList(descriptionArray));
            dispatch(setContributionArray(contributionArray));
        });

        // dispatch(updateSearchResultList(conf));

    }
}


