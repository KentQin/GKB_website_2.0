
/*
 * This component renders the complete welcome page
 * This is used on top of map
 */
import React from 'react';
import WelcomeForm from './WelcomeForm';
import { connect } from 'react-redux';
import { addNameRequest } from '../../actions/addNameAction';

class WelcomePage extends React.Component {


    render() {
        return (
            <div>
                <div className="row centered">
                    <div className="float_on_the_map">
                        <WelcomeForm login={this.props.login} addNameRequest = {this.props.addNameRequest}/>
                    </div>
                </div>
            </div>
        )
    }
}

WelcomePage.propTypes = {
    login: React.PropTypes.object.isRequired,
    addNameRequest: React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        login: state.login
    };
}

export default connect(mapStateToProps, { addNameRequest })(WelcomePage);
