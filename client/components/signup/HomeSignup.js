import React from 'react';
import SignUpForm from './SignupForm';
import OuterAuth from '../common/OuterAuth';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction';
import { userLoginSocialRequest } from '../../actions/loginActionSocial'
import LinkToHome from './../common/LinkToHome';

/*
 * This component renders the login window
 * It is used on top of map when a guest user commits an action
 */

class HomeSignup extends React.Component {
    render() {

        // 1. import action creator, { userSignupRequest }, from outside, and it will be added to this.props by connect
        // in other words, { userSignupRequest } comes from connect

        // 2. Here, take { userSignupRequest } from props, and it will be passed to <SignupFrom />
        const { userSignupRequest, userLoginSocialRequest } = this.props;
        console.log("Singup Page say: ", this.props );
        console.log("Singup Page send: ",{ userSignupRequest }," to Signup From");

        return (
            <div className="container loginPage float_on_the_map-large">
                <LinkToHome/>
                <div className="row centered col-md-offset-3 col-md-6">

                    <div className="col-md-7 login-page-block login-block">
                        <Link to="/homelogin" className="link-on-home-form">Return to Login</Link>
                        <SignUpForm userSignupRequest={userSignupRequest}/>

                    </div>
                    <div className="col-md-5 login-page-block login-block">
                        <OuterAuth userLoginSocialRequest={userLoginSocialRequest}/>
                    </div>
                </div>
            </div>
        )
    }
}

HomeSignup.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    userLoginSocialRequest: React.PropTypes.func.isRequired
}

export default connect( null, { userSignupRequest,  userLoginSocialRequest}) (HomeSignup);