import React from 'react';
import { connect } from 'react-redux';
import Profile from '../userProfile/Profile'

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this);
    }

    showProfile(){
        this.setState({
            showProfile: true
        })
    }

    componentWillMount(){
        const { isAuthenticated } = this.props.login;
        if (isAuthenticated){
            this.showProfile();
        }
    }

    render() {

        return (
            <div className="container loginPage float_on_the_map">
                <h1>Home Page</h1>
                {this.state.showProfile && <Profile login = {this.props.login}/>}
            </div>
        )
    }
}


HomePage.propTypes = {
    login: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps)(HomePage);
