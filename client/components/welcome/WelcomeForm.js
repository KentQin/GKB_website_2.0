import React from 'react';

class WelcomeForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
        //this.onSubmit = this.onSubmit.bind(this);
    }


    // onSubmit() {
    //     this.props.hideWelcomeFormShowProfile();
    // }


    render(){
        const {user} = this.props.login;
        return(
            <form
                onSubmit={this.onSubmit}
                className="form-horizontal "
            >
                <div className="col-md-6 col-md-offset-3 email-sent-block-wel" >
                    <h1 className="h-e-a-d-e-r-t-e-x-t-wel">WELCOME! {user.email}</h1>
                    <div className="welcome-text-dark-wel">
                        <span>Before we begin, please set your public username.
                            This username will be visible to all users on our platform.</span>
                    </div>
                    <div className="form-group-wel">
                        <input
                            type="text"
                            className="form-control input-w-60"
                            id="exampleInputEmail1"
                            placeholder="Public Username" />
                    </div>
                    <button type="submit" className="btn btn-default btn-login" onClick={this.onSubmit}>Submit</button>
                </div>
            </form>

        );
    }
}

WelcomeForm.propTypes = {
    login: React.PropTypes.object.isRequired
}

export default WelcomeForm;