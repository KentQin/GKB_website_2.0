import React from 'react';
import { Link } from 'react-router';

class SignupForm extends React.Component {
    render() {
        return (
            <form className="form-horizontal">
                <h1 className="h-e-a-d-e-r-t-e-x-t">SIGN UP</h1>
                <div className="form-group">
                    <input type="text" className="form-control input-w-60" id="exampleInputEmail1" placeholder="Email Adress" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control input-w-60" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control input-w-60" id="exampleInputConfirm" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
                <div className="form-group">
                    <Link to="/login" >Return to Login</Link>
                </div>
            </form>
        );
    }
}

export default SignupForm;