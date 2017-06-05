import React from 'react';
import Contributions from './Contributions';
import {connect} from 'react-redux';
/*
 * This component renders the all contributions of a user
 * This is used by profile
 */

class ContributionPage extends React.Component{
    render(){
        // console.log("Contribution test page : "+this.props.contributionArray);
        return(
            <div className="container">
                <Contributions/>
            </div>

        );
    }
}


export default ContributionPage;