import React from 'react';
import EmailSent from './EmailSent';
import LinkToHome from './../common/LinkToHome';

class EmailSentPage extends React.Component{
    render(){
        return(
            <div>
                <LinkToHome/>
                <div className="row centered">
                    <div className="col-md-6 col-md-offset-4 email-sent-block">
                        <EmailSent/>
                    </div>
            </div>
            </div>
        );
    }
}

export  default EmailSentPage;
