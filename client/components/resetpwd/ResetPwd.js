import React from 'react';
import { Link } from 'react-router';

class ResetPwd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username_email: ''
        }

        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form className="form-horizontal">
                <h1 className="h-e-a-d-e-r-t-e-x-t">RESET PASSWORD</h1>
                <div className="form-group">
                    <input
                        value={this.state.username_email}
                        onChange={this.onChange}
                        name="username_email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email Address" />
                </div>
                <button type="submit" className="btn btn-default btn-login">Submit</button>
                <div className="form-group">
                    <Link to="/login" >Return to Login</Link>
                </div>
            </form>
        );
    }
}

export default ResetPwd;