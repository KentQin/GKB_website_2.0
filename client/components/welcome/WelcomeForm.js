import React from 'react';

class WelcomeForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {

        // receive userSignupRequest from SingupPage, and send this.state to userSignupRequest
        // in actual, userSignupRequest is a function, action creator,
        // it will read this.state as param, and dispatch an action
        // console.log("Singup Form say: ", this.props );
        // console.log("Singup Form get: ", this.props.userSignupRequest, " from Signup Page");
        e.preventDefault();

        // only when form info is valid, we make the request
        this.setState({errors: {} });
        const { user } = this.props.login;
        user.userName = this.state.userName;
        console.log("Welcome: ",user)
        this.props.addNameRequest(user).then(
            // after server response then...
            // if successful
            (res) => {
                this.context.router.push('/home')
            },
            // if server response any error message, set it into state errors
            (err) => {
                this.setState({ errors: err.response.data})
            });

    }


    render(){
        const {user} = this.props.login;
        return(
            <form
                onSubmit={this.onSubmit}
                className="form-horizontal "
            >
                <div className="col-md-6 col-md-offset-3 email-sent-block-wel" >
                    <h1 className="h-e-a-d-e-r-t-e-x-t-wel">WELCOME!</h1>
                    <div className="welcome-text-dark-wel">
                        <span>Before we begin, please set your public username.
                            This username will be visible to all users on our platform.</span>
                    </div>
                    <div className="form-group-wel">
                        <input
                            onChange={this.onChange}
                            name="userName"
                            type="text"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Public Username" />
                    </div>
                    <button type="submit" className="btn btn-default btn-login" >Submit</button>
                </div>
            </form>

        );
    }
}

WelcomeForm.propTypes = {
    login: React.PropTypes.object.isRequired,
    addNameRequest: React.PropTypes.func.isRequired
}

WelcomeForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default WelcomeForm;
