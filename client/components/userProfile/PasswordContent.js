
/*
 * This component renders change password page
 * This is used by account setting
 */

import React from 'react';
import { updatePswdAction } from './../../actions/updatePswdAction';
import validateInput from './../../../server/shared/validations/updatePswd';
import { connect } from 'react-redux';
import classnames from 'classnames';

class PasswordContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword:'',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log("login sends: ", this.state);
        // axios.post('/api/users/login', this.state);
        console.log("Submitting new password");
        if (this.isValid()) {
            this.setState({errors: {} });
            console.log("In onsubmit: " + this.props.login.user.email);
            var toSend = {
                newPassword: this.state.newPassword,
                email: this.props.login.user.email,
                password: this.state.oldPassword
            }

            this.props.updatePswdAction(toSend).then(
                // after server response then...
                // if successful
                (res) => {
                    console.log("I am here in updatePswdRequest");
                    this.context.router.push('/home')
                },
                // if server response any error message, set it into state errors
                (err) => {
                    console.log("I am here in errors updatePswdRequest");
                    this.setState({ errors: err.response.data});
                    console.log(err)
                });
        }
    }



    render(){

        const { user } = this.props.login;
        const { updatePswdAction } = this.props;
        const { errors } = this.state;

        return(
            <div className="middle-block">
                <form className="form-horizontal update-pswd-form" onSubmit={this.onSubmit}>
                    <h1 className="h-e-a-d-e-r-t-e-x-t">Update Password</h1>
                    <div className={classnames("form-group", { 'has-error': errors.oldPassword})}>
                        <input
                            name="oldPassword"
                            value = {this.state.oldPassword}
                            onChange={this.onChange}
                            type="password"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Old Password" />
                        {errors.oldPassword && <span className="help-block">{errors.oldPassword}</span> }
                    </div>
                    <div className={classnames("form-group", { 'has-error': errors.newPassword})}>
                        <input
                            value = {this.state.newPassword}
                            onChange={this.onChange}
                            type="password"
                            name="newPassword"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="New Password" />
                        {errors.newPassword && <span className="help-block">{errors.newPassword}</span> }
                    </div>
                    <div className={classnames("form-group", { 'has-error': errors.confirmPassword})}>
                        <input
                            value = {this.state.confirmPassword}
                            onChange={this.onChange}
                            type="password"
                            name="confirmPassword"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Confirm Password" />
                        {errors.confirmPassword && <span className="help-block">{errors.confirmPassword}</span> }
                    </div>
                    <button type="submit" className="btn btn-default btn-login">Save</button>
                </form>
            </div>
        );
    }
}

PasswordContent.propTypes = {
    updatePswdAction: React.PropTypes.func.isRequired,
    login: React.PropTypes.object.isRequired,
}
PasswordContent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect((state)=> {return {login: state.login}}, { updatePswdAction }) (PasswordContent);