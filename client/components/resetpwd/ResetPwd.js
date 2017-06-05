/*
 * This component renderrs the form for user to put email in
 * It is used by new password page
 */
import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/resetpassword';


class ResetPwd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors:{}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
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
        this.props.resetpwdRequest(this.state).then(
            // after server response then...
            // if successful
            (res) => {
                console.log("I am here in resetpwdRequest");
                //this.context.router.push('/emailsentpage')
                browserHistory.push('/emailsentpage');
            },
            // if server response any error message, set it into state errors
            (err) => {
                // this.setState({ errors: err.response.data})
                this.setState({ errors: err.response.data});
                console.log("I am here in errors resetpwdRequest");
            });
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h3 className="h-e-a-d-e-r-t-e-x-t">RESET PASSWORD</h3>
                {errors.login && <span className={classnames("help-block", { 'has-error': errors.login})} >{errors.login}</span> }
                <div className={classnames("form-group", { 'has-error': errors.email})}>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email Address" />
                    {errors.email && <span className="help-block">{errors.email}</span> }
                </div>
                <button type="submit" className="btn btn-default btn-login" onClick={this.onSubmit}>Submit</button>
                <div className="form-group">
                    <Link to="/login" >Return to Login</Link>
                </div>
            </form>
        );
    }
}

export default ResetPwd;
