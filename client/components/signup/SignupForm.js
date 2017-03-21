import React from 'react';
import { Link } from 'react-router';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        // receive userSignupRequest from SingupPage, and send this.state to userSignupRequest
        // in actual, userSignupRequest is a function, action creator,
        // it will read this.state as param, and dispatch an action
        console.log("Singup Form say: ", this.props );
        console.log("Singup Form get: ", this.props.userSignupRequest, " from Signup Page");

        this.props.userSignupRequest(this.state).then(
            // after server response then...
            // if successful
            ()=>{},
            // if server response any error message
            ({response})=>{this.setState({error:response.data})}
        );
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className="form-horizontal"
            >
                <h1 className="h-e-a-d-e-r-t-e-x-t">SIGN UP</h1>
                <div className="form-group">
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email Adress" />
                </div>
                <div className="form-group">
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        className="form-control input-w-60"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                </div>
                <div className="form-group">
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.onChange}
                        name="confirmPassword"
                        type="password"
                        className="form-control input-w-60"
                        id="exampleInputConfirm"
                        placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-default btn-login">Submit</button>
                <div className="form-group">
                    <Link to="/login" >Return to Login</Link>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;