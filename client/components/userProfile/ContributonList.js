/*
 * This component renders a list of contributions, which is formed by a list of contribution items
 * This is used by contribution component
 */
import React from 'react';
import ContributionItem from './ContributionItem';
import testImg from './../img/default-profile-picture.jpg';
import {connect} from 'react-redux';


class ContributonList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render() {


        const {array} = this.props.contributionArray;
        var items = [];

        for (var i = 0; i < array.length; i++) {
            console.log("Processing "+JSON.stringify(array[i])+'\n');
            items.push(<div key = {i}><ContributionItem location={array[i].location}
                                           img={array[i].image}
                                                        date={array[i].create_date}
                                           description={array[i].description}/>
                </div>
            );
        }

        return(
            <div className="favourite-list-block">
                {items}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contributionArray: state.contributionArray
    };
}

export default connect(mapStateToProps)(ContributonList);