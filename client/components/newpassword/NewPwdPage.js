import React from 'react';
import NewPwdForm from './NewPwdForm';
import LinkToHome from './../common/LinkToHome';
import {changePswdRequest} from '../../actions/changePswdRequestAction';
import { connect } from 'react-redux';

class NewPwdPage extends React.Component{
    render(){

        const { changePswdRequest, email } = this.props;
        return(
            <div className="container loginPage float_on_the_map">
                { this.props.params.email && <h2>Hello, {this.props.params.email}</h2>}
                <LinkToHome/>
                <div className="col-md-5 col-offset-md-3 email-sent-block">
                    <NewPwdForm changePswdRequest={changePswdRequest} email={this.props.params.email}/>
                </div>

            </div>
        );
    }
}

NewPwdPage.propTypes = {
    changePswdRequest: React.PropTypes.func.isRequired,
    email: React.PropTypes.string
}

//export default ResetPasswordPage;
export default connect( (state)=>{ return{}}, { changePswdRequest }) (NewPwdPage);

//export default NewPwdPage;
