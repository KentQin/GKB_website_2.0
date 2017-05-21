import React from 'react';
import ContributionItem from './ContributionItem';
import testImg from './../img/default-profile-picture.jpg';
import {connect} from 'react-redux';

class ContributonList extends React.Component{
    constructor(props){
        super(props);
        console.log("IN contribution list: " + this.props.descriptions);
        this.state = {

        }
    }

    componentWillMount(){
        console.log("to be mount "+this.props.descriptions);
    }

    render() {


        console.log(this.props.descriptions);
        const {user} = this.props.login;
        var items = [];
        var {descriptions} = this.props.login.user;

        // console.log("User in contribution "+JSON.stringify(descriptions[0]));
        if (typeof(this.props.descriptions) != 'undefined') {
            for (var i = 0; i < descriptions.length; i++) {
                console.log("Processing "+JSON.stringify(descriptions[i])+'\n');
                items.push(<div><ContributionItem location={descriptions[i].location}
                                               img={descriptions[i].image}
                                               description={descriptions[i].description}/>
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