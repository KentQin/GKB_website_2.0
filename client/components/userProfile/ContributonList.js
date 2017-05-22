import React from 'react';
import ContributionItem from './ContributionItem';
import testImg from './../img/default-profile-picture.jpg';
import {connect} from 'react-redux';

class ContributonList extends React.Component{
    constructor(props){
        super(props);
        // console.log("IN contribution list: " + this.props.descriptions);
        this.state = {

        }
    }

    // componentWillMount(){
    //     console.log("to be mount "+this.props.descriptions);
    // }

    render() {


        const {array} = this.props.contributionArray;
        var items = [];


        // console.log("User in contribution "+JSON.stringify(descriptions[0]));
        // if (typeof(user.contribution) != 'undefined') {
            for (var i = 0; i < array.length; i++) {
                console.log("Processing "+JSON.stringify(array[i])+'\n');
                items.push(<div key = {i}><ContributionItem location={array[i].location}
                                               img={array[i].image}
                                               description={array[i].description}/>
                    </div>
                );
            }
        // }else{
        //     console.log("Empty array");
        // }

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