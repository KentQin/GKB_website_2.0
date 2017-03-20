import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username_email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form className="form-horizontal">
                <h1 className="h-e-a-d-e-r-t-e-x-t">LOGIN</h1>
                <div className="form-group">
                    <input
                        value={this.state.username_email}
                        onChange={this.onChange}
                        name="username_email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Username/ Email" />
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
                    <label>
                        Forget Password?
                    </label>
                </div>
                <button type="submit" className="btn btn-default">Login</button>
            </form>
        );
    }
}

export default LoginForm;