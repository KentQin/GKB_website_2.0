import React from 'react';
import { connect } from 'react-redux';


class userProfile extends React.Component {
    render() {

        const { login } = this.props.login;
        console.log(login);
        return (
            <div className="container loginPage">
                <div className="row centered">
                    <h1>userProfile</h1>
                </div>
            </div>
        )
    }
}

userProfile.propTypes = {
    email: React.PropTypes.object.isRequired
}

function matStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(matStateToProps)(userProfile);
