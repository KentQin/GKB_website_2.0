import React from 'react';
import WelcomeForm from './WelcomeForm';
import { connect } from 'react-redux';

class WelcomePage extends React.Component {


    render() {

        return (
            <div>
                <div className="row centered">
                    <div className="col-md-6 col-md-offset-3 float_on_the_map">
                        <WelcomeForm login={this.props.login}/>
                    </div>
                </div>
            </div>
        )
    }
}

WelcomePage.propTypes = {
    login: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps)(WelcomePage);
