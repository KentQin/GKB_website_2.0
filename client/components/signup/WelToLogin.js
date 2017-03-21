import React from 'react';
import { Link } from 'react-router';

class WelToLogin extends React.Component {
    render() {
        return (
            <div>
                <h1 className="welcome-title">Welcome</h1>
                <label>This is the place for logo</label>
                <div className="welcome-text">
                    <p>Already have an account?</p>
                </div>
                <Link to="/login" className="btn btn-default btn-welcome">Login</Link>
            </div>
        );
    }
}

export default WelToLogin;