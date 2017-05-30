import React from 'react';
import lockIcon from '../img/lock-symbol.png';

class ForgotPwd extends React.Component{
    render(){
        return(
            <div>
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