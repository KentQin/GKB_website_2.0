import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/login';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        console.log("login sends: ", this.state);
        // only when form info is valid, we make the request
        if (this.isValid()) {
            this.setState({errors: {} });
            console.log("Login page: ", this.props.userLoginRequest);
            this.props.userLoginRequest(this.state).then(
                // after server response then...
                // if successful
                (res) => {
                    this.context.router.push('home')
                },
                // if server response any error message, set it into state errors
                (err) => {
                    console.log("Login Form: login failed");
                    //console.log(err.response.data);
                    this.setState({ errors: err.response.data});
                    console.log("this.state.errors: ", this.state.errors);
                });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit}>
                <h1 className="h-e-a-d-e-r-t-e-x-t">LOGIN</h1>
                {errors.login && <span className={classnames("help-block", { 'has-error': errors.login})} >{errors.login}</span> }
                <div className={classnames("form-group", { 'has-error': errors.email})}>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        type="text"
                        className="form-control input-w-60"
                        id="exampleInputEmail1"
                        placeholder="Email" />
                    {errors.email && <span className="help-block">{errors.email}</span> }
                </div>
                <div className={classnames("form-group", { 'has-error': errors.email})}>
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        className="form-control input-w-60"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                    {errors.password && <span className="help-block">{errors.password}</span> }
                </div>
                <div className="form-group">
                    <Link to="/resetpassword" >Forget Password?</Link>
                </div>
                <button type="submit" className="btn btn-default btn-login">Login</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LoginForm;
