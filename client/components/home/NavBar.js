import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){

        const { isAuthenticated } = this.props.login;

        const guestNav =(
            <ul className="nav nav-pills btn-on-map">
                <li role="presentation">
                    <Link to="/signup" className="btn btn-default btn-nav">Signup</Link>
                </li>
                <li role="presentation">
                    <Link to="/login" className="btn btn-default btn-nav">Login</Link>
                </li>
            </ul>
        );


        return(
            <div className ="no-click-through">{ !isAuthenticated && guestNav}</div>
        );
    }
}

NavBar.propTypes = {
    login: React.PropTypes.object.isRequired
}

export default NavBar;