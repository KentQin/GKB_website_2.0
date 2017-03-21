import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class ResetPwd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {

        e.preventDefault();
        axios.post('/api/resetpwd', this.state);
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h1 className="h-e-a-d-e-r-t-e-x-t">RESET PASSWORD</h1>
                <div className="form-group">
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email Address" />
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
