import React from 'react';
import LoginForm from './LoginForm';
import WelToSignup from './WelToSignup';
import OuterAuth from '../common/OuterAuth';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginAction';
import { userLoginSocialRequest } from '../../actions/loginActionSocial'

class LoginPage extends React.Component {
    render() {
        const { userLoginRequest, userLoginSocialRequest } = this.props;
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
                        <OuterAuth userLoginSocialRequest={userLoginSocialRequest} />
                    </div>
                </div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired,
    userLoginSocialRequest: React.PropTypes.func.isRequired
}

export default connect( (state)=>{ return{}}, { userLoginRequest, userLoginSocialRequest }) (LoginPage);
