import React from 'react';
import { connect } from 'react-redux';
import Profile from '../userProfile/Profile';
import NavBar from './NavBar';
import { logout } from '../../actions/authAction';
import SearchBar from './SearchBar';

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
        if (isAuthenticated){
            this.showProfile();
        }
    }

    render() {

        return (
            <div className="container loginPage float_on_the_map">
                <NavBar login = {this.props.login} logout={ this.props.logout} hideProfile={this.hideProfile} />
                {this.state.showProfile && <Profile login = {this.props.login} />}
                <SearchBar/>

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