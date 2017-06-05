import React from 'react';
import { Link } from 'react-router';
import logo from '../img/welcome-icon.png';

/*
 * This component renders a welcome section on login page
 * It is used by homepage and map login
 */

class WelToLogin extends React.Component {
    render() {
        return (
            <div>
                <h1 className="welcome-title">Welcome</h1>
                <div >
                    <img src={logo} className="logo"/>
                </div>
                <div className="welcome-text">
                    <p>Already have an account?</p>
                </div>
                <Link to="/login" className="btn btn-default btn-welcome">Login</Link>
            </div>
        );
    }
}

export default WelToLogin;