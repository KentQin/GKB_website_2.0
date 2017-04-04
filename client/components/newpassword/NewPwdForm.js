import React from 'react';
import validateInput from '../../../server/shared/validations/changePswd';

class NewPwdForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
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

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log("login sends: ", this.state);
        // axios.post('/api/users/login', this.state);
        if (this.isValid()) {
            this.setState({errors: {} });
            this.props.changePswdRequest(this.state).then(
                // after server response then...
                // if successful
                (res) => {
                    console.log("I am here in changePswdRequest");
                    this.context.router.push('/home')
                },
                // if server response any error message, set it into state errors
                (err) => {
                  console.log("I am here in errors changePswdRequest");
                    this.setState({ errors: err.response.data})
                });
        }
    }

    render(){
        return(
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h2 className="h-e-a-d-e-r-t-e-x-t">CHOOSE NEW PASSWORD</h2>
                <p>Please enter a new password. Password needs to be at least eight characters long.</p>
                <div className="form-group">
                    <input
                        value = {this.state.password}
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        className="form-control input-w-60"
                        id="NewPassword"
                        placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <input
                        value={this.state.confrimPassword}
                        onChange={this.onChange}
                        name="confirmPassword"
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

NewPwdForm.propTypes = {
    changePswdRequest: React.PropTypes.func.isRequired
}

NewPwdForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default NewPwdForm;
