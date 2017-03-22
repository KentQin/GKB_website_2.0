import React from 'react';
import LoginForm from './LoginForm';
import WelToSignup from './WelToSignup';
import OuterAuth from '../common/OuterAuth';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginAction';

class LoginPage extends React.Component {
    render() {
        const { userLoginRequest } = this.props;
        return (
            <div className="container loginPage">
                <div className="row centered">
                    <div className="col-md-3 login-page-block welcome-block">
                        <WelToSignup />
                    </div>
                    <div className="col-md-5 login-page-block login-block">
                        <LoginForm userLoginRequest={userLoginRequest} />
                    </div>
                    <div className="col-md-4 login-page-block auth-block">
                        <OuterAuth />
                    </div>
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}

export default connect( (state)=>{ return{}}, { userLoginRequest }) (LoginPage);