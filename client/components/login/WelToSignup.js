import React from 'react';
import { Link } from 'react-router';

class WelToSignup extends React.Component {
    render() {
        return (
            <div>
                <h1 className="welcome-title">Welcome</h1>
                <label>This is the place for logo</label>
                <div className="welcome-text">
                    <p>Some description</p>
                </div>
                <Link to="/signup" className="btn btn-default btn-welcome">Signup</Link>
            </div>
        );
    }
}

export default WelToSignup;