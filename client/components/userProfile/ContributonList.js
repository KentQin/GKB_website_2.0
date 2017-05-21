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


        const {user} = this.props.login;
        var items = [];


        // console.log("User in contribution "+JSON.stringify(descriptions[0]));
        if (typeof(user.contribution) != 'undefined') {
            for (var i = 0; i < user.contribution.length; i++) {
                console.log("Processing "+JSON.stringify(user.contribution[i])+'\n');
                items.push(<div><ContributionItem location={user.contribution[i].location}
                                               img={user.contribution[i].image}
                                               description={user.contribution[i].description}/>
                    </div>
                );
            }
        }else{
            console.log("Empty array");
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
        login: state.login
    };
}

export default connect(mapStateToProps)(ContributonList);