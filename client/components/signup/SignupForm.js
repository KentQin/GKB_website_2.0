/*
 * This component renders the login form
 * It is used by homepage and map login
 */
import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';


class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    // client side validation,
    // if any invalid input, setState
    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {

        // receive userSignupRequest from SingupPage, and send this.state to userSignupRequest
        // in actual, userSignupRequest is a function, action creator,
        // it will read this.state as param, and dispatch an action
        e.preventDefault();

        // only when form info is valid, we make the request
        if (this.isValid()) {
            this.setState({errors: {} });
            this.props.userSignupRequest(this.state).then(
                // after server response then...
                // if successful
                (res) => {
                    this.context.router.push('/welcome')
                },
                // if server response any error message, set it into state errors
                (err) => {
                    this.setState({ errors: err.response.data})
                });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form
                onSubmit={this.onSubmit}
                className="form-horizontal"
            >
                <h1 className="h-e-a-d-e-r-t-e-x-t">SIGN UP</h1>
                {errors.signup && <span className={classnames("help-block", { 'has-error': errors.signup})} >{errors.signup}</span> }
                <div className={classnames("form-group", { 'has-error': errors.email})}>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email Adress" />
                    {errors.email && <span className="help-block">{errors.email}</span> }
                </div>
                <div className={classnames("form-group", { 'has-error': errors.password})}>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        className="form-control input-w-60"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                    {errors.password && <span className="help-block">{errors.password}</span> }
                </div>
                <div className={classnames("form-group", { 'has-error': errors.confirmPassword})}>
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        name="confirmPassword"
                        type="password"
                        className="form-control input-w-60"
                        id="exampleInputConfirm"
                        placeholder="Confirm Password" />
                    {errors.confirmPassword && <span className="help-block">{errors.confirmPassword}</span> }
                </div>
                <button type="submit" className="btn btn-default btn-login">Submit</button>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}


export default SignupForm;
