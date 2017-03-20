import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confrimPassword: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        /*axios.post(URL,{jason data})*/
        axios.post('api/users', { user: this.state });
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
                        value={this.state.confrimPassword}
                        onChange={this.onChange}
                        name="confrimPassword"
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

export default SignupForm;