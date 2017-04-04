import React from 'react';
import { connect } from 'react-redux';
import Profile from '../userProfile/Profile';
import NavBar from './NavBar';
import { logout } from '../../actions/authAction';
import SearchBar from './SearchBar';
import { searchBarRequest } from '../../actions/searchBarAction';

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

    // componentWillMount(){
    //     const { isAuthenticated } = this.props.login;
    //     if (isAuthenticated){
    //         this.showProfile();
    //     }
    // }
    //
    // componentWillReceiveProps(){
    //     const { isAuthenticated } = this.props.login;
    //     if (isAuthenticated){
    //         this.showProfile();
    //     }
    // }

    render() {

        const { isAuthenticated } = this.props.login;

        return (
            <div className="container loginPage float_on_the_map">
                <NavBar login = {this.props.login} logout={ this.props.logout} hideProfile={this.hideProfile} /
                {isAuthenticated && <Profile login = {this.props.login} />}
                <SearchBar searchBarRequest={this.props.searchBarRequest}/>

            </div>
        )
    }
}


HomePage.propTypes = {
    login: React.PropTypes.object.isRequired,
    searchBarRequest: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

<<<<<<< HEAD
export default connect(mapStateToProps, { logout, searchBarRequest })(HomePage);
=======
export default connect(mapStateToProps, { logout })(HomePage);
>>>>>>> 27d7f8399a7059720e24bb23dde76d2b80844e97
