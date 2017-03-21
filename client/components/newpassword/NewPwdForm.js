import React from 'react';

class NewPwdForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confrimPassword: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render(){
        return(
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h2 className="h-e-a-d-e-r-t-e-x-t">CHOOSE NEW PASSWORD</h2>
                <p>Please enter a new password. Password needs to be at least eight characters long.</p>
                <div className="form-group">
                    <input
                        value = {this.state.password}
                        name="new_password"
                        type="password"
                        className="form-control input-w-60"
                        id="NewPassword"
                        placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <input
                        value={this.state.confrimPassword}
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        className="form-control input-w-60"
                        id="ConfirmPassword"
                        placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-default btn-login">Submit</button>
            </form>
        );
    }
}

export default NewPwdForm;