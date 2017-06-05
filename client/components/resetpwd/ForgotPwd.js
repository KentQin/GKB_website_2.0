import React from 'react';
import lockIcon from '../img/lock-symbol.png';

/*
 * This component renders when a user requests to reset password
 */

class ForgotPwd extends React.Component{
    render(){
        return(
            <div className="reset-pwd-page-block-left">
                <h1 className="welcome-title">FORGOT PASSWORD?</h1>
                <br/>
                <div >
                    <img src={lockIcon} className="logo-small"/>
                </div>
                <br/>
                <br/>
                <div className="welcome-text-pwd">
                    <p>Enter your email address and we'll send you a link to reset your password</p>
                </div>
            </div>
        );
    }

}

export default ForgotPwd;