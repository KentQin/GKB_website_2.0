import React from 'react';
import '../../../public/css/style.css';
import LoginForm from './loginForm';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="row loginPage">
                <div className="col-md-2">
                    <p>wel to singup</p>
                </div>
                <div className="col-md-2">
                    <p>login page</p>
                </div>
                <div className="col-md-2">
                    <p>other auth</p>
                </div>
            </div>
        )
    }
}