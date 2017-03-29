import React from 'react';
import NewPwdForm from './NewPwdForm';
import LinkToHome from './../common/LinkToHome';

class NewPwdPage extends React.Component{
    render(){
        return(
            <div className="container loginPage float_on_the_map">
                <LinkToHome/>
                <div className="col-md-5 col-offset-md-3 email-sent-block">
                    <NewPwdForm/>
                </div>

            </div>
        );
    }
}

export default NewPwdPage;
