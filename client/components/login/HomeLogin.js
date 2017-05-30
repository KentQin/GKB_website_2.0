import React from 'react';
import LoginForm from './LoginForm';
import OuterAuth from '../common/OuterAuth';
import { connect } from 'react-redux';
import { login } from '../../actions/authAction';
import { userLoginSocialRequest } from '../../actions/loginActionSocial'
import LinkToHome from './../common/LinkToHome';
import { Link } from 'react-router';
import HomeSignup from '../signup/HomeSignup';
class HomeLogin extends React.Component {
    render() {
        const { login, userLoginSocialRequest } = this.props;
        return (
            <div className="container loginPage float_on_the_map-large">
                <LinkToHome />
                <div className="row centered col-md-offset-3 col-md-6">
                    <div className="col-md-7 login-page-block login-block">
                        <Link to="/homesignup" className="link-on-home-form">Return to Signup</Link>
                        <LoginForm login={login} />

                    </div>
                    <div className="col-md-5 login-page-block auth-block">
                        <OuterAuth userLoginSocialRequest={userLoginSocialRequest} />
                    </div>
                </div>
            </div>
        )
    }
}

HomeLogin.propTypes = {
    login: React.PropTypes.func.isRequired,
    userLoginSocialRequest: React.PropTypes.func.isRequired
}

export default connect(null, { login , userLoginSocialRequest }) (HomeLogin);