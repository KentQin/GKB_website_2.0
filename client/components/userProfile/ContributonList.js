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
        // const entry = {
        //     location: "Carlton",
        //     img: {testImg},
        //     description: "blablabalbalabalablabalabalbalab"
        // }

        const {user} = this.props.login;
        var items = [];
        var {descriptions} = this.props.login.user;

        console.log("User in contribution "+JSON.stringify(descriptions[0]));
        if (typeof(descriptions) != 'undefined') {
            for (var i = 0; i < descriptions.length; i++) {
                console.log("Processing "+i);
                items.push(<div><ContributionItem location={descriptions[i].location}
                                               img={testImg}
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

export default connect(mapStateToProps,null)(ContributonList);