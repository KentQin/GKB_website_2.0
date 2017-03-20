import React from 'react';
import { Link } from 'react-router';

class WelToLogin extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <label>This is the place for logo</label>
                <div>
                    <p>Already have an account?</p>
                </div>
                <Link to="/login" className="btn btn-default">Login</Link>
            </div>
        );
    }
}

export default WelToLogin;