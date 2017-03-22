import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("login sends: ", this.state);
        axios.post('/api/users/login', this.state);
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h1 className="h-e-a-d-e-r-t-e-x-t">LOGIN</h1>
                <div className="form-group">
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email" />
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
                    <Link to="/resetpassword" >Forget Password?</Link>
                </div>
                <button type="submit" className="btn btn-default btn-login">Login</button>
            </form>
        );
    }
}

export default LoginForm;