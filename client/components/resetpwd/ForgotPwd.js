import React from 'react';
import lockIcon from '../img/lock-icon.png';

class ForgotPwd extends React.Component{
    render(){
        return(
            <div>
                <h1 className="welcome-title">FORGOT PASSWORD?</h1>
                <div >
                    <img src={lockIcon} className="logo"/>
                </div>
                <div className="welcome-text">
                    <p>Enter your email address and we'll send you a link to reset your password</p>
                </div>
            </div>
        );
    }

}

export default ForgotPwd;