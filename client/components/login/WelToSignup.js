import React from 'react';
import { Link } from 'react-router';

class WelToSignup extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <label>This is the place for logo</label>
                <div>
                    <p>Some description</p>
                </div>
                <Link to="/signup" className="btn btn-default">Signup</Link>
            </div>
        );
    }
}

export default WelToSignup;