import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
        this.logout = this.logout.bind(this);
    }

    logout(e){
        e.preventDefault();
        //console.log(this.props);
        this.props.logout();
    }

    render(){

        const { isAuthenticated } = this.props.login;

        const userNav =(
            <ul className="nav nav-pills">
                <li role="presentation">
                    <a href="#" onClick={this.logout}>Logout</a>
                </li>
            </ul>
        );

        const guestNav =(
            <ul className="nav nav-pills">
                <li role="presentation">
                    <Link to="/signup" className="btn btn-default btn-welcome">Signup</Link>
                </li>
                <li role="presentation">
                    <Link to="/login" className="btn btn-default btn-welcome">Login</Link>
                </li>
            </ul>
        );


        return(
            <div>{ isAuthenticated ? userNav : guestNav}</div>


        );
    }
}

NavBar.propTypes = {
    login: React.PropTypes.object.isRequired,
    logout: React.PropTypes.func.isRequired
}

export default NavBar;