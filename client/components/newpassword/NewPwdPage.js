import React from 'react';
import NewPwdForm from './NewPwdForm';

class NewPwdPage extends React.Component{
    render(){
        return(
            <div>
                <div class="col-md-5 col-offset-md-3 email-sent-block">
                    <NewPwdForm/>
                </div>

            </div>
        );
    }
}

export default NewPwdPage;
