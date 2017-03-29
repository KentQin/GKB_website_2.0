import React from 'react';
import { connect } from 'react-redux';
import Profile from '../userProfile/Profile';
import NavBar from './NavBar';
import { logout } from '../../actions/authAction'

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
    }

    showProfile(){
        this.setState({
            showProfile: true
        })
    }

    hideProfile(){
        this.setState({
            showProfile: false
        })
    }

    componentWillMount(){
        const { isAuthenticated } = this.props.login;
        console.log('isAuthenticated: ',isAuthenticated);
        if (isAuthenticated){
            this.showProfile();
        }
    }

    render() {
        console.log("navbar state:", this.state);
        return (
            <div className="container loginPage float_on_the_map">
                <h1>Home Page</h1>
                <NavBar login = {this.props.login} logout={ this.props.logout} hideProfile={this.hideProfile}/>
                {this.state.showProfile && <Profile login = {this.props.login} />}

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

export default connect(mapStateToProps, { logout })(HomePage);
