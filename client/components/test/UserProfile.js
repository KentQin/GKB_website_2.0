import React from 'react';
import { connect } from 'react-redux';


class UserProfile extends React.Component {
    render() {
        const { user } = this.props.login;
        console.log('this.props.login: ',user);
        return (
            <div className="container loginPage">
                <div className="row centered">
                    <h1>Welcome {user.email}</h1>
                </div>
            </div>
        )
    }
}

UserProfile.propTypes = {
    login: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapStateToProps: ',state.login);
    return {
        login: state.login
    };
}

export default connect(mapStateToProps)(UserProfile);
