import { SET_CONTRIBUTION_ARRAY } from '../actions/types';
import axios from 'axios';
// pure redux function, action creator
export function setContributionArray(array) {
    return {
        type: SET_CONTRIBUTION_ARRAY,
        data: array
    }
}

export function updateContributionArray(user) {
    return dispatch => {
        return axios.post('/api/searchBar/updateContribution', user).then(res =>{
            console.log("Posting updated contributions "+res.data);
            const contributionArray = res.data;
            dispatch(setContributionArray(contributionArray));
        });
    }
}