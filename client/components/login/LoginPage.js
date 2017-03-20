import React from 'react';
import LoginForm from './LoginForm';
import WelToSignup from './WelToSignup';
import OuterAuth from '../common/OuterAuth';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container loginPage">
                <div className="row centered">
                    <div className="col-md-4 login-page-block">
                        <WelToSignup />
                    </div>
                    <div className="col-md-4 login-page-block">
                        <LoginForm />
                    </div>
                    <div className="col-md-4 login-page-block">
                        <OuterAuth />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;