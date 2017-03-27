import React from 'react';
import LoginPage from './../login/LoginPage';

class WelcomeForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(){
        e.preventDefault();
        var loginmodal = <LoginPage id="login-modal"/>;
    }

    render(){
        return(
            <div className="col-md-6 col-md-offset-3 email-sent-block-wel">
                <h1 className="h-e-a-d-e-r-t-e-x-t-wel">WELCOME!</h1>
                <div className="welcome-text-dark-wel">
                    <p>Before we begin, please set your public username.
                        This username will be visible to all users on our platform.</p>
                </div>
                <div className="form-group-wel">
                    <input
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Public Username" />
                </div>
                <button type="submit" className="btn btn-default btn-login">Submit</button>
            </div>
        );
    }
}

export default WelcomeForm;