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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.
                    </p>
                    <br/>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <Link to="/signup" className="btn btn-default btn-welcome">Signup</Link>
            </div>
        );
    }
}

export default WelToSignup;