import React from 'react';
import NewPwdForm from './NewPwdForm';
import LinkToHome from './../common/LinkToHome';
import {changePswdRequest} from '../../actions/changePswdRequestAction';
import { connect } from 'react-redux';

class NewPwdPage extends React.Component{
    render(){

        const { changePswdRequest } = this.props;
        return(
            <div className="container loginPage float_on_the_map">
                <LinkToHome/>
                <div className="col-md-5 col-offset-md-3 email-sent-block">
                    <NewPwdForm changePswdRequest={changePswdRequest}/>
                </div>

            </div>
        );
    }
}

NewPwdPage.propTypes = {
    changePswdRequest: React.PropTypes.func.isRequired
}

//export default ResetPasswordPage;
export default connect( (state)=>{ return{}}, { changePswdRequest }) (NewPwdPage);

//export default NewPwdPage;
