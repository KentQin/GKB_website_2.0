import React from 'react';
import { Link } from 'react-router';
import logo from '../img/welcome-icon.png';

class WelToSignup extends React.Component {
    render() {
        return (
            <div>
                <h1 className="welcome-title">Welcome</h1>
                <div >
                    <img src={logo} className="logo"/>
                </div>
                <div className="welcome-text">
                    <p>Some description</p>
                </div>
                <Link to="/signup" className="btn btn-default btn-welcome">Signup</Link>
            </div>
        );
    }
}

export default WelToSignup;