import React from 'react';
import ForgotPwd from './ForgotPwd';
import ResetPwd from './ResetPwd';
import { connect } from 'react-redux';
import { resetpwdRequest } from '../../actions/resetpswdAction';
import LinkToHome from './../common/LinkToHome';

class ResetPasswordPage extends React.Component{
    render(){

        const { resetpwdRequest } = this.props;
        return(
           <div className="ResetPasswordPage float_on_the_map ">
               <LinkToHome/>
               <div className="row centered">
                   <div className="col-md-2">
                   </div>
                   <div className="col-md-4 welcome-block reset-pwd-page-block">
                       <ForgotPwd />
                   </div>
                   <div className="col-md-4 reset-pwd-block reset-pwd-page-block">
                       <ResetPwd resetpwdRequest={resetpwdRequest}/>
                   </div>
                   <div className="col-md-2">
                   </div>
               </div>
           </div>
        );
    }

}

ResetPasswordPage.propTypes = {
    resetpwdRequest: React.PropTypes.func.isRequired
}

//export default ResetPasswordPage;
export default connect( (state)=>{ return{}}, { resetpwdRequest }) (ResetPasswordPage);
