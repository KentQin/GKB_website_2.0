import React from 'react';
import EmailSent from './EmailSent';

class EmailSentPage extends React.Component{
    render(){
        return(
            <div className="container loginPage float_on_the_map">
                <div className="row centered ">
                    <div className="col-md-6 col-md-offset-4 login-page-block email-sent-block">
                        <EmailSent/>
                    </div>
            </div>
            </div>
        );
    }
}

export  default EmailSentPage;
