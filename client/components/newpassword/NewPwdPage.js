import React from 'react';
import NewPwdForm from './NewPwdForm';
import {changePswdRequest} from '../../actions/changePswdRequestAction';
import { connect } from 'react-redux';

class NewPwdPage extends React.Component{
    render(){

        const { changePswdRequest, email } = this.props;
        return(
            <div className="container loginPage float_on_the_map-large">
                <div className="col-md-5 col-offset-md-3 email-sent-block window-drop-shadow">
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

export default connect( (state)=>{ return{}}, { changePswdRequest }) (NewPwdPage);