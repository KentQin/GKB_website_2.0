/*
 * This component renders as the notificaiton of successfully sending a reset password email
 */

import React from 'react';
import emailIcon from '../img/email-icon.png';
import { Link } from 'react-router';

class EmailSent extends React.Component{
    render(){
        return(
            <div>
                <h1 className="h-e-a-d-e-r-t-e-x-t">EMAIL SENT!</h1>
                <div >
                    <img src={emailIcon} className="logo-email"/>
                </div>
                <div className="welcome-text">
                    <p>Please follow the link in the email to reset your password.</p>
                </div>
                <div>
                    <Link to="/login" >Return to Login</Link>
                </div>
            </div>
        );
    }
}

export default EmailSent;