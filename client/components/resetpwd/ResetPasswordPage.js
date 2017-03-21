import React from 'react';
import ForgotPwd from './ForgotPwd';
import ResetPwd from './ResetPwd';

class ResetPasswordPage extends React.Component{
    render(){
        return(
           <div className="ResetPasswordPage">
               <div className="row centered">
                   <div className="col-md-2">
                   </div>
                   <div className="col-md-4 welcome-block reset-pwd-page-block">
                       <ForgotPwd/>
                   </div>
                   <div className="col-md-4 reset-pwd-block reset-pwd-page-block">
                       <ResetPwd/>
                   </div>
                   <div className="col-md-2">
                   </div>
               </div>
           </div>
        );
    }

}

export default ResetPasswordPage;