import React from 'react';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const {user} = this.props.login;
        return(
            <div className="col-md-6 col-md-offset-3 email-sent-block-wel">
                <h1>WELCOME! {user.email}</h1>
                <h2>Your profile should be here, coming soon</h2>
            </div>
        )
    }

}

Profile.propTypes = {
    login: React.PropTypes.object.isRequired
}

export default Profile;