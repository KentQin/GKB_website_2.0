import React from 'react';
import LoginForm from './LoginForm';
import WelToSignup from './WelToSignup';
import OuterAuth from '../common/OuterAuth';
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';
import { userLoginSocialRequest } from '../../actions/loginActionSocial'
import LinkToHome from './../common/LinkToHome';

class LoginPage extends React.Component {
    render() {
        const { login, userLoginSocialRequest } = this.props;
        return (
            <div className="container loginPage float_on_the_map">
                <LinkToHome />
                <div className="row centered">
                    <div className="col-md-3 login-page-block welcome-block">
                        <WelToSignup />
                    </div>
                    <div className="col-md-5 login-page-block login-block">
                        <LoginForm login={login} />
                    </div>
                    <div className="col-md-4 login-page-block auth-block">
                        <OuterAuth userLoginSocialRequest={userLoginSocialRequest} />
                    </div>
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    login: React.PropTypes.func.isRequired,
    userLoginSocialRequest: React.PropTypes.func.isRequired
}

export default connect(null, { login , userLoginSocialRequest }) (LoginPage);
