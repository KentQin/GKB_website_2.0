import React from 'react';
import SignupFrom from './SignupForm';
import WelToLogin from './WelToLogin';
import OuterAuth from '../common/OuterAuth';

class SignupPage extends React.Component {
    render() {
        return (
            <div className="container loginPage">
                <div className="row centered">
                    <div className="col-md-4 login-page-block">
                        <WelToLogin />
                    </div>
                    <div className="col-md-4 login-page-block">
                        <SignupFrom />
                    </div>
                    <div className="col-md-4 login-page-block">
                        <OuterAuth />
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage;